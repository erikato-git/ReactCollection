

import React, { useState } from 'react'

function Conditionals() {
    const [checked,setCheked] = useState(false)
    const [items, setItems] = useState([
        { id: 1, pName: "Apple" },
        { id: 2, pName: "Banana" },
        { id: 3, pName: "Grapes" },
        { id: 4, pName: "Oranges" }
    ])

    // If-else

    // if(checked){
    //     return(
    //         <div>
    //             <input type="checkbox" onChange={() => setCheked(!checked)} />
    //             <h2>{checked.toString()}</h2>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <input type="checkbox" onChange={() => setCheked(!checked)} />
    //             <h2>{checked.toString()}</h2>
    //         </div>
    //     )
    // }


    // Switch-case

    // switch(checked){
    //     case true:
    //         return (
    //             <div>
    //                 <h1>True</h1>
    //                 <input type="checkbox" onChange={() => setCheked(!checked)} />
    //             </div>
    //         )
    //         break;
    //     case false:
    //         return (
    //             <div>
    //                 <h1>false</h1>
    //                 <input type="checkbox" onChange={() => setCheked(!checked)} />
    //             </div>
    //         )
    //         break;
    //     default:
    //         return null;
    // }


    // Teanary operator

    // return(
    //     <div>
    //         <input type="checkbox" onChange={() => setCheked(!checked)} />
    //         {
    //             checked ? 
    //                 items.map((product)=>
    //                     <li key={product.id}>{product.pName}</li>
    //                 )
    //             :
    //             <p>No data</p>
    //         }

    //     </div>
    // )


    // Logical operator

    return(
        <div>
            <input type="checkbox" onChange={() => setCheked(!checked)} />
            { !checked && 
                <div>
                    <p>Loading...</p>
                </div>
            }
            {
                checked &&
                items.map((product)=>
                        <li key={product.id}>{product.pName}</li>
                    )

            }
        </div>
    )
}

export default Conditionals