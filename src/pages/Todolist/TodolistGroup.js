import React, {Component} from 'react';

import style from './Todolist.css';

import image from './images/brickpsert.jpg';

export default class TodolistGroup extends Component {
    constructor(props) {
       super(props);
       // Don't do this!
       this.state = { todolist: ["123"] };
    }
    fuckme() {
      alert(this.state.todolist);
    }
    render() {
        return (
            <div className={style.box}>
              <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ol> 
              <input></input>
              <button onClick={this.fuckme.bind(this)}>add</button>
                
            </div>
        )
    }
}