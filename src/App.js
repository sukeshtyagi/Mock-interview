import { useState, useEffect } from "react";
function App() {
  const [selectAll, setSelectAll] = useState(0);

  return (
    <input
      type="checkbox"
      checked={selectAll}
      onClick={() => {
        setSelectAll(selectAll + 1);
        setSelectAll(selectAll + 1);
        console.log(selectAll);
      }}
    />
  );
}
export default App;
