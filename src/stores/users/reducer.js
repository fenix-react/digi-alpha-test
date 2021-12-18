import { CLOSE_USER_MODAL } from 'stores/helper/types';
import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED
} from './types';

const initialState = {
  loading: false,
  data: {},
  errors: false,
  singleUser: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        data: action.payload
      };
    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        singleUser: action.payload
      };
    case GET_SINGLE_USER_FAILED:
      return {
        ...state,
        loading: false,
        singleUser: {},
        errors: action.payload
      };
    case CLOSE_USER_MODAL:
      return {
        ...state,
        singleUser: {}
      }
    default:
      return state;
  }
};

export default usersReducer;
