import React, {Component} from "react";
import todoStore from "../stores/TodoStore";



class TodoEntry extends Component {

    constructor() {
        super()
        this.state = {
            value : ''
        }
    }

    handleKeyDown = event => {
        if(event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        todoStore.addTodo(this.state.value)
        this.setState({value: ''})
    }


    render() {
        return (
            <header className="header">
                <h1>Todo</h1>
                <input
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value})}
                    onKeyDown={event => this.handleKeyDown(event)}
                    type="text"
                    className={"new-todo"}
                    placeholder={"what needs to e done?"}
                />

            </header>
        )
    }
}

export default TodoEntry
