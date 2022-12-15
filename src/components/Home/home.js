import React from 'react';
import Filters from '../Filters/filters';
import { useCart } from '../../Context/context';
import ProductCard from '../ProductCard/productCard';

const Home = () => {

    const {state: {products},  filterState : { bySort, byStock, byFastDelivery, byRating, bySearch }} = useCart();
    console.log("gome page",byStock, byFastDelivery);

    const transformedProducts = () => {

      let sortedProducts = products

      if (bySort) {
        sortedProducts = sortedProducts.sort((a,b) => bySort === "lowToHigh" ? a.price - b.price : b.price -a.price)
      }

      // if (! byStock) {

      //   sortedProducts = sortedProducts.filter((item) => item.inStock)
      // }

      // if (byFastDelivery) {
      //    sortedProducts = sortedProducts.filter((item) => item.byFastDelivery  )
      // }

      if (byRating) {
        sortedProducts = sortedProducts.filter((item) => item.rating >= byRating)
      }

      if (bySearch) {
        sortedProducts = sortedProducts.filter((item) => item.name.toLowerCase().includes(bySearch))
      }

      return sortedProducts

    }

  return (
 <>
    <div className='home'>
        <Filters />
        {/* <h1>Home</h1> */}



      <div className='product-container'>
        
          {
          transformedProducts().map((item) => {
            return <ProductCard product = {item} />

          } )
          }

      </div>

   
    </div>


 </>
  )
}

export default Home