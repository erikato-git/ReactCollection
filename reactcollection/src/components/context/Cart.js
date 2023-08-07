import React from 'react'
import TotalContext from './store/total-context'
import '../../App.css'

function Cart(props){
  return(
    <div className="customDiv">
      <h3>Cart Component</h3>
      <hr/>
      <ul>
        {
          props.cart.map((product,index)=>{
            return(
              <li key={index}>{product.pName} </li>
            )
          })
        }
      </ul>
      </div>
    )
}

export default Cart