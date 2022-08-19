import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../store/actions";
import { TODO_CREATED } from "../store/actionTypes";
import styles from "./todo.module.css";
const TodoInput = () => {
  let [input, setInput] = useState("");
  let { isCreated } = useSelector((state) => state);
  let dispatch = useDispatch();
  const handleAdd = () => {
    addTodos(dispatch, input);
    setInput("");
  };
  useEffect(() => {
    if (isCreated) {
      dispatch({ type: TODO_CREATED })
    }
  }, [isCreated]);
  console.log(isCreated);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write something"
        id={styles.inputBox}
      />
      <button id={styles.addTodo} onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
