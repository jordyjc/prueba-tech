import * as types from "./types";

import { decrementProgress, incrementProgress } from "./progress";

import history from "../history/history";

const userLogin = (username: any) => ({
  type: types.AUTH_LOGIN,
  username,
});

const userLogout = () => ({
  type: types.AUTH_LOGOUT,
});

const loginRequest = (username: any, password: any) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(username, password)
      username === "jordy" && password === "jc"
        ? resolve(username)
        : reject("User or password invalid");
    }, 1000)
  );

export const doLogin =
  (username: any, password: any) => async (dispatch: any) => {
    dispatch(incrementProgress());
    try {
      const userResponse = await loginRequest(username, password);
      dispatch(userLogin(userResponse));
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    } finally {
      dispatch(decrementProgress());
    }
  };

export const doLogout = () => (dispatch: any) => {
  dispatch(userLogout());
};
