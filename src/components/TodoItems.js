import React, {Component} from "react";
import TodoItem from "./TodoItem";
import {observer} from "mobx-react"
import todoStore from "../stores/TodoStore";

@observer
class TodoItems extends Component {
    render() {
        return (
            <section className="main">
                <ul className="todo-list">
                    {
                        todoStore.todos.map(todo => {
                            return (
                                <TodoItem key={todo.id} todo={todo}/>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default TodoItems
