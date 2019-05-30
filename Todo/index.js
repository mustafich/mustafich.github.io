import React from "react"
import ReactDom from "react-dom"

import AppHeader from "./components/app-header/app-header"
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import TodoAddItems from "./components/todo-add-items/todo-add-items";
import "./index/css/index.css"


export default class App extends React.Component {
    newItemId = 0;
    state = {
        todoDate: [
            this.createTodoItem("Первое дело"),
            this.createTodoItem("Второе дело"),

        ],
        search: "",
        filter: "all"
    }

    createTodoItem(label) {

        return {
            label,
            important: false,
            done: false,
            id: this.newItemId++
        }
    }

    addItem = (text) => {

        let newTodoItem = this.createTodoItem(text)
        this.setState(({todoDate}) => {
            const newArray = [
                ...todoDate,
                newTodoItem

            ];
            return {
                todoDate: newArray
            }
        })


    }

    deleteItem = (id) => {
        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);
            const newArray = [
                ...todoDate.slice(0, idx),
                ...todoDate.slice(idx + 1)
            ];

            return {
                todoDate: newArray
            }
        })
    }
    onToggleDone = (id) => {

        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);

            const oldItem = todoDate[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [
                ...todoDate.slice(0, idx),
                newItem,
                ...todoDate.slice(idx + 1)
            ];
            return {
                todoDate: newArray
            }
        })
    }

    onToggleimportant = (id) => {

        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);
            const oldItem = todoDate[idx];
            const newItem = {...oldItem,important: !oldItem.important}
            let newArray = [
                    ...todoDate.slice(0,idx),
                newItem,
                ...todoDate.slice(idx+1)
            ]

            return {
                todoDate:newArray
            }
        })
    }

    search(items, search) {

        if (search.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    onSearchChange = (search) => {
        this.setState({search})

    }
    onFilterChange = (filter) => {

        this.setState({filter})
    }

    filter(items, filter) {

        if (filter === "all") {
            return items
        } else if (filter === "active") {
            return items.filter((item) => !item.done)
        } else if (filter === "done") {
            return items.filter((item) => item.done)
        }
    }

    render() {
        const {todoDate, search, filter} = this.state
        const visibleItems = this.filter(
            this.search(todoDate, search), filter)
        const doneCount = this.state.todoDate.filter((el) => el.done).length
        const todoCount = this.state.todoDate.length - doneCount


        return (
            <div className="todo">
                <AppHeader todo={todoCount} done={doneCount}/>
                <SearchPanel onFilterChange={this.onFilterChange} onSearchChange={this.onSearchChange} filter={filter}/>
                <TodoList todoDate={visibleItems} onDelete={this.deleteItem} onToggleDone={this.onToggleDone}
                          onToggleimportant={this.onToggleimportant}/>
                <TodoAddItems addItem={this.addItem}/>
            </div>
        )
    }

}


ReactDom.render(<App/>, document.getElementById("root"))

