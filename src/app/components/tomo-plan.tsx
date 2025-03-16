'use client'

import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const TomoPlan = () => {
  const editor = useEditor({
    extensions: [StarterKit, TaskList, TaskItem],
    content: `<ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">For Tomorrow...</li>
        </ul>`,
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    }
  });

  return (
    <div >
      <div className='text-2xl text-black font-bold px-4 mb-2'>
        Tomorrow's Plans
      </div>
      <div className='rounded-md bg-stone-200 h-44 w-full text-black p-4 overflow-y-scroll text-lg'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

