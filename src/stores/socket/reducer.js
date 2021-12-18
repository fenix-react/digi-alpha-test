const { SET_SOCKET } = require('./types');

const initialState = {
  socket: {}
};

const SocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return {
        ...state,
        socket: action.payload
      };

    default:
      return state;
  }
};

export default SocketReducer;
