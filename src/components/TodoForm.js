import React, {useState} from 'react'
import uuid from "uuid"
import { Button, TextField } from "@material-ui/core"




function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })


    function handleTaskInputChange(e) {
                setTodo({...todo, task: e.target.value })
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() })
            setTodo({ ...todo, task: ''})
        }
    }


    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <TextField 
            label="task" 
            name="task" 
            type="text"
            onChange={handleTaskInputChange} 
            value={todo.task}
            />
            
            <Button type="submit">Submit</Button>
        </form>
    )
}


export default TodoForm