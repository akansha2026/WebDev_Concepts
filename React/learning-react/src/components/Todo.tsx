import  { TodoProps } from "../types/todo.type"

function Todo(props:TodoProps) {
    console.log(props)
    const {todo , index} = props
    console.log(index)
    return (
        <div className="todo">
            <h2>Title: {todo.title}</h2>
            <h3>Status: {todo.completed ? "Completed" : "Pending"}</h3>
        </div>
    )
}

export default Todo