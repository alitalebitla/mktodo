import {observable, action} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = []
    lastId = 0

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastId ++))
    }
}

const todoStore = new TodoStore()

export default todoStore
