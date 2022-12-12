import React, { useState } from 'react'
import { useCart } from '../../Context/context'
import CartCard from './cartCard';
import Nothing from './nothing';
import { useEffect } from 'react';
const Cart = () => {

  const [total, setTotal] = useState();
  const {state, dispatch} = useCart();

  useEffect(() => { setTotal(state.cart.reduce((acc,curr) => acc + parseInt(curr.price) * curr.qty,0))
  }, [state])

  console.log(state.cart)
  return (
<div>  <div className='clear-cart' >
       <p className=''> Cart Value:   $ {total} </p>
        { state.cart.length > 0 &&
        <button  onClick = {() => dispatch({type: "CLEAR_CART"})}
        className='card-button '>Clear Cart  </button>
        }
       </div>
        {
          state.cart.length === 0 ? <Nothing/> :

          state.cart.map((cartItem) => {
            return (
          <>
            { <CartCard cartItem = {cartItem}/> }
             
          </>
            )
          })
        }
         
    
</div>
  )
}

export default Cart