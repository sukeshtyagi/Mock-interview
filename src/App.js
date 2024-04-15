import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (todo === "") {
      setShow(false);
    }
  }, [todo]);

  return (
    <div
      className="toDoApp"
      style={{
        margin: "15px",
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onClick={() => {
          setTodo("");
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Add
      </button>
      <p>{show && todo}</p>
    </div>
  );
}

export default App;
