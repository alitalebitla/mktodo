import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import todoStore from "./stores/TodoStore";

@observer
class App extends Component {
    render() {
        return [
            <div id="todoapp" className="todoapp">
                {/* your code here */}
                <h1>Worked :)</h1>
            </div>,
            <footer className="info">
                <p>Written by <a href="#">Your Name</a></p>
                <p>Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a></p>
            </footer>
        ]
    }
}


export default App;
