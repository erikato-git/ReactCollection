import React from 'react'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';


function Cart(){
  const cart = useSelector(state => state.cart)
  const loginDetail = useSelector(state => state.loginDetail)
  
  const dispatch = useDispatch();

  function deleteHandler(index,price){
    dispatch({type:'DELETE',data:{index,price}})
  }

  return (
    <div className="customDiv">
      <h3>Cart - User: {loginDetail}</h3>
      <hr />
      {
        cart.map((product, index) => {
          return (
            <li key={index} onClick={() => deleteHandler(index,product.price)} >{product.pName}</li>
          )
        })
      }
    </div>
)
}

export default Cart