import React, {Component} from 'react';

class Button extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(<button onClick={()=>alert('Done!')}>{this.props.caption}</button>);
    }
}

export default Button;