'use client'

import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


export const Journal = () => {
  const editor = useEditor({
    extensions: [StarterKit, TaskList, TaskItem],
    content: `<p> Today's Entry </p>`,
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    }
  });

  return (
    <div>
      <div className='text-2xl text-black font-bold px-4 mb-2'>
        Journal Entry
      </div>
      <div className='rounded-md border-1 border-stone-300 bg-stone-100 h-fit min-h-[700px] w-full text-black p-4 overflow-y-scroll text-lg'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

