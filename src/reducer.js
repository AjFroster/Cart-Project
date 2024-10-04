import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    LOADING,
    DISPLAY_ITEMS,
    DECREASE,
  } from "./actions";
  
const reducer = (state, action) =>{
  if (action.type === CLEAR_CART){
    return {...state, cart : new Map()}
  }
  else if (action.type === REMOVE){
    let newCart = new Map(state.cart)
    newCart.delete(action.payload.id)
    return {...state, cart : newCart}
  }
  else if (action.type === INCREASE){
    let newCart = new Map(state.cart)
    let item = newCart.get(action.payload.id)
    // console.log(item)
    let newItem = {...item, amount:item.amount +1}
    // console.log(newItem)
    newCart.set(action.payload.id, newItem)
    
    return {...state, cart:newCart}
  }
  else if (action.type === DECREASE){
    
    let newCart = new Map(state.cart)
    if (newCart.get(action.payload.id).amount >= 1){
      let item = newCart.get(action.payload.id)
      // console.log(item)
      let newItem = {...item, amount:item.amount -1}
      // console.log(newItem)
      newCart.set(action.payload.id, newItem)
    }
    return {...state, cart:newCart}
    
  }
  throw new Error(`no matching action type : ${action.type}`);
}

export default reducer;