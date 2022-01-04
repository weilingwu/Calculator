import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as useNavigate} from 'react-router-dom'
import Calculate from "../Topics/Topics";
export default class Button extends React.Component{
    constructor(props) {
        super(props);

    }
    handleClick=()=>{
        console.log(this.props.name)
        this.props.ClickHandler(this.props.name)
    }
    render(){
        return(<button onClick={this.handleClick}>
            {this.props.name}
        </button>)
    }
}

