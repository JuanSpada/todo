import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import { TodoList } from '@/app/components/todo-list'
export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  if (session === null) {
    redirect('/login')
  }
  const { data: tasks } = await supabase.from('tasks').select('*, users(*)')
  console.log(tasks)
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AuthButtonServer />
      {tasks !== null &&
        <TodoList tasks={tasks} />
      }
    </main>
  )
}
