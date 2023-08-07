
import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function ProductDetail() {
    const {id} = useParams();
    const pobj = useOutletContext();    // Receives data from parent for particular route '/:id'

    return (
        <div>
            <div>ProductDetail {id}</div>
            {/* <div>{JSON.stringify(pobj)}</div> */}
            <div>{JSON.stringify(pobj[id-1])}</div>
            <div>{console.log(pobj)}</div>
            
        </div>
    )
}

export default ProductDetail