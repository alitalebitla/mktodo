import {observable, action} from 'mobx'

export default class TodoModel {
    id
    @observable title
    @observable completed
    store

    constructor(store,title,completed,id) {
        this.id = id;
        this.title = title
        this.completed = completed
        this.store = store
    }

    @action
    toggle() {
        this.completed = !this.completed
    }

    @action
    removeTodo() {
        this.store.todos = this.store.todos.filter((value) => {
            return (value !== this)
        })
    }
}
