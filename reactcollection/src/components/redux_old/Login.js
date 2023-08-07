
import React from 'react'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const users = useSelector(state => state.users)
    const loginDetail = useSelector(state => state.loginDetail)
    const dispatch = useDispatch()

    function loginHandler(e){
        let loginDetail = e.target.options[e.target.selectedIndex].text;
        dispatch({type:'LOGIN',data:loginDetail})       // Here data original from users in store is passed to loginDetail in store
    }

    return (
        <div className='customDiv'>
            <h3>Login Component - User: {loginDetail} </h3>
            <hr/>
                <select onChange={(e) => loginHandler(e)}>
                    {
                        users.map((user,index) => {
                            return(
                                <option key={index}>
                                    {user}    
                                </option>
                            )
                        })                        
                    }
                </select>
        </div>
    )
}

export default Login