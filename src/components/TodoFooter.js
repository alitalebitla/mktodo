import React, {Component} from "react";
import {observer} from "mobx-react"

@observer
class TodoFooter extends Component {

    render() {
        const todoStore = this.props.todoStore

        if (todoStore.todos.length === 0) return null;
        return (
            <footer className="footer">
                <span className="todo-count">
                    {todoStore.activeTodoCount} item left
                </span>
                <ul className="filters">
                    <li><a
                        onClick={() => this.props.todoStore.changeFilter(0)}
                        className={todoStore.filterKey == 0 ? "selected" : ""}>All</a></li>
                    <li><a
                        onClick={() => this.props.todoStore.changeFilter(1)}
                        className={todoStore.filterKey == 1 ? "selected" : ""}>Active</a></li>
                    <li><a
                        onClick={() => this.props.todoStore.changeFilter(2)}
                        className={todoStore.filterKey == 2 ? "selected" : ""}>Completed</a></li>
                </ul>
                <button className="clear-completed"
                        style={{display: todoStore.completedTodoCount ? '' : 'none'}}
                        onClick={() => {
                            todoStore.removeAllCompleted()
                        }}>
                    Clear completed
                </button>
            </footer>

        )
    }
}

export default TodoFooter
