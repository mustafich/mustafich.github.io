import React from "react"
import "./css/app-header.css"
const AppHeader = (props)=>{
    return(
        <div className="todo-header">
            <h1>Мой список дел</h1>
            <div className="header-active">
               <h2>{props.todo} more to do,{props.done} done</h2>
            </div>
        </div>
    )
}

export default AppHeader