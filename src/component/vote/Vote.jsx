import React, { Component } from 'react'

export default class Vote extends Component {

    constructor(props){
        super(props)
        this.state ={
            value:0,
            ph:0,
            ja:0,
            sql:0
        }
    }

    increment1=()=>{
        this.setState({
            value:this.state.value+1
        })
    }

    increment2=()=>{
        this.setState({
            ph:this.state.ph+1
        })
    }

    increment3=()=>{
        this.setState({
            ja:this.state.ja+1
        })
    }

    increment4=()=>{
        this.setState({
            sql:this.state.sql+1
        })
    }
    render() {
        const count={
            fontSize:"30px"
        }

        const topic={
                marginLeft:"90px",
                fontSize:"30px"
        }

        const div={
            height:"50px",
            width:"450px",
            backgroundColor:"grey",
            marginLeft:"540px"
        }

        const btn={
                marginLeft:"100px",
                height:"25px",
                backgroundColor:"red"
        }
        return (
            <div className="container">
                <h1>VOTE FOR YOUR LANGUAGE</h1>
                <div style={div}>
                    <span style={count}>{this.state.value}</span>
                    <span style={topic}>php</span>
                    <button style={btn} onClick={this.increment1}>Clickhere to vote</button>
                </div>

                <div style={div}>
                    <span style={count}>{this.state.ph}</span>
                    <span style={topic}>php</span>
                    <button style={btn} onClick={this.increment2}>Clickhere to vote</button>
                </div>

                <div style={div}>
                    <span style={count}>{this.state.ja}</span>
                    <span style={topic}>php</span>
                    <button style={btn} onClick={this.increment3}>Clickhere to vote</button>
                </div>

                <div style={div}>
                    <span style={count}>{this.state.sql}</span>
                    <span style={topic}>php</span>
                    <button style={btn} onClick={this.increment4}>Clickhere to vote</button>
                </div>
                  
            </div>
        )
    }
}
