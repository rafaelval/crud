
const initialState = {
  products: [],
  detail: null
}


function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_PRODUCTS':
      return {...state, products: action.payload}
    case 'GET_PRODUCT':
      return {...state, detail: action.payload}
    case 'POST_PRODUCT': 
      return {...state, products: state.products}
    case 'UPDATE_PRODUCT':
      return {...state, products: state.products}
    case 'DELETE_PRODUCT': {
      return {...state, products: state.products}
    }
    default:
      return state
  }
} 

export default reducer