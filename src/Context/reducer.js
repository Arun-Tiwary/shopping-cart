export const CartReducer = (state, action) =>{

    console.log(state.cart);

    switch (action.type) {

        case "ADD_TO_CART": 
            return {...state, cart: [...state.cart, {...action.payload, qty:1} ]};

        
        case "REMOV_FROM_CART": 
            return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)};

        case "CLEAR_CART": 
            return {...state, cart:[]};
        
        case "INCREASE_ITEM": 
            return {...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload.id ? {...cartItem, qty: cartItem.qty + 1} : cartItem ) }

        case "DECREASE_ITEM":
            return {...state, cart: state.cart.map((cartItem) => cartItem.qty > 1 && cartItem.id === action.payload.id ? {...cartItem, qty: cartItem.qty - 1} : cartItem ) } 

        default:
           return state;
    };
    
};


export const FilterReducer = (state,action) => {
  
  switch (action.type) {
    case "SORT_BY_PRICE":
        return { ...state,bySort:action.payload}
        
    case "FILTER_BY_STOCK": {
        return {...state, byStock: !state.byStock}
    }

    case "FILTER_BY_FAST_DELIVERY": {
        return {...state, byFastDelivery: !state.byFastDelivery}
    }

    case "FILTER_BY_RATING": {

        return {...state, byRating: action.payload}
    }

    case "FILTER_BY_SEARCH": {

        return {...state, bySearch: action.payload }

    }

    case "CLEAR_FILTERS": {
        return {
            bySort: false,
            byStock: false,
            byFastDelivery: false,
            byRating: 0,
            bySearch: ""
        }
    }
        
  
    default:
        break;
  }
}

