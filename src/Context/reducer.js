export const CartReducer = (state, action) =>{

    switch (action.type) {

        case "ADD_TO_CART": 
            return {...state, cart: [...state.cart, {...action.payload, qty:1} ]};

        
        case "REMOV_FROM_CART" : 
        
           
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)};
            
        
    
        default:
           return state;
    }
    
}