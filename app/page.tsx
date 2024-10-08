
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";

export default  function Home() {



  return (
    <main className="container">
      {/* 
      <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.title}</li>)
      }
      </ul> */}
      <AddTodoForm/>
      <TodoTable/>


    </main>
  );
}
