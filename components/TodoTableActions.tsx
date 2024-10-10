"use client";
import { Trash } from "lucide-react"
import { Button } from "./ui/button"
import Spinner from "./Spinner"
import { useState } from "react";
import { deleteTodListAction } from "@/actions/todo.actions"
import TodoFormDialog from "./TodoFormDialog";
import { ITodo } from "@/interfaces";

const TodoTableActions = ({todo}:{todo:ITodo}) => {
    const [loading,setLoading] = useState(false);

  return (
    <>
    <TodoFormDialog isEditDialog={true} oldTodoData={todo}/>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodListAction({ id:todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
}

export default TodoTableActions
