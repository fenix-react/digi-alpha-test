import {
  GET_ALL_USERS,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS,
  GET_SINGLE_USER,
  GET_SINGLE_USER_FAILED,
  GET_SINGLE_USER_SUCCESS
} from './types';

export const getAllUsers = payload => ({ type: GET_ALL_USERS, payload });
export const getAllUsersSuccess = payload => ({
  type: GET_ALL_USERS_SUCCESS,
  payload
});
export const getAllUsersFailed = payload => ({
  type: GET_ALL_USERS_FAILED,
  payload
});

export const getSingleUser = payload => ({
  type: GET_SINGLE_USER,
  payload
});
export const getSingleUserSuccess = payload => ({
  type: GET_SINGLE_USER_SUCCESS,
  payload
});
export const getSingleUserFailed = payload => ({
  type: GET_SINGLE_USER_FAILED,
  payload
});
