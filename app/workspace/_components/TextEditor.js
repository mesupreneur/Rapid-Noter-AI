import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import EditorExtension from "./EditorExtension";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import WorkspaceHeader from './WorkspaceHeader';


function TextEditor({ fileId }) {
 const notes = useQuery(api.notes.GetNotes, { fileId: fileId });


 const editor = useEditor({
   extensions: [
     StarterKit,
     Placeholder.configure({ placeholder: "Start Taking your notes here..." }),
     TextAlign.configure({ types: ["paragraph"] }),
     Highlight,
   ],
   editorProps: {
     attributes: {
       class: "focus:outline-none h-screen p-5",
     },
   },
 });


 useEffect(() => {
   editor && editor.commands.setContent(notes);
 }, [notes, editor]);


 return (
   <div>
     <EditorExtension editor={editor} />
     <div className="overflow-scroll h-[88vh]">
       <EditorContent editor={editor} />
     </div>
   </div>
 );
}


export default TextEditor;