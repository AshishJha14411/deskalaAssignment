import { GET_CANDIDATE, DATA_DELETED, DATA_ERROR } from "./types";
import api from "../utils/api";
import { setAlert } from "./alert";

export const createCandidate = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/candidate", formData);

    dispatch({
      type: GET_CANDIDATE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const deleteData = (id) => async (dispatch) => {
  try {
    await api.delete(`/candidate/${id}`);

    dispatch({
      type: DATA_DELETED,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
