/*import logo from "./logo.svg";
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
*/

import { useState, useEffect } from "react";
function App() {
  const [selectAll, setSelectAll] = useState(false);
  const [unselectAll, setUnselectAll] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => {
          setSelectAll(true);
          setUnselectAll(false);
        }}
        checked={selectAll}
      />
      <input
        type="checkbox"
        onClick={() => {
          setSelectAll(false);
          setUnselectAll(true);
        }}
        checked={selectAll}
      />

      <div>
        <input
          type="checkbox"
          checked={selectAll}
          onClick={() => {
            setSelectAll(false);
          }}
        />
        <input
          type="checkbox"
          checked={selectAll}
          onClick={() => {
            setSelectAll(false);
          }}
        />
        <input
          type="checkbox"
          checked={selectAll}
          onClick={() => {
            setSelectAll(false);
          }}
        />
        <input
          type="checkbox"
          checked={selectAll}
          onClick={() => {
            setSelectAll(false);
          }}
        />
      </div>
    </div>
  );
}
export default App;
