import React from 'react'
import notifyImage from "../Images/notification.svg"

const Notification = () => {
  return (
    <div  className='empty-cart' >
    <img className='empty-cart-image' src={notifyImage} alt ={"cart_is_empty"} ></img> 
    <h1>No notification here</h1>
    
      
  </div>
  )
}

export default Notification