const INITIAL_STATE = {
  items: [],
  total: 0
};



export default function cartReducer(state = INITIAL_STATE, action) {
  

  switch (action.type) {
    
    case 'ADD_TO_CART':
      
      return {
        ...state, 
        items: [...state.items, action.payload], 
        total: state.total + action.payload.price 
      };

    
    default:
      return state;
  }
}