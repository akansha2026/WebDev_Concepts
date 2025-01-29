import { useState } from "react"
import TodoType from "../types/todo.type"
import Todo from "./Todo"



export default function TodoList() {
    // const data = []
    // for (let i = 0; i < todos.length; i++) {
    //     const element = <div className="todo">
    //         <h2>Title: {todos[i].title}</h2>
    //         <h3>Status: {todos[i].completed ? "Completed" : "Pending"}</h3>
    //     </div>
    //     data.push(element)
    // }
    const result = useState<TodoType[]>([])
    console.log(result)
    const todos = result[0]
    const setTodos = result[1]
    return (
        <div className="todo-list">
            <h1>TodoList component!</h1>
            {
                todos.map((todo, idx) =>
                    <Todo index={idx}  todo={todo} key={idx}/>
                )
            }
        </div>
    )
}