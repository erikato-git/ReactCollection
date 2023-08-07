import React, { useEffect, useState } from 'react'

function ShowData() {
    const [strXY,changeXY] = useState("0,0");

    const displayXY = (e) => {
        let str = e.pageX + "," + e.pageY;
        changeXY(str);
        console.log(str)    // check if eventlistener is removed after unmounting component
    }

    useEffect(() => {
        window.addEventListener("mousemove",displayXY);     // mount component

        return () => {
            console.log("clean up code")        // unmount component
            window.removeEventListener("mousemove",displayXY);
        }
    }) 

        
    return (
        <div>{strXY}</div>
    )
}

export default ShowData