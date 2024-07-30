import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Added", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("Removed", counter);
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
