import React from "react"
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./css/search-panel.css"

export default class SearchPanel extends React.Component {
    state={
        search:""
    }
    onSearchChange = (e)=> {
        const search = e.target.value;
        this.setState({search})
        this.props.onSearchChange(search)
    }
   render () {
       return (
           <div className="todo-search">
               <input placeholder="search" value={this.state.search} onChange={this.onSearchChange}/>
               <ItemStatusFilter filter={this.props.filter} onFilterChange={this.props.onFilterChange}/>
           </div>
       )
   }
}
