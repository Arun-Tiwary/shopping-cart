import React from 'react'
import { useCart } from '../../Context/context'
import CartCard from './cartCard';
import Nothing from './nothing';

const Cart = () => {

  const {state, dispatch} = useCart();
  console.log(state.cart)
  return (
<div> 
        <button  onClick = {()=>dispatch({type: "CLEAR_CART"})}
        className='card-button clear-cart-button'>Clear Cart</button>
       
        {

          state.cart.map((cartItem)=>{
            return (
          <>
            {cartItem.qty < 1 ? (<Nothing/>) : <CartCard cartItem = {cartItem}/> }
             
          </>
            )
          })
        }
         
    
</div>
  )
}

export default Cart