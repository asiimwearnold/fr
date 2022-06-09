import React from 'react'
import "./maillist.css"
const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle"> Save time and money !</h1> 
        <span className="mailDesc">Sign up and get a Discount</span>
        <div className="mailInputContainer">
        <input type="text" placeholder="your email" /> 
        <button>Subscribe</button>   
        </div>   
     </div>
    
  )
}

export default MailList