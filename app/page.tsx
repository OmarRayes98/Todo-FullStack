
import AddTodoForm from "@/components/AddTodoForm";

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


    </main>
  );
}
