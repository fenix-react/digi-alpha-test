import { OPEN_USER_MODAL, CLOSE_USER_MODAL } from './types';

const initialState = {
  userModal: {
    show: false,
    data: {}
  }
};

const helperReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_USER_MODAL:
      return {
        ...state,
        userModal: {
          ...state,
          show: true,
          data: action.payload
        }
      };
    case CLOSE_USER_MODAL:
      return {
        ...state,
        userModal: {
          ...state,
          data: {},
          show: false
        }
      };

    default:
      return state;
  }
};

export default helperReducer;
