
// Steps:
// 1. Create a global store and reducer
// 2. User the 'Provider' to pass the store data
// 3. Access the data at component-level
// 4. Dispatch actions if there is events

// Reducers: are functions that can access the global store
// Eg. when pressing a button a dispatch-function is activated that triggers the reducer with an object that contains an action-method
// The reducer-function then updates the states in the store

// Redux is most proper to use in large size application

import React from 'react'
import ShoppingCart from './ShoppingCart'
import Cart from './Cart'
import Total from './Total'
import { Provider } from 'react-redux'
import store from './store/store'
import ShoppingCartCl from './ShoppingCartCl'
import Login from './Login'
import { combineReducers, legacy_createStore } from 'redux'
import productReducer from './store/separate_reducers/productsReducer'
import loginReducer from './store/separate_reducers/loginReducer'

// generally 'Provider' is put in the highest level of components in index.js


// For multiple reducers, and all useSelectors in the components have to be opdated with the particular pointer (pr/lr) to the proper reducer
// Not tested, deprecated but good to know

// const rootReducer = combineReducers({
//   pr: productReducer,
//   lr: loginReducer
// })

// const store = legacy_createStore(rootReducer)


function ReduxOld() {
  return (
    <div>
      <Provider store={store}>
        <Login />
        <ShoppingCart />
        <ShoppingCartCl />
        <Cart />
        <Total />
      </Provider>
    </div>
  )
}

export default ReduxOld