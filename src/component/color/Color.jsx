import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props){
        super(props)
            console.log();
    }

    changecolor=()=>{

        document.body.style.backgroundColor=document.getElementById("background").value;
    }
    render() {
                const sel={
                    height:"30px",
                    width:"300px",
                    fontSize:"20px",
                    fontFamily:"chiller",
                    color:"grey"
                }

                const h={
                    fontSize:"150px",
                    fontFamily:"times new roman"
                }

        return (
            <div >
                <h1 style={h}> what colour do you want</h1>
                <select style={sel} id="background" onChange={this.changecolor}  >
                    <option value="red">RED</option>
                    <option value="green">GREEN</option>
                    <option value="orange">ORANGE</option>
                    <option value="yellow">YELLOW</option>
                    <option value="purple">PURPLE</option>
                    <option value="hotpink">HOTPINK</option>

                </select>
            </div>
        )
    }
}
