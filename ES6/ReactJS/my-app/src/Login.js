import React, {Component} from 'react';

class Login extends React.Component{

    constructor(){
        super();
        this.state = {username: "admin", pwd: "nimda"};
    }

    render(){
        return(
            <>
                <input type='text' placeholder='Enter username' value={this.state.username}/>
                <br/>
                <input type='password' placeholder='Enter password' value={this.state.pwd}/>
                <br/>
                <button onClick={()=>alert(`Login success for ${this.state.username}`)}>Login</button>
            </>
        )
    }
}

export default Login;