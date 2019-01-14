import React, {Component} from "react";
import TodoItem from "./TodoItem";
import {observer} from "mobx-react"
import todoStore from "../stores/TodoStore";

@observer
class TodoItems extends Component {
    constructor() {
        super()
    }

    getFilterdTodos() {
        return todoStore.todos.filter(todo => {
            return (todoStore.filterKey === 1) ? !todo.completed : (todoStore.filterKey === 2) ? todo.completed : true
        })
    }


    render() {
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"
                       onChange={() => todoStore.toggleAll()}
                       checked={todoStore.activeTodoCount === 0 && todoStore.todos.length}/><label htmlFor="toggle-all" ></label>
                <ul className="todo-list">
                    {
                        this.getFilterdTodos().map(todo => {
                            return (
                                <TodoItem key={todo.id} todo={todo} removeHandler={this.onRemove}/>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default TodoItems
