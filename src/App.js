import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";
import todoStore from "./stores/TodoStore";

@observer
class App extends Component {
    render() {
        return [
            <div id="todoapp" className="todoapp">
                <TodoEntry/>
                <TodoItems/>
                <TodoFooter todoStore = {todoStore}/>
            </div>,
            <footer className="info">
                <p>Written by <a href="https://github.com/alitalebi7s">Ali Talebi</a></p>
                <p>Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a></p>
            </footer>
        ]
    }
}


export default App;
