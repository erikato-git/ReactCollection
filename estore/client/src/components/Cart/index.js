import { useSelector } from 'react-redux';
import './_cart.scss';
import EmptyCart from '../Cart/EmptyCart'
import FilledCart from '../Cart/FilledCart'
import React from 'react'

function Cart() {
    const cart = useSelector(state => state.cartReducer)

    return (
        <div>
            {
                cart.cartItems.length === 0 ? 
                    <EmptyCart />
                :
                    <FilledCart />
            }
        </div>
    )
}

export default Cart

