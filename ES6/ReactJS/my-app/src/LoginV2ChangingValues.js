import React, {Component} from 'react';

export default class LoginV2 extends React.Component{
    constructor(){
        super();
        this.state = {username:"", pwd:""};
    }

    setUsername(ctrl){
        this.setState({username:ctrl.target.value});
    }

    setPassword(ctrl){
        this.setState({pwd:ctrl.target.value});
    }

    verifyLogin(ctrl){
        if (this.state.username == 'admin' && this.state.pwd == 'nimda')
        {
            alert(`Login succesful for ${this.state.username}`);
        }
        else
        {
            alert(`Login failed for ${this.state.username}`);
        }
    }

    render(){
        return(
            <>
            <input type='text' placeholder='Enter username' onChange={(ctrl)=>this.setUsername(ctrl)}/>
            <br/>
            <input type='password' placeholder='Enter password' onChange={(ctrl)=>this.setPassword(ctrl)}/>
            <br/>
            <button onClick={(ctrl)=>this.verifyLogin(ctrl)}>Login</button>
        </>
        );
        }
    }
