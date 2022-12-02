

import React from 'react'

const productCard = ({product}) => {
  return (
    <div>
   



      
<div className = "cards">
  <div className = "card">
    <img className = "card-image" src = {product.image} alt= {product.name} />
    <h4 class = "card-title"> {product.name} </h4>
    <h5 className = "card-title"> Price: ${product.price} </h5>
    <h6 className='card-title'>Fast Delivery</h6>
    <h6 className='card-title'>Rating</h6>
    <p className='card-title'><button className='card-button'>Add to cart</button></p>
  </div>

</div>






</div>
  )
}

export default productCard