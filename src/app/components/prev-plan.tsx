'use client'

import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react';
import { TaskDb } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';

export const PrevPlan = () => {
  const editor = useEditor({
    extensions: [StarterKit, TaskList, TaskItem],
    content: `<ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">Today...</li>
        </ul>`,
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    }
  });
  const [date, setDate] = useState<string>(new Date().toISOString());
  const [tasks, setTasks] = useState<string>("");


  useEffect(() => {
    const todaysTasks = useLiveQuery(
      async () => {
        const todaysTasks = await TaskDb.tasks
          .where('age')
          .equals(date)
          .toArray();

        return todaysTasks;
      },
      [date]
    );

    if (todaysTasks !== undefined && todaysTasks.length > 0) {
      setTasks(todaysTasks[0].task);
    }
  }, [date]);

  return (
    <div>
      <div className='text-2xl text-black font-bold px-4 mb-2'>
        Today's Plan
      </div>
      <div className='rounded-md bg-stone-200 h-44 w-full text-black p-4 overflow-y-scroll text-lg'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

