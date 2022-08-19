import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "../store/actions";
import styles from "./todo.module.css";

const Counter = () => {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div id={styles.counterDiv}>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>

      <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>

      <button onClick={() => dispatch(incrementCounter(5))}>Increment</button>

      <button onClick={() => dispatch(decrementCounter(5))}>Decrement</button>
    </div>
  );
};

export default Counter;
