import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_FAILED,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_FAILED,
  GET_SINGLE_PRODUCT_SUCCESS
} from './types';

export const getAllPRODUCTs = payload => ({ type: GET_ALL_PRODUCTS, payload });
export const getAllPRODUCTsSuccess = payload => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload
});
export const getAllPRODUCTsFailed = payload => ({
  type: GET_ALL_PRODUCTS_FAILED,
  payload
});

export const getSinglePRODUCT = payload => ({
  type: GET_SINGLE_PRODUCT,
  payload
});
export const getSinglePRODUCTSuccess = payload => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload
});
export const getSinglePRODUCTFailed = payload => ({
  type: GET_SINGLE_PRODUCT_FAILED,
  payload
});
