import React from "react"
import "./css/item-status.filter.css"
export default class ItemStatusFilter extends React.Component  {
    buttons = [
        {name:"all",label:"All"},
        {name:"active",label:"Active"},
        {name:"done",label:"Done"}
    ]

   render() {
        const {filter,onFilterChange} = this.props
        const button = this.buttons.map(({name,label})=> {
            const isActive = filter ===name;
            const clazz = isActive?"btn-active":"btn"
            return (
                <button onClick={()=> onFilterChange(name)} type="button" className={`btn ${clazz}`} key={name}>{label}</button>

            )
        })
       return (
           <div className="todo-search_button">
               {button}
           </div>
       )
   }
}

