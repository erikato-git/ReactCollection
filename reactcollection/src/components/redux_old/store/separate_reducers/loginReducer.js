import { legacy_createStore } from "redux";
import * as actions from '../actions';

const initData = {
    users: ['admin','manager','end-user'],
    loginDetail: 'none'
}

const LoginReducer = (state=initData,action) => {

    if(action.type === actions.LOGIN){
        return{
            ...state,
            loginDetail: action.data
        }
    }

    return state
}

const loginReducer = legacy_createStore(LoginReducer)       // createStore is deprecated

export default loginReducer;



