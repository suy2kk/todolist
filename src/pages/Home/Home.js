import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import { DatePicker } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
     handleChange(checked) {
        console.log(`switch to ${checked}`);
      }

    render() {
        return (
            <div>
            <DatePicker onChange={value => this.handleChange(value)} />
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
        )
    }
}

export default hot(module)(Home);
