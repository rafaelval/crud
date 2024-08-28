import axios from 'axios'

const url = process.env.REACT_APP_URL

export function getProducts() {
  return async function(dispatch) {
    try {
      const products = await axios.get(`${url}/products`)
      dispatch({
        type: 'GET_PRODUCTS',
        payload: products.data
      })
    } catch (error) {console.log(error)}
  }
}

export function getProduct(id) {
  return async function(dispatch) {
    try {
      const detail = await axios.get(`${url}/products/${id}`)
      dispatch({
        type: 'GET_PRODUCT',
        payload: detail.data
      })
    } catch (error) {console.log(error)}
  }
}

export function postProduct(payload) {
  return async function(dispatch) {
    try {
      await axios.post(`${url}/products`, payload)
      dispatch({
        type: 'POST_PRODUCT',
        payload: payload
      })
    } catch (error) {console.log(error)}
  }
}

export function updateProduct(payload, id) {
  return async function(dispatch) {
    try {
      await axios.put(`${url}/products/${id}`, payload)
      dispatch({
        type: 'UPDATE_PRODUCT',
        payload: payload
      })
    } catch (error) {console.log(error)}
  }
}

export function deleteProduct(id) {
  return async function(dispatch) {
    try {
      await axios.delete(`${url}/products/${id}`)
      dispatch({
        type: 'DELETE_PRODUCT'
      })
    } catch (error) {console.log(error)}
  }
}