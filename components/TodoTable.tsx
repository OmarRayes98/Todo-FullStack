import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ITodo } from "@/interfaces"
import { Badge } from "./ui/badge"
import TodoTableActions from "./TodoTableActions"
  

  
export default function TodoTable({todos}:{todos:ITodo[]}) {


    return (
      <Table>
        <TableCaption>A list of your recent todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Desc</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.title}</TableCell>
              <TableCell>{todo.body}</TableCell>
              <TableCell>
              {
              todo.completed ?
              <Badge>Completed</Badge> : <Badge variant={'secondary'}>Uncompleted</Badge>
              }
              </TableCell>
              <TableCell className="flex items-center justify-end space-x-2">

                <TodoTableActions todo={todo}/>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  