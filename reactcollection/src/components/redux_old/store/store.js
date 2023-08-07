import { legacy_createStore } from "redux";
import * as actions from './actions';

const initData = {
    products: [
        {pName:'Apple',price:20},
        {pName:'Banana',price:3},
        {pName:'Orange',price:10},
        {pName:'Grapes',price:8}
    ],
    cart: [],
    total: 0,
    users: ['admin','manager','end-user'],
    loginDetail: 'none'
}

const reducer = (state=initData,action) => {
    console.log(action)
    
    if(action.type === actions.PURCHASE){
        // We need to return all properties because the reducer return a initData-obj
        return {
            ...state,
            cart: [...state.cart,action.data],
            total: state.total + parseInt(action.data.price)
        }
    }

    if(action.type === actions.DELETE){
        return{
            ...state,
            cart:state.cart.filter((i,index) => index != action.data.index),
            total: state.total - action.data.price
        }
    }

    if(action.type === actions.LOGIN){
        return{
            ...state,
            loginDetail: action.data
        }
    }

    return state
}

const store = legacy_createStore(reducer)       // createStore is deprecated

export default store;



