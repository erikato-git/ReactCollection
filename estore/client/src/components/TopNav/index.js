import GoogleLogin from 'react-google-login';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './_top-nav.scss';
import { useState } from 'react';
import { gapi } from 'gapi-script';

const TopNav = ()=>{
    const cartItemCount = useSelector(state=>state.cartReducer.totalItems);
    const [userDetails,setUserDetails] = useState()

    {/* gapi makes login-details visible for the application */}
    const succesHandler = (res) => {
        console.log(res)
        setUserDetails(res.profileObj)
    }

    return(
        <div>
            <div className='header bg-dark'>
                <div className='row top-nav-row'>
                <div className='brand my-1'>
                    <h1> eStore </h1>
                </div>
                <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                    <div className='dropdown m-0 p-0'>
                    <select className='select-btn w-100 p-0 m-0'>
                        <option> Men </option>
                        <option> Women </option>
                        <option> Kids </option>
                    </select>
                    </div>
                    <input className='form-control ' placeholder='Search...'/>
                    <button> <i className='fa fa-search'/> </button>
                </div>
                <div className='login-container p-0'>
                    <i className='fa fa-user-circle user-icon'/>
                    {/* Only users enabled for test-users will work in test-mode */}
                    <h5>
                        {
                            userDetails == null ?
                                <GoogleLogin
                                    clientId='301695556079-bvtmj90g78rhr3sgu0k7c3ls8a66adak.apps.googleusercontent.com'
                                    buttonText='Login'
                                    cookiePolicy='single_host_origin'
                                    onSuccess={succesHandler}
                                />
                            :
                                userDetails.name
                        }
                    </h5>
                </div>
                <div className='cart-wishlist'>
                    <ul className='p-0'>
                        <li className='list-icon'> <i className='fa fa-heart'/></li>
                        <Link to="/cart">
                            <li className='list-icon'>
                                <i className='fa fa-shopping-cart'/>
                                {
                                    cartItemCount!==0 ?
                                        <div id='cart-item-count'>
                                            <p> {cartItemCount} </p>
                                        </div>
                                    : <></>
                                }
                            </li>
                        </Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;