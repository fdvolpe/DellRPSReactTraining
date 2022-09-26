import React from "react";

export default function Hoc(props){

    const {Component} = props;

    return(
        <>
        <h3>This component loads other components</h3>
        <Component/>
        </>
    )
}