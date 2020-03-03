import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

const initialState = {};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    default:
      return state;
  }
};
