import React from 'react'
import { useCart } from '../../Context/context'


const CartCard = ({cartItem}) => {
    const {dispatch} = useCart();
  return (
    <div>
         <div className = "cards cart">
  <div className = "card">
    <img className = "card-image" src = {cartItem.image} alt= {cartItem.name} />
    <h4 class = "card-title"> {cartItem.name} </h4>
    <h5 className = "card-title"> Price: ${parseInt(cartItem.price) * cartItem.qty} </h5>
    <h6 className ='card-title'>Fast Delivery</h6>
    <p className ='card-title '>
      <button className='cart-increment-button'disabled = {cartItem.qty < 1 ? true : false} style = {{}} onClick = {()=> dispatch({type: "DECREASE_ITEM", payload: cartItem})}>  - </button>
      <h6 className ='cart-price'> {cartItem.qty}</h6>
      <button className ='cart-increment-button' style ={{}}
       onClick = {() => dispatch({type: "INCREASE_ITEM", payload: cartItem})}> + </button>
      
    </p>
    <p className ='card-title'>
      <button className = 'card-button' onClick={() => {dispatch({type: "REMOV_FROM_CART", payload: cartItem})}}>Remove From Cart</button>

    </p>
  </div>

</div>
    </div>
  )
}

export default CartCard