import React, {Component} from "react";
import { observer } from 'mobx-react'
import todoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {

    onToggle= () => {
        this.props.todo.toggle()
    }

    onRemove = () => {
        this.props.todo.removeTodo()
    }

    render() {
        const { todo } = this.props
        return (
            <li className={todo.completed ? 'completed' : ''}>
                <div className={"view"}>
                    <input
                        onChange={this.onToggle}
                        type="checkbox"
                        className="toggle"
                        value={todo.completed ? "off" : "on"}
                        checked={todo.completed}/>
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={this.onRemove}/>
                </div>
            </li>
        )
    }
}

export default TodoItem
