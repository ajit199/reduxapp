import {
  INCREMENT,
  DECREMENT,
  INCREMENTBY5,
  DECREMENTBY5,
  GET_TODOS,
  DELETE_TODOS,
  ADD_TODOS,
  UPDATE_STATUS,
} from "./actionTypes";
import axios from "axios";
const incrementCounter = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

const decrementCounter = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

const incrementCounterBy5 = (payload) => {
  return {
    type: INCREMENTBY5,
    payload,
  };
};

const decrementCounterBy5 = (payload) => {
  return {
    type: DECREMENTBY5,
    payload,
  };
};

export const getTodos = (dispatch) => {
  axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      dispatch({
        type: GET_TODOS,
        data: res.data,
      });
    })

    .catch((error) => console.log(error));
};

export const addTodos = (dispatch, task) => {
  axios
    .post(`http://localhost:8080/todos`, {
      task,
      status: false,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_TODOS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const updateStatus = (dispatch, data) => {
  axios
    .patch(`http://localhost:8080/todos/${data.id}`, {
      ...data,
      status: !data.status,
    })
    .then((res) => {
      dispatch({
        type: UPDATE_STATUS,
        payload: res.data,
      });
    });
};
// export const updateStatus = async (dispatch, data) => {
//   let res = await axios.patch(`http://localhost:8080/todos/${data.id}`, {
//     ...data,
//     status: !data.status,
//   });
//   console.log(res.data);
// };

export const deleteTodos = (dispatch, id) => {
  axios.delete(`http://localhost:8080/todos/${id}`);
  dispatch({
    type: DELETE_TODOS,
    payload: id,
  });
};

export {
  incrementCounter,
  decrementCounter,
  incrementCounterBy5,
  decrementCounterBy5,
};
