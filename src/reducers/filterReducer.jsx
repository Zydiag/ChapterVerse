export const filterReducer = (state,action) => {
  const {type, payload} = action;

  switch(type){
    case 'SET_PRODUCT_LIST':
      return {
        ...state,
        productList: payload
      }
    case 'SORT_BY':
      return {...state, sortBy: payload.sortBy}
    case 'RATINGS':
      return {...state, rating: payload.rating}
    case 'BEST_SELLER_ONLY':
      return {...state, bestSellerOnly: payload.bestSellerOnly}
    case 'IN_STOCK_ONLY':
      return {...state, inStockOnly: payload.inStockOnly}
    case 'CLEAR_FILTER':
      return {...state, bestSellerOnly: false, inStockOnly: false, rating: null, sortBy: null}
    default :
      throw new Error('No case Found')
  }
}