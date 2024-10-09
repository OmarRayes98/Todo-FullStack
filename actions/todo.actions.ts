"use server";


import { ITodo } from "@/interfaces";
//for all server action that is gonna create :
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

/*
getTodListAction
Action : I mean it's server action
*/

export const getTodListAction = async ():Promise<Array<ITodo>>=>{

    const todos = await prisma.todo.findMany();
    return todos;
    // Error Handling

}

export const createTodListAction = async ({title,body,completed}:{title:string,body?:string|undefined,completed:boolean})=>{
await prisma.todo.create({
    data:{
    title:title,
    body:body,
    completed:completed
    }
})

revalidatePath("/")

}

export const updateTodListAction = async ()=>{

}

export const deleteTodListAction = async ({id}:{id:string})=>{
    await prisma.todo.delete({
        where:{
            id
        }
    });

     // refresh the page default as default not the layout 
     //path : the path of url . in out case is / . but if has /todos shoud write /todos
    revalidatePath("/")
}
