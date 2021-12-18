const BASE_API_URL = 'https://reqres.in/api/';
const USERS = 'users';
const PRODUCTS = 'products';

export const api = {
  users: {
    getAll: `${BASE_API_URL}${USERS}`,
    getOne: userId => `${BASE_API_URL}${USERS}/${userId}`
  },
  products: {
    getAll: `${BASE_API_URL}${PRODUCTS}`,
    getOne: productId => `${BASE_API_URL}${PRODUCTS}/${productId}`
  }
};
