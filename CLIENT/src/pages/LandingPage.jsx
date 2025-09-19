import React from 'react'
import {Link} from "react-router-dom"
import "../styles/LandingPage.css"
const LandingPage = () => {
  return (
    <div className='main'>
        <h1>HI WLECOME TO INTERVIEW PLATFORM</h1>
        <Link to ="/interview"><button>Go Into the Interview</button></Link>
    </div>
  )
}

export default LandingPage