import React, {Component} from 'react';

import style from './Todolist.css';

import image from './images/brickpsert.jpg';

export default class Todolist extends Component {
    constructor(props) {
       super(props);
       this.state = { todolist:[  
   {  
      status:false,
      name:"sex"
   },
   {  
      status:false,
      name:"eat 3 star"
   },
   {  
      status:true,
      name:"sleep"
   }
], inputValue:'' };
    }
    addtodo() {
      this.setState({
        todolist: [...this.state.todolist, {  
           status:false,
           name: this.state.inputValue
        }
      ]
      });
      console.log(this.state.todolist);
    }
    updateInputValue(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }
    check(i){
        let todolist = Object.assign([],this.state.todolist); // Pull the entire items object out. Using object.assign is a good idea for objects.
        todolist[i].status = !todolist[i].status; // update the items object as needed
        console.log(todolist);
        this.setState({todolist}); // Put back in state
           
    }
    render() {
        return (
            <div className={style.box}>
              <ol>
                  {this.state.todolist.map((i,index) => <li >
                  <a onClick={this.check.bind(this, index)} className={i.status?"done":" "}>{i.name}</a>
                  </li>)}
              </ol> 
              <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
              <button onClick={this.addtodo.bind(this)}>add</button>
                
            </div>
        )
    }
    
}
