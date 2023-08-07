

import React, { useState } from 'react'

function RenderingList() {
    const temp = ["Apple","Orange","Banana","Grapes"]
    const temp2 = 
    [
        {id:1,pName:"Apple"},
        {id:2,pName:"Orange"},
        {id:3,pName:"Banana"},
        {id:4,pName:"Grapes"}
    ]
    const [products,setProducts] = useState(temp)
    const [products2,setProducts2] = useState(temp2)

    // Two examples of list-rendering

    return (
        <div>
            {
                products.map((product,i) => 
                    <li key={i}>{product}</li>
                )

            }
            <br/>
            {
                products2.map((product)=>
                    <li key={product.id}>{product.pName}</li>
                )
            }
            <br/>
            {
                products2.map((product)=>
                    <Component key={product.id} {...product} />
                )
            }

        </div>
    )
}

function Component(props){
    // console.log(props)
    return (
        <li key={props.id}>{props.pName}</li>
    )
}

export default RenderingList