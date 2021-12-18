/*
 * Defines a list of all routes with their properties
 */

import Home from 'pages/users/home';
import Users from 'pages/users/users';
import Coins from 'pages/users/coins';
import Products from 'pages/users/products';

const ROUTES = [
  {
    path: '/',
    Component: Home,
    exact: true
  },
  {
    path: '/users',
    Component: Users
  },
  {
    path: '/coins',
    Component: Coins
  },
  {
    path: '/products',
    Component: Products
  }
];

export default ROUTES;
