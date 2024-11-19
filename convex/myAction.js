import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { api } from "./_generated/api.js";
import { v } from "convex/values";

// Action to ingest text into the Convex VectorStore
export const ingest = action({
  args: {
    splitText: v.any(), // Text that needs to be split into chunks
    fileId: v.object({ fileId: v.string() })   // File ID associated with the text
  },
  handler: async (ctx, args) => {
    // Create embeddings and store text in the vector store
    await ConvexVectorStore.fromTexts(
      args.splitText, // The text to be ingested
      args.fileId,    // The file ID
      new GoogleGenerativeAIEmbeddings({
        apiKey: "AIzaSyBXl5UuHtH0mAtr-diKlM-3kqIHDWMrlhI", // Replace with actual API key
        model: "text-embedding-004", // Model name
        taskType: TaskType.RETRIEVAL_DOCUMENT, // Task type for document retrieval
        title: "Document title", // Title for the document
      }),
      { ctx }
    );
    return "Completed.."; // Return completion message
  },
});

// Action to search for similar content in the Convex VectorStore
export const search = action({
  args: {
    query: v.string(), // Query string to search for
    fileId: v.string()  // File ID to filter results
  },
  handler: async (ctx, args) => {
    // Create vector store instance for search
    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey: "AIzaSyBXl5UuHtH0mAtr-diKlM-3kqIHDWMrlhI", // Replace with actual API key
        model: "text-embedding-004", // Model name
        taskType: TaskType.RETRIEVAL_DOCUMENT, // Task type for document retrieval
        title: "Document title", // Title for the document
      }),
      { ctx }
    );

    // Perform similarity search and filter by fileId
    const resultOne = (await vectorStore.similaritySearch(args.query, 1))
      .filter(q=>q.metadata.fileId == args.fileId); // Ensure strict equality

    console.log(resultOne); // Log the search results
    return JSON.stringify(resultOne); // Return the search results as a JSON string
  },
});
