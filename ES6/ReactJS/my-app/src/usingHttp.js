import React, {Component} from "react";

export default class User extends React.Component{

    constructor(){
        super();
        this.state = {data: {}, support:{}};
    }

    getUser(){
        fetch('https://reqres.in/api/users/2')
        .then((response)=>response.json())
        .then((json)=>console.log(json));
    }

    getUserL2(){
        fetch('https://reqres.in/api/users/3')
        .then((response)=>response.json())
        .then((json)=>this.setState({data: json.data, support: json.support}));
    }

    imgStyle = {
        marginBottom: '10px'
    }

    render(){
        return(
            <>
            <h3>Getting user data from http://reqres.in... Please look at the console for data</h3>
            <button onClick={()=>this.getUser()}>Get User console</button>
            <button onClick={()=>this.getUserL2()}>Get User Display</button>
            <div>
                <img src ={this.state.data.avatar} style={this.imgStyle}/>
                <hr/>
                Email: {this.state.data.email}
                <br/>
                Full Name: {this.state.data.first_name} {this.state.data.last_name}
                <br/>
                <hr/>
                <h6>{this.state.support.text}</h6>
            </div>
            </>
        )
    }
}