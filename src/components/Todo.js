import React from "react"
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';





function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }
    

    return (
        <ListItem style={{display: "flex"}} className="list-item">
            <Checkbox 
                style={{color: "#204051"}}
                checked={todo.completed}
                onClick={handleCheckboxClick}/>
            <Typography
                variant="body1"
                style={{

                    color: "black",
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
            {todo.task}</Typography>
            <IconButton 
            onClick={handleRemoveClick}>
                <CloseIcon  style={{color: "#204051"}}/>
            </IconButton>
        </ListItem>
        
    )
}





export default Todo