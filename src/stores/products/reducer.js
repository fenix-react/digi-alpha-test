import { CLOSE_USER_MODAL } from 'stores/helper/types';
import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILED,
    GET_SINGLE_PRODUCT,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAILED
  } from './types';
  
  const initialState = {
    loading: false,
    data: {},
    errors: false,
    singleProducts: {}
  };
  
  const PRODUCTsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          loading: true,
          errors: false
        };
      case GET_ALL_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          errors: false,
          data: action.payload
        };
      case GET_ALL_PRODUCTS_FAILED:
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case GET_SINGLE_PRODUCT:
        return {
          ...state,
          loading: true,
          errors: false
        };
      case GET_SINGLE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          singleProducts: action.payload
        };
      case GET_SINGLE_PRODUCT_FAILED:
        return {
          ...state,
          loading: false,
          singleProducts: {},
          errors: action.payload
        };
      case CLOSE_USER_MODAL:
          return {
              ...state,
              singleProducts: {},
          }
      default:
        return state;
    }
  };
  
  export default PRODUCTsReducer;
  