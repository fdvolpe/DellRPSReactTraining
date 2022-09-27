import React, { Component } from "react";

export default class SignIn extends React.Component {

    constructor() {
        super();
        this.state = { username: "", pwd: "" };
    }
    setUsername(e) {
        this.setState({ username: e.target.value });
    }

    setPassword(e) {
        this.setState({ pwd: e.target.value });
    }

    verifyLogin() {

        var params = { email: this.state.username, password: this.state.pwd }

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then(response => response.json(), (err) => console.error(err))
            .then(json => {
                localStorage.setItem("token", json.token)
                window.location.href = "/http";
            });
    }

    render() {
        return (
            <>
                <input type='text' placeholder="Enter Username" onChange={(e) => this.setUsername(e)} />
                <br />
                <input type='password' placeholder="Enter Password" onChange={(e) => this.setPassword(e)} />
                <br />
                <button onClick={() => this.verifyLogin()}>Login</button>
            </>
        );
    }
}