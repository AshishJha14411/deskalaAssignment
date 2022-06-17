import api from "../utils/api";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
import { setAlert } from "./alert";

export const register =
  ({ email, phoneNumber, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, phoneNumber, password });
    try {
      const res = await api.post("/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
