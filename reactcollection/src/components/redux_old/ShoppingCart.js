import '../../App.css'
// import Cart from './Cart';
// import Total from './Total';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Steps:
// 1. Create a global store and reducer
// 2. User the 'Provider' to pass the store data
// 3. Access the data at component-level
// 4. Dispatch actions if there is events

// Reducers: are functions that can access the global store
// Eg. when pressing a button a dispatch-function is activated that triggers the reducer with an object that contains an action-method
// The reducer-function then updates the states in the store

// Redux is most proper to use in large size application

// useStore vs useSelectore: useStore is the store-object passed in the Provider, useSelector only selects the specific data in the particular store-object

// useSelector when I want to access data, useDispatch when I want to update the global state

// Install: npm i redux react-redux

function ShoppingCart() {

    const products = useSelector(state => state.products)   // selects the data from the store
    const dispatch = useDispatch();
    const loginDetail = useSelector(state => state.loginDetail)

    function purchaseHandler(e){
      let pName = e.target.options[e.target.selectedIndex].text;
      let price = e.target.value;
      let obj = {pName,price};

      dispatch({type: 'PURCHASE', data:obj})    // dispatch will call the reducer (store), 'payload' could be name whatever
    }

    return (
      <div className="App">

        <div className="customDiv">
        <h3>Purchase Component - User: {loginDetail}</h3>
        <hr/>
        <select onChange={(e) => purchaseHandler(e)}>
          {
            products.map((product,index)=>{
              return(
              <option value={product.price} key={index}>
                {product.pName} - ${product.price}
              </option>
            )})
          }
        </select>
        </div>
      </div>
    );
  }
  
export default ShoppingCart