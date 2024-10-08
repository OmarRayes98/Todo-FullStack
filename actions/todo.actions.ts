"use server";


//for all server action that is gonna create :
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

/*
getTodListAction
Action : I mean it's server action
*/

export const getTodListAction = async ()=>{

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
}

export const updateTodListAction = async ()=>{

}

export const deleteTodListAction = async ()=>{

}