import React, {Component} from "react";
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink, useLocation, useParams} from 'react-router-dom'
import Hoc from "./Hoc";
import LikeButton from "./LikeButton";
import Loop from "./Loop";
import Post from "./NewPost";
import { GuardedClass } from "./RouteGuard";
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
                    <li><NavLink to='/hoc'>Using HOC</NavLink></li>
                    <li><NavLink to='/hooks'>Using Hooks</NavLink></li>
                </ul>
            </header>
            <Routes>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/http' element={<GuardedClass Component={()=><User/>}/>}/>
                <Route path='/post' element={<Post/>}/>
                <Route path='/hoc' element={<Hoc Component={()=><LikeButton/>}/>}/>
                <Route path='/hooks' element={<Loop/>}/>
            </Routes>
            </BrowserRouter>
            </>
        );
    }
}