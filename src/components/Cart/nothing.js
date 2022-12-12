import React from 'react'
import { Link } from 'react-router-dom';
import empty_cart_ from  '../Images/empty_cart_.svg' ;

const Nothing = () => {
  return (
    <div  className='empty-cart' >
      <img className='empty-cart-image' src={empty_cart_} alt ={"cart_is_empty"} ></img> 
      <h4 style={{margin: "0"}}>Hey it feels so light!</h4>
      <small style={{marginBottom: "10px"}}>There is nothing in your bag Let's add some items</small>
      
        <Link to = "/">
        <button style={{padding:"5px"}} className='card-button'>
        Go to Products</button>
        </Link>
        
    </div>
    
  )
}

export default Nothing;