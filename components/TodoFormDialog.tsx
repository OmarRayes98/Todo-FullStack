
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

// import { Label } from "@/components/ui/label";
import { Pen, Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { todoFormSchema, TodoFormValues } from "@/schema";
import { createTodListAction, updateTodListAction } from "@/actions/todo.actions";
import { Checkbox } from "./ui/checkbox";
import Spinner from "./Spinner";
import { useState } from "react";
import { ITodo } from "@/interfaces";

const TodoFormDialog = ({isEditDialog,oldTodoData,userId}:{isEditDialog?:boolean,oldTodoData?:ITodo,userId?:string|null}) => {

  const [loading,setLoading]=useState(false);
  const [open,setOpen]=useState(false);


      // This can come from your database or API.
const defaultValues: Partial<TodoFormValues> = {
    title:oldTodoData ? oldTodoData.title :"",
    body:oldTodoData ? oldTodoData.body as string :"",
    completed:oldTodoData ? oldTodoData.completed :false,
  }
  
    const onSubmit = async(data:TodoFormValues)=>{
      console.log(data)
      setLoading(true);

      if(isEditDialog){

        await updateTodListAction(
          {
            id:(oldTodoData as ITodo).id,
            title:data.title,
            body:data.body as string,
            completed:data.completed
          })

      }else{
        await createTodListAction(
          {
          title:data.title,
          body:data.body,
          completed:data.completed,
          userId:userId ?userId:""
        })
      }


      setLoading(false);
      setOpen(false);
  
    }
  
    const form = useForm<TodoFormValues>({
      resolver: zodResolver(todoFormSchema),
      defaultValues,
      mode: "onChange",
    })


  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button>
        {
          isEditDialog?(
            <>
            <Pen size={16} className="me-1" />
            </>
          ):
          (
            <>
            <Plus size={14} className="me-1" />
            New Todo
            </>
          )
        }
      
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{isEditDialog ? "Edit this Todo":"Create Todo"}</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re
          done.
        </DialogDescription>
      </DialogHeader>


      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
      control={form.control}
      name="body"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Short Description</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormDescription>
            You can write a short description about your next todo .
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
          <FormField
      control={form.control}
      name="completed"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormLabel>Completed</FormLabel>

          <FormMessage />
        </FormItem>
      )}
    />

        <Button type="submit" disabled={loading}>
          {
            loading?(
              <>
              <Spinner /> Saving
              </>
            ):(
              "Save"
            )
          }
          
        </Button>

          </form>
          </Form>
    </DialogContent>
  </Dialog>
  )
}

export default TodoFormDialog
