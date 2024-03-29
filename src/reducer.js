export const initialState={
  basket:[],
  user:null
}
const reducer = (state,action) =>{
  
  switch(action.type){
    case 'ADD_TO_BASKET': 
      return {
        ...state,
        basket:[...state.basket,action.item]
        };
    
    case 'REMOVE_FROM_BASKET':
    let newBasket = [...state.basket];   
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id )
      
      if(index >= 0)
      {
         newBasket.splice(index , 1);
        
      }else
      {
        console.log('Your basket is empty ');
      }
      return {
        ...state,
        basket:newBasket
        };
    default:
      return state;
  }
}

export default reducer;