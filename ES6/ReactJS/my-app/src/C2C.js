import React, {Component} from 'react';

export class Child extends React.Component{

    onTrigger = (e)=>{
        this.props.parentCallback(e.target.myname.value)
        e.preventDefault();
    }

    render(){
        return(
            <div>
            <h2>Message:{this.props.message}</h2>
            <form onSubmit={(e)=>this.onTrigger(e)}>
                <input type='text' name='myname'/>
                <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default class Parent extends React.Component{

    constructor(){
        super();
        this.state = {name:""};
    }

    handleCallback = (childData)=>{
        this.setState({name:childData});
    }

    handleClick(e){
        this.props.passToChild(this.props.title)    //passing the parent component't title to the child
        e.preventDefault();
    }

    render(){
        const query="please provide SOS contact";
        return(
        <>
        <Child message="Message from child" parentCallback={(e)=>this.handleCallback(e)}/>
        <h3>{this.state.name}</h3>
        <hr/>
        <Child message={query}/>
        </>
        )
    }
}