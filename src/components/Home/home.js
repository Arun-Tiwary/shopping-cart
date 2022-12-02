import React from 'react';
import Filters from '../Filters/filters';
import { useCart } from '../../Context/context';
import ProductCard from '../ProductCard/productCard';

const Home = () => {

    const {state} = useCart();

    console.log(state.products)

  return (
 <>
    <div className='home'>
        <Filters />
        {/* <h1>Home</h1> */}



      <div className='product-container'>
        {
        state.products.map((item) => {
          return <ProductCard product = {item} />

        } )
        }

      </div>

   
    </div>


 </>
  )
}

export default Home