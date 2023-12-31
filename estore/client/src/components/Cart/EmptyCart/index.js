import './_empty_cart.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className='p-4 ec-main-div'>
            <span className='my-5 ec-text'>Cart is empty</span>
            <hr/>
            <Link to="/">
                <div className='btn btn-warning my-3'>
                    <span style={{fontWeight:500}}> Continue shopping </span>
                </div>
            </Link>
        </div>
    )
}

export default EmptyCart





