import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../store/actions";
import { Link } from "react-router-dom";
import styles from "./todo.module.css";

const Todo = ({ id, task, status }) => {
  let dispatch = useDispatch();
  const handleDelete = () => {
    deleteTodos(dispatch, id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td style={{ textDecoration: status ? "line-through" : "none" }}>{task}</td>
      <td>
        <Link to={`/todo/${id}`}>
          <button id={styles.details}>Details</button>
        </Link>
      </td>
      <td>
        <button id={styles.delete} onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Todo;
