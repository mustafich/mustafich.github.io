import React from "react"
import TodoListItem from "../todo-list-item/todo-list-item";
import "./css/todo-list.css"
import TodoListButton from "./todo-list-button/todo-list-button";

const TodoList = ({todoDate,onDelete,onToggleimportant,onToggleDone})=> {

    const element = todoDate.map((item)=> {
        const {id,...itemProps} = item;

        return (
            <li className="flex" key={id}>
                <TodoListItem {...itemProps} onDelete={()=> onDelete(id)}
                              onToggleimportant={(()=>onToggleimportant(id))}
                              onToggleDone={(()=>onToggleDone(id))}
                />
            </li>
        )
    })
    return (
        <ul>
           {element}
        </ul>

    )
}

export default TodoList