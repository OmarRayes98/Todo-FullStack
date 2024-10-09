"use-clinet"
import { Pen, Trash } from "lucide-react"
import { Button } from "./ui/button"
import Spinner from "./Spinner"
import { useState } from "react";
import { deleteTodListAction } from "@/actions/todo.actions"

const TodoTableActions = ({id}:{id:string}) => {
    const [loading,setLoading] = useState(false);

  return (
    <>
      <Button size={"icon"}>
                    <Pen size={16}/>
                </Button>
                <Button size={"icon"} 
                variant={"destructive"}  

                onClick={async ()=>{
                    setLoading(true)
                    await deleteTodListAction({id})
                    setLoading(false)
                    }}>

                    {loading ? <Spinner/> : <Trash size={16}/>}
                </Button>
    </>
  )
}

export default TodoTableActions
