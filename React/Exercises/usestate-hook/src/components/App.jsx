import React, { useState } from "react";

function App() {
  // const state = React.useState();
  const [state, setCount] = useState(0); // Initial State

  // destructuring
  // red = 9, green = 132, blue = 227
  // const [red, green, blue] = [9, 132, 227];
  // console.log(red);

  function decrease() {
    setCount(state - 1);
  }

  function incresae() {
    setCount(state + 1);
    // console.log(count);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={incresae}>+</button>
    </div>
  );
}

export default App;
