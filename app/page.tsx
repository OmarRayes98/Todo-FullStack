
import { getTodListAction } from "@/actions/todo.actions";
import TodoFormDialog from "@/components/TodoFormDialog";
import TodoTable from "@/components/TodoTable";

export default async  function Home() {

  const todos = await getTodListAction();

  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
      <TodoFormDialog/>
      <TodoTable todos={todos}/>
      </div>

    </main>
  );
}
