import { ListBulletIcon } from "@radix-ui/react-icons";
import { api } from "@/convex/_generated/api";
import { useAction, useMutation } from "convex/react";
import { Bold, Heading1, Heading2, Heading3, Italic, Highlighter, Code, Strikethrough, List, AlignLeft, AlignRight, AlignCenter, Sparkles } from "lucide-react";
import React from "react";
import { useParams } from "next/navigation";
import { chatSession } from "@/configs/AIModel";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";

function EditorExtension({editor}) {
  const {fileId}=useParams();
  const SearchAI = useAction(api.myAction.search)
  const saveNotes=useMutation(api.notes.AddNotes)
  const {user}=useUser();


  const onAiClick=async()=>{
    toast("AI is getting your answer...")
    const selectedText=editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      " "
    );
    console.log("selectedText", selectedText);
    console.log("Query to SearchAI:", { query: selectedText, fileId: fileId });

    const result = await SearchAI({
      query: selectedText,
      fileId: fileId
    })

    const UnformattedAns=JSON.parse(result);
    let AllUnformattedAns="";
    UnformattedAns&&UnformattedAns.forEach(item=>{
      AllUnformattedAns=AllUnformattedAns+item.pageContent
    });

    const PROMPT="For Question:" + selectedText + " and with the given content as answer,"+
    "Please give appropriate answer in HTML format but only include Body. The answer content is "+ AllUnformattedAns;

    const AiModelResult=await chatSession.sendMessage(PROMPT);
    console.log(AiModelResult.response.text());
    const FinalAns=AiModelResult.response.text().replace("```", "").replace("html", "").replace("```", "");

    const AllText=editor.getHTML();
    editor.commands.setContent(AllText+"<p> <strong>Answer: </strong>"+FinalAns+" </p>");


    saveNotes({
      notes:editor.getHTML(),
      fileId:fileId,
      createdBy:user?.primaryEmailAddress?.emailAddress
    })

  }
  // Ensure editor is defined before rendering buttons that depend on it
  return (
    editor && (
      <div className="p-5">
        <div className="control-group">
          <div className="button-group flex gap-3">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""
              }
            >
              <Heading1 />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? "text-blue-500" : ""}
          >
            <Heading2/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? "text-blue-500" : ""}
          >
            <Heading3/>
          </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "text-blue-500" : ""}
            >
              <Bold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "text-blue-500" : ""}
            >
              <Italic />
            </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? "text-blue-500" : ""}
          >
            <Highlighter/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive('code') ? "text-blue-500" : ""}
          >
            <Code/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? "text-blue-500" : ""}
          >
            <Strikethrough/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? "text-blue-500" : ""}
          >
            <List/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? "text-blue-500" : ""}
          >
            <AlignLeft/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? "text-blue-500" : ""}
          >
            <AlignCenter/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? "text-blue-500" : ""}
          >
            <AlignRight/>
          </button>
          <button
            onClick={() => onAiClick()}
            className={"hover:text-blue-500"}
          >
            <Sparkles/>
          </button>
          </div>
        </div>
      </div>
    )
  );
}

export default EditorExtension;
