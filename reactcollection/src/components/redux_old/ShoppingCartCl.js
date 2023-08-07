import '../../App.css'
import { React, Component, useState } from 'react';
import { connect } from 'react-redux';

// Class component, extra old approach to handle global states with redux

class ShoppingCartCl extends Component{
    render(){
        return(
            <div className="customDiv">
            <h3>Purchase Class-Component</h3>
            <hr/>
            <select onChange={(e)=>this.props.purchaseHandler(e)}>
              {
                this.props.products.map((product,index)=>{
                  return(
                  <option value={product.price} key={index}>
                    {product.pName} - ${product.price}
                  </option>
                )})
              }
            </select>
            </div>
        )
    }
}

// This function is called everytime the store is updated
function mapStateToProps(state){
    return {
      products: state.products
    }
}

// Action-creator
function actionPurchase(e){
  let pName = e.target.options[e.target.selectedIndex].text;
  let price = e.target.value;
  let obj = {pName,price};

  return({type: 'PURCHASE', data:obj})   
}

function mapDispatchToProps(dispatch){
  return{
      purchaseHandler:(e)=>dispatch(actionPurchase(e))
  }
}


// connect() allows class-component to be connected to redux store
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartCl);