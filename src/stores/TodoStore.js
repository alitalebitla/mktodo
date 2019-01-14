import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = []
    lastId = 0
    @observable filterKey = 0

    @computed get activeTodoCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 0 : 1),
            0
        )
    }

    @computed get completedTodoCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 1 : 0),
            0
        )
    }


    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastId++))
        console.log(this.todos)
    }

    @action
    removeAllCompleted() {
        this.todos = this.todos.filter((value) => {
            return (!value.completed)
        })
    }

    @action
    toggleAll() {
        if (this.activeTodoCount === 0) this.todos.forEach(todo => todo.completed = false)
        else this.todos.forEach(todo => todo.completed = true)
    }

    @action
    changeFilter(key) {
        this.filterKey = key;
    }


}

const todoStore = new TodoStore()

export default todoStore
