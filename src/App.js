import React, { useState } from "react";

const App = () => {
  const [count, setUpdatedCount] = useState(0);

  const incrementNumber = () => {
    setUpdatedCount(count + 1);
  };
  const decrementNumber = () => {
    if (count > 0) {
      setUpdatedCount(count - 1);
    } else {
      alert("Sorry, Zero limit Reached");
      setUpdatedCount(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {count}</h1>
          <div className="btn_div">
            <button onClick={incrementNumber}>Increment</button>
            <button onClick={decrementNumber}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
