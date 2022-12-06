import React from 'react'
import { useCart } from '../../Context/context'

const Cart = () => {

  const {state} = useCart();
  console.log(state.cart)
  return (
<div>
         {
          state.cart.map((cartItem)=>{
            return (
          <>
              <li>
                
                {cartItem.name}

              </li>
               <li>
                
               $ {cartItem.price}

             </li>
          </>
            )
          })
         }
         
    
</div>
  )
}

export default Cart