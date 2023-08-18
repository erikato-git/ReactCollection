import React from "react"


// Memo2_components.js

function Header(){
    console.log("Header")
    return (
        <div>Header</div>
    )
}


function DisplayCounter(props){
    console.log("DisplayCounter")
    return (
        <div>DisplayCounter {props.counter}</div>
    )
}


function DisplayFlag(props){
    console.log("DisplayFlag")
    return (
        <div>DisplayFlag {props.flag.toString()}</div>
    )
}

function Caption(props){
    console.log("Caption")
    return(
        <button onClick={props.click}>{props.title}</button>
    )
}

function Footer(){
    console.log("Footer")
    return (
        <div>Footer</div>
    )
}

const MemoizedHeader = React.memo(Header);
const MemoizedDisplayCounter = React.memo(DisplayCounter);
const MemoizedDisplayFlag = React.memo(DisplayFlag);
const MemoizedCaption = React.memo(Caption);
const MemoizedFooter = React.memo(Footer);


export { MemoizedHeader, MemoizedDisplayCounter, MemoizedDisplayFlag, MemoizedCaption, MemoizedFooter }