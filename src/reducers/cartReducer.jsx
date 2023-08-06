export const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case 'ADD_TO_CART':
      return {...state, cartList: payload.cartList, cartTotal: payload.cartTotal};
    case 'REMOVE_FROM_CART':
      return {...state, cartList: payload.cartList, cartTotal: payload.cartTotal};
    case 'CLEAR_CART':
      return {...state, cartList: payload.cartList, cartTotal: payload.cartTotal};
    default:
      throw new Error('No case Found')
  }
}