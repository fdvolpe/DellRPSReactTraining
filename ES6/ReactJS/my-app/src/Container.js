import React, {Component} from "react";
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink, useLocation, useParams} from 'react-router-dom'
import Post from "./NewPost";
import SignIn from "./SignIn";
import User from "./usingHttp";

export default class Container extends React.Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <header>
                <ul>
                    <li><NavLink to='/signin'>SignIn</NavLink></li>
                    <li><NavLink to='/http'>Example HTTP</NavLink></li>
                    <li><NavLink to='/post'>View POST</NavLink></li>
                </ul>
            </header>
            <Routes>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/http' element={<User/>}/>
                <Route path='/post' element={<Post/>}/>
            </Routes>
            </BrowserRouter>
            </>
        );
    }
}