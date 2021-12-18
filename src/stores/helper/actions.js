import { OPEN_USER_MODAL, CLOSE_USER_MODAL } from './types';

export const openUserModal = payload => ({ type: OPEN_USER_MODAL, payload });
export const closeUserModal = payload => ({ type: CLOSE_USER_MODAL, payload });
