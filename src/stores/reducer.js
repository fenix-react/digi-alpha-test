import { combineReducers } from 'redux';
import users from './users/reducer';
import helper from './helper/reducer';
import socket from './socket/reducer';
import products from './products/reducer';

export default combineReducers({
  users: users,
  helper: helper,
  socket: socket,
  products: products
});
