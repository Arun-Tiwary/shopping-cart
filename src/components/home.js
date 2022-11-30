import React from 'react'
import {Link} from 'react-router-dom';
import  {useCart} from '../Context/context';

const Home = () => {

    const {state:{products},cart} = useCart();
    console.log(products,cart);
  return (

    <div>
        Home
        <Link to ="cart">click</Link>
        </div>
  )
}

export default Home