import React from "react"
import "./css/todo-add-items.css"

export default class TodoAddItems extends React.Component{
state = {
    label:""
};
   // newPostElement = React.createRef()
    // onLabelChange = ()=> {
    //   this.setState({
    //       label: this.newPostElement.current.value
    //   })
    // }

    onLabelChange = (e)=> {

        this.setState({
            label:e.target.value
        })
    }
    onSubmit = (e)=> {

       e.preventDefault();
       let val = this.state.label
        if (val !== "") {
            this.props.addItem(val)
            this.setState({
                label:""
            })
        }

    }
    render() {
        return (
            <form className="todoAdd" onSubmit={this.onSubmit}>
                <input className="addInput" placeholder="Добавь" onChange={this.onLabelChange} value={this.state.label}  ref={this.newPostElement} type="text"/>
                <button className="btn">Добавить в список</button>
            </form>
        )
    }
}
