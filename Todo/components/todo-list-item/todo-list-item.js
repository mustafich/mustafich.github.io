import React from "react"
import "./css/todo-list-item.css"
import TodoListButton from "../todo-list/todo-list-button/todo-list-button";

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false,
    };

    render() {
        let style = {
            color: this.state.important ? "red" : "black",
            fontWeight: this.state.important ? "900" : "400",
            fontSize:this.state.important ? "20px" : "18px",
        }
const {label,done,important,onToggleimportant,onToggleDone,onDelete,} = this.props;
        let className = "todo-list-item";
        if (done) {
            className += " done"
        }
        if (important) {
            className += " importantdSpan"
        }
        return (
        <div className="flex">
            <span className={className} onClick={onToggleDone}>
                <h3 style={{...style}}>{this.props.label}</h3>
            </span>
        <div className="buttons">
        <button type="button" className="btnLi btn-remove" onClick={onDelete}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        <button type="button" className="btnLi btn-important" onClick={onToggleimportant}><i className="fa fa-exclamation"/></button>
        {/*<button type="button" className={className} onClick={this.btnImportant}><i className="fa fa-exclamation"/></button>*/}
    </div>
</div>
        )
    }
}
