'use client'
import { Checkbox } from '@nextui-org/react'

interface User {
  id: string
  created_at: string
  email: string
  avatar_url: string
  user_name: string
  name: string
}

interface Task {
  id: string
  created_at: string
  content: string
  user_id: string
  users: User
}

export function TodoList ({ tasks }: { tasks: Task[] }) {
  return (
    <div className='w-screen p-10'>
      <Checkbox defaultSelected className='mb-3'>Show completed tasks</Checkbox>
      {/* Task Item */}
       <div className='bg-slate-700 p-5'>
          <Checkbox lineThrough color='success'>This is a task</Checkbox>
          <p className='text-xs text-end text-zinc-400'>9 Sep 2017</p>
       </div>
    </div>
  )
}
