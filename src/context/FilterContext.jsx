import { createContext, useCallback, useReducer } from 'react';
import { filterReducer } from '../reducers';

const filterInitialState = {
  productList: [],
  inStockOnly: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

export const FilterContext = createContext(filterInitialState);

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);
  const initProductList = useCallback((products) => {
    dispatch({ type: 'SET_PRODUCT_LIST', payload: products });
  }, []);
  const bestSeller = useCallback(
    (products) => {
      return state.bestSellerOnly
        ? products.filter((product) => product.best_seller)
        : products;
    },
    [state.bestSellerOnly]
  );

  const inStock = useCallback(
    (products) => {
      return state.inStockOnly
        ? products.filter((product) => product.in_stock)
        : products;
    },
    [state.inStockOnly]
  );
  const sortBy = useCallback(
    (products) => {
      if (state.sortBy === 'LowToHigh') {
        return products.sort((a, b) => Number(a.price) - Number(b.price));
      } else if (state.sortBy === 'HighToLow') {
        return products.sort((a, b) => Number(b.price) - Number(a.price));
      }
      return products;
    },
    [state.sortBy]
  );
  const rating = useCallback(
    (products) => {
      if (state.rating === '4StarAbove') {
        return products.filter((product) => product.rating >= 4);
      }
      if (state.rating === '3StarAbove') {
        return products.filter((product) => product.rating >= 3);
      }
      if (state.rating === '2StarAbove') {
        return products.filter((product) => product.rating >= 2);
      }
      if (state.rating === '1StarAbove') {
        return products.filter((product) => product.rating >= 1);
      }
      return products;
    },
    [state.rating]
  );
  const filteredProducts = rating(sortBy(inStock(bestSeller(sortBy(state.productList)))))
  const value = {
    state,
    dispatch,
    productList: filteredProducts,
    initProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
