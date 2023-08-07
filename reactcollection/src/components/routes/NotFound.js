import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function NotFound() {

  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)  // Navigate to former page before invalid url
    }, 1000);
  },[])

  
  return (
    <div>
      404 NotFound
      {/* Navigate to home */}
      {/* <Navigate to="/"/> */}
    </div>
  )
}

export default NotFound