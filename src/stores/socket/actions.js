import { SET_SOCKET, CLEAR_SOCKET } from './types';

export const setSocket = payload => ({ type: SET_SOCKET, payload });
export const clearSocket = payload => ({ type: CLEAR_SOCKET, payload });
