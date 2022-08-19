import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import TodoDetails from "./components/TodoDetails";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
