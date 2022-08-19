import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer.js";
const initialState = {
  count: 0,
  todos: [],
  isCreated: false,
};
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
