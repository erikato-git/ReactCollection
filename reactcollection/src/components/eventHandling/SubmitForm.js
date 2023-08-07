

import React, { useState } from 'react'

function SubmitForm() {

    // 1. Approach
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [mobile,setMobile] = useState("")
    const [data,setData] = useState("")

    // 2. Approach
    const [personInfo,setPersonInfo] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
    })

    function firstNameChangeHandler(e){
        // setFirstName(e.target.value)     // 1. Approach
        setPersonInfo({...personInfo,firstName:e.target.value})
    }

    function lastNameChangeHandler(e){
        // setLastName(e.target.value)      // 1. Approach
        setPersonInfo({...personInfo,lastName:e.target.value})
    }

    function mobileChangeHandler(e){
        // setMobile(e.target.value)        // 1. Approach
        setPersonInfo({...personInfo,mobile:e.target.value})
    }

    // 3. Approach - dynamic key ES6+
    function inputChangeHandler(e){
        // setPersonInfo({...personInfo,[e.target.name]:e.target.value})   // not proper update approach

        // Functional update syntax : ensures we have the lastest copy of the states
        console.log(e)

        setPersonInfo((prevState) => {
            return ({...prevState,[e.target.name]:e.target.value})  
        })
    }

    // Works for check-boxes and radio-buttons
    function inputCheckHandler(e){
        setPersonInfo((prevState) => {
            return ({...prevState,[e.target.name]:e.target.checked})  
        })
    }


    function getData(e){
        e.preventDefault();
        // setData(firstName + " " + lastName + " " + mobile)
        // console.log(data)
        console.log(personInfo)
    }

    return (
        <div>
            <form onSubmit={getData}>
                <input 
                    type='text'
                    name='firstName'
                    placeholder='first name'
                    // onChange={firstNameChangeHandler}   // 1.-2. Approach
                    onChange={inputChangeHandler}   // 3. Approach
                />
                <br/>
                <input
                    type='text'
                    name='lastName'
                    placeholder='last name'
                    // onChange={firstNameChangeHandler}   // 1.-2. Approach
                    onChange={inputChangeHandler}    // 3. Approach
                />
                <br/>
                <input
                    type='text'
                    name='mobile'
                    placeholder='mobile'
                    // onChange={mobileChangeHandler}       // 1.-2. Approach
                    onChange={inputChangeHandler}   // 3. Approach
                />
                <br/>
                <input
                    type='checkbox'
                    name='remeberMe'
                    // onChange={mobileChangeHandler}       // 1.-2. Approach
                    onChange={inputCheckHandler}   // 3. Approach
                />
                <br/>


                <input type='submit' value='Submit' />
                <br/>
            </form>
            {/* {data} */}
            {JSON.stringify(personInfo)}
        </div>
  )
}

export default SubmitForm