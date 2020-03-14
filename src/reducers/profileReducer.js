import { LOGIN_SUCCESS } from "../constants";

const initialState = {};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        authenticated: true,
        user: action.user
      };
    default:
      return state;
  }
};
