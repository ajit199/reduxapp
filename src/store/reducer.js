import {
  DECREMENT,
  INCREMENT,
  INCREMENTBY5,
  DECREMENTBY5,
  GET_TODOS,
  DELETE_TODOS,
  ADD_TODOS,
  UPDATE_STATUS,
  TODO_CREATED,
} from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case INCREMENTBY5:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENTBY5:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.data,
      };
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isCreated: true,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        todos: [...state.todos],
      };
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case TODO_CREATED:
      return {
        ...state,
        isCreated: false,
      };
    default:
      return state;
  }
};
