import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepPlus = () => {
    setStep((s) => s + 1);
  };

  const handleStepMinus = () => {
    setStep((s) => s - 1);
  };

  const handleCountPlus = () => {
    setCount((c) => c + step);
  };

  const handleCountMinus = () => {
    setCount((c) => c - step);
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  const text =
    count === 0
      ? `Today is ${date.toDateString()}`
      : count <= 0
        ? `${Math.abs(count)} days ago was ${date.toDateString()}`
        : `${count} days from today is ${date.toDateString()}`;

  return (
    <div className="App">
      <div>
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <h1>{text}</h1>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
