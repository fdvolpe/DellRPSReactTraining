import React, {Component, useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function RouteGuard(props){
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if (token === undefined || token === null)
            navigate('/signin');
    })
    return(<div>
        <Component/>
    </div>)
}


export class GuardedClass extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if (localStorage.getItem('token') == null || localStorage.getItem('token') === undefined){
            window.location.href = '/signin';
        }
    }
    
    componentDidUpdate(){
        if (localStorage.getItem('token') == null || localStorage.getItem('token') === undefined){
            window.location.href = '/signin';
        }
    }
    
    render(){
        let {Component} = this.props;
        return(
            <div>
                <Component/>
            </div>
        )
    }
    
}