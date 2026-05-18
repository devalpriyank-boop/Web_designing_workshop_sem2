import { useState } from "react";
import "./App.css";

function App() {
  // State
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      {/* Display Count */}
      <h2>{count}</h2>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={increment}>+</button>

        <button onClick={decrement}>-</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;