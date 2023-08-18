import '../../App.css'
import Cart from './Cart';
import Total from './Total';
import React, { useState } from 'react';
import TotalContext from './store/total-context';

// Context API
// 1. Create Context
// 2. Provider
// 3. Consumer

function ShoppingCart() {
    const products=[
      {pName:'Apple',price:20},
      {pName:'Banana',price:3},
      {pName:'Orange',price:10},
      {pName:'Grapes',price:8}
    ]
    const [cart,setProducts] = useState([]); 
    const [total,setTotal] = useState(0);
  
    let handleProdChange=(e)=>{
      let pName = e.target.options[e.target.selectedIndex].text;
      let price = e.target.value;
      let tCart=[...cart];
      let obj = {pName,price};
      let tPrice = parseInt(price);
      tPrice = total + tPrice;
      tCart.push(obj);
  
      setProducts(tCart);
      setTotal(tPrice);
  
    }
   
    return (
      <div className="App">
       
        <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr/>
        <select onChange={handleProdChange}>
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
            <Cart cart={cart} />
            {/* <TotalContext.Provider value={total}> */}
              <Total total={total}/>
              {/* <Total /> */}
            {/* </TotalContext.Provider> */}
      </div>
    );
  }
  
export default ShoppingCart