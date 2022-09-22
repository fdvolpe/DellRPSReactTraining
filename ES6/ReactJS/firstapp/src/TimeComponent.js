import React, {Component} from 'react';

class Clock extends React.Component{

    render(){
        return (<b>It is {this.props.time.toLocaleTimeString()}</b>)
    }
}

export default Clock;