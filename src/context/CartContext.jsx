import { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers';

const initialCartState = {
  cartList: [],
  cartTotal: 0,
};

export const CartContext = createContext(initialCartState);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.cartTotal + product.price;
    dispatch({
      type: 'ADD_TO_CART',
      payload: { cartList: updatedList, cartTotal: updatedTotal },
    });
  };
  const removeFromCart = (product) => {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = state.cartTotal - product.price;
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { cartList: updatedList, cartTotal: updatedTotal },
    });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART', payload: { cartList: [], cartTotal: 0 } });
  };

  const value = {
    cartList: state.cartList,
    cartTotal: state.cartTotal,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
