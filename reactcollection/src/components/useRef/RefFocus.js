import React, { useEffect, useRef } from 'react'

function RefFocus() {
    const iElement = useRef(null);

    useEffect(() => {
        iElement.current.focus();
    })

    return (
        <div className='App'>
            <input type='text'></input>
            <br/>
            <input type='text' ref={iElement}></input>                  {/* Here the useRef element gets the DOM */}
            <br/>
            {/* <button onClick={() => iElement.current.focus()}>Set focus</button> */}
            {/* <input type="text"></input> */}
            <button onClick={() => console.log(iElement.current)}>Get DOM</button> 
        </div>
    )
}

export default RefFocus