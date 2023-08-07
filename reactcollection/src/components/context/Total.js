

import React, { useContext } from 'react'
import TotalContext from './store/total-context'

function Total() {
    
    const total = useContext(TotalContext)      // useContext will re-render the component everytime there is a change in TotalContext


    // Old way

    // return (
    //     <TotalContext.Consumer>
    //         {
    //             (total)=>{
    //                 return(
    //                     <div className="customDiv">
    //                         <h3>Total Component</h3>
    //                         <hr/>
    //                         <h2>Total : {total}</h2>
    //                     </div>
    //                 )
    //             }
    //         }
    //     </TotalContext.Consumer>
    // )

    return (
        <div className="customDiv">
            <h3>Total Component</h3>
            <hr/>
            <h2>Total : {total}</h2>
        </div>

    )


}

export default Total