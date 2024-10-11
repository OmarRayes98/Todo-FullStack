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

    const todos = await prisma.todo.findMany({orderBy:{
        createdAt:"desc"
    }});
    return todos;
    // Error Handling

}

export const createTodListAction = async ({title,body,completed,userId}:{title:string,body?:string|undefined,completed:boolean,userId:string|null})=>{
await prisma.todo.create({
    data:{
    title:title,
    body:body,
    completed:completed,
    user_id:userId as string,
    }
})

revalidatePath("/")

}

export const updateTodListAction = async ({id,title,body,completed}:ITodo)=>{

    await prisma.todo.update({
        where:{
            id
        },
        data:{
            title,
            body,
            completed
        }
    });

    revalidatePath("/")

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
