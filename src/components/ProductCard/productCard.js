

import React from 'react'
import { useCart } from '../../Context/context'


const ProductCard = ({product}) => {

  const {state: {cart}, dispatch} = useCart();
  return (
    <div>
   



      
<div className = "cards">
  <div className = "card">
    <img className = "card-image" src = {product.image} alt= {product.name} />
    <h4 class = "card-title"> {product.name} </h4>
    <h5 className = "card-title"> Price: ${product.price} </h5>
    <h6 className='card-title'>Fast Delivery</h6>
    <h6 className='card-title'>Rating</h6>
    <p className='card-title'>
      {cart.some(p => p.id === product.id) ? (
      <button 
        className = 'card-button'
        onClick={()=>{dispatch({type:"REMOV_FROM_CART",payload:product})}}>
      Remove From Cart
      </button>) : (
      <button 
        className='card-button'
        onClick={()=>{dispatch({type:"ADD_TO_CART",payload:product})}}>
      Add to cart
      </button>)
      }
{/* 
      <button onClick={()=>dispatch({type:"ADD_TO_CART", payload: product})}>Add to cart</button> */}
      {/* <button onClick={()=>dispatch({type:"REMOV_FROM_CART", payload: product})}>re to cart</button> */}
     
      
      </p>
  </div>

</div>






</div>
  )
}

export default ProductCard;