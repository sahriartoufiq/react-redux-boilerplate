import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

const loginRequest = user => {
  return { type: LOGIN_REQUEST, user };
};

const loginSuccess = user => {
  return { type: LOGIN_SUCCESS, user };
};

const login = (username, password) => {
  return dispatch => {
    dispatch(loginRequest({ username }));

    console.log("Attempt login .....................");

    // TODO: CALL LOGIN API

    dispatch(loginSuccess({ username }));
  };
};

export const userActions = {
  login
};
