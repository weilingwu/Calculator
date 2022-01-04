import React from 'react'

class Hello extends React.Component{
    constructor() {
        super();
        this.state = {
            count:0,
            txt:'a'
        }
        this.txtRef = React.createRef()
    }
    // state = {count:0}
    handleClick(e){
        e.preventDefault()
        console.log("a标签的单击事件被触发了")
    }
    handleChange = e=>{
        this.setState({
            txt:e.target.value
        })
    }

    render() {
        return (<div>
            <h1>
                计数器：{this.state.count}
            </h1>
            <button onClick={()=>{
                this.setState({count:this.state.count+1})
            }}>
                +1
            </button>
            <input type = "text" value = {this.state.txt} onChange = {this.handleChange}/>
        </div>);
    }
}
export default Hello



// class Parent extends React.Component{
//     getChildMsg = (msg) =>{
//         console.log('接收到的子组件的数据', msg)
//     }
//     render(){
//         return (<div>
//             父组件:<Child getMsg = {this.getChildMsg}/>
//         </div>)
//     }
// }

