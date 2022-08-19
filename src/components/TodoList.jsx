import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/actions";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import styles from "./todo.module.css";
const TodoList = () => {
  let todos = useSelector((state) => state.todos);
  //   console.log(todos);
  let dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  }, []);
  return (
    <div id={styles.container}>
      <TodoInput />
      <h1>Todo List</h1>
      <table border="1" id={styles.table}>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Task</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => {
            return <Todo key={item.id} {...item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
