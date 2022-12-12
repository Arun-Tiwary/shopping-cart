import React, { useContext } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';
import products from '../data'
import { CartReducer } from './reducer';
import { FilterReducer } from './reducer';

// export const CartState = () =>{
//     return useContext(Cart) ;
// }

export const useCart = () =>{
  return useContext(Cart);
}

const Cart = createContext();

const CartContext = ({children}) => {

   const [state, dispatch] = useReducer(CartReducer,{
    products,
    cart:[]
   })

   const [filterState, filterDispatch] = useReducer(FilterReducer,{
    isSoterd: false,
    isInStock: false,
    isFastDelivery: true,
    IsRating: "",
    ClearFilters: []
   })

  return (
    <div>
        <Cart.Provider value = {{state, dispatch, filterState, filterDispatch}}>
            {children}
        </Cart.Provider>
    </div>
  )
}

export default CartContext;