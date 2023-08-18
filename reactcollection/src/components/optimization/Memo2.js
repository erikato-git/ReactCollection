// Memo2.js

import React, { useCallback, useState } from 'react'
import { MemoizedHeader, MemoizedDisplayCounter, MemoizedDisplayFlag, MemoizedCaption, MemoizedFooter } from './Memo2_components'

function Memo2() {
    const [counter,setCounter] = useState(0)
    const [mflag,setFlag] = useState(true)

    function changeCounter() {
        setCounter(counter + 1)
    }

    function changeFlag() {
        setFlag(!mflag)
    }

    // Without Memo - If I press "Change Counter" all components will render
    
    // return (
    //     <div>
    //         <Header />
    //         <DisplayCounter counter={counter} />
    //         <DisplayFlag flag={mflag} />
    //         <Caption title={"Change counter"} click={changeCounter} />
    //         <Caption title={"Change flag"} click={changeFlag} />
    //         <Footer />
    //     </div>


    // With Memo and CallBacks - optimized version, only renders when changes for particular component has occured
    
    // CallBacks works like memo for functions
    const callBackChangeCounter = useCallback(changeCounter,[counter])
    const callBackChangeFlag = useCallback(changeFlag,[mflag])

    return (
        <div>
            <MemoizedHeader />
            <MemoizedDisplayCounter counter={counter} />
            <MemoizedDisplayFlag flag={mflag} />
            <MemoizedCaption title={"Change counter"} click={callBackChangeCounter} />
            <MemoizedCaption title={"Change flag"} click={callBackChangeFlag} />
            <MemoizedFooter />
        </div>
    )
}


// function Header(){
//     console.log("Header")
//     return (
//         <div>Header</div>
//     )
// }

// function DisplayCounter(props){
//     console.log("DisplayCounter")
//     return (
//         <div>DisplayCounter {props.counter}</div>
//     )
// }

// function DisplayFlag(props){
//     console.log("DisplayFlag")
//     return (
//         <div>DisplayFlag {props.flag.toString()}</div>
//     )
// }

// function Caption(props){
//     console.log("Caption")
//     return(
//         <button onClick={props.click}>{props.title}</button>
//     )
// }

// function Footer(){
//     console.log("Footer")
//     return (
//         <div>Footer</div>
//     )
// }

export default Memo2