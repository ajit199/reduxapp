import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateStatus } from "../store/actions";
import styles from "./todo.module.css";
function TodoDetails() {
  let [todo, setTodo] = useState({});
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        setTodo(res.data);
        setIsTrue(res.data.status);
      })
      .catch((error) => console.log(error));
  }, [isTrue]);

  const handleStatus = () => {
    updateStatus(dispatch, todo);
    setIsTrue(!isTrue);
  };
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        style={{
          float: "left",
          padding: "5px 10px",
          color: "white",
          background: "darkslategray",
          border: "1px solid darkslategray",
          fontSize: "18px",
          marginLeft:"20px"
        }}
      >
        Back
      </button>
      <div id={styles.todoDetails}>
        <h3
          style={{
            background: isTrue ? "cadetblue" : "lemonchiffon",
            color: "red",
            width: "120px",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          {isTrue ? "Completed" : "Pending"}
        </h3>
        <h1>{todo.task}</h1>
        <button
          onClick={handleStatus}
          style={{
            padding: "5px 10px",
            color: "white",
            background: "darkslategray",
            border: "1px solid darkslategray",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
        >
          {isTrue ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
    </>
  );
}

export default TodoDetails;
