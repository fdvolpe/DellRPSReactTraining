import React, {Component} from 'react';

export default class LikeButton extends React.Component{
    
    constructor(){
        super();
        this.state = {likes:0};
    }

    updateLike(){
        this.setState((prevState)=>{
            return {likes: prevState.likes + 1}
        });
    }

    render(){
        return(
            <button onClick={()=>this.updateLike()}><b>{this.state.likes}</b>👍</button>
        );
    }
}