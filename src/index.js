import React from 'react'
import ReactDom from 'react-dom'
import {PropTypes} from 'prop-types'
import {
    BrowserRouter as Router,Link,Routes,Route,useNavigate, useLocation
} from "react-router-dom";
import './index.css'
import Button from './About/About.js'
import Calculate from './Topics/Topics.js'

class BasicExample extends React.Component {
    constructor() {
        super();
        this.state = {
            total: null,
            next: null,
            operation: null,
            prestate:{
                total:null,
                next:null,
                operation:null
            }
    }
    }
    tick(buttonName){

        this.setState(Calculate(this.state, buttonName));
    }

    render(){
        return(
        <div className='button_pannel'>
            <div className="result">
                operate:{this.state.total}{this.state.operation}{this.state.next}
                <br/>
                result:  {this.state.total||"0"}
            </div>
            <div>
                <Button name = 'C' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '%' ClickHandler = {this.tick.bind(this)}/>
                <Button name = 'del' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '/' ClickHandler = {this.tick.bind(this)}/>
            </div>
            <br/>
            <div>
                <Button name = '7' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '8' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '9' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '*' ClickHandler = {this.tick.bind(this)}/>
            </div>
            <div>
                <Button name = '4' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '5' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '6' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '-' ClickHandler = {this.tick.bind(this)}/>
            </div>
            <div>
                <Button name = '1' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '2' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '3' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '+' ClickHandler = {this.tick.bind(this)}/>
            </div>
            <div>
                <Button name = '00' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '0' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '.' ClickHandler = {this.tick.bind(this)}/>
                <Button name = '=' ClickHandler = {this.tick.bind(this)}/>
            </div>
        </div>
    );
    }
}
ReactDom.render(<BasicExample/>, document.getElementById('root'))




