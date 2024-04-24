import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        margin: "50px",
        padding: "15px",
      }}
    >
      <p
        style={{
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        {count}
      </p>
      <button
        className="btn"
        onClick={() => {
          setCount((count) => {
            let count1 = count + 1;
            console.log(count1);
            return count1;
          });
        }}
      >
        Update
      </button>
    </div>
  );
}
export default App;
