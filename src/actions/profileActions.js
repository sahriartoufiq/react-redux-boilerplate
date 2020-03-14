import { LOGIN_SUCCESS, ACCESS_TOKEN } from "../constants";
import { history } from "../App";
import jwt from "jsonwebtoken";

const loginSuccess = user => {
  return { type: LOGIN_SUCCESS, user };
};

const login = data => {
  return dispatch => {
    const token = data[ACCESS_TOKEN];
    const userId = jwt.decode(token).sub;

    dispatch(loginSuccess({ id: userId }));

    localStorage.setItem(ACCESS_TOKEN, token);
    history.push("/");
  };
};

export const profileActions = {
  login
};
