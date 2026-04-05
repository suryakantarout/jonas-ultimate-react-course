import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [servicePercentage1, setServicePercentage1] = useState(0);
  const [servicePercentage2, setServicePercentage2] = useState(0);

  const tip =
    ((Number(bill) * Number(servicePercentage1)) / 100 +
      (Number(bill) * Number(servicePercentage2)) / 100) /
    2;

  function handleOnReset() {
    setBill("");
    setServicePercentage1(0);
    setServicePercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onBillChange={setBill}>
        How much was the bill?
      </Bill>
      <Service
        servicePercentage={servicePercentage1}
        onServicePercentageChange={setServicePercentage1}
      >
        How did you like the service?
      </Service>
      <Service
        servicePercentage={servicePercentage2}
        onServicePercentageChange={setServicePercentage2}
      >
        How did your friend like the service?
      </Service>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleOnReset} />
        </>
      )}
    </div>
  );
}

function Bill({ children, bill, onBillChange }) {
  return (
    <div>
      {children}
      <input
        type="text"
        value={bill}
        onChange={(event) => onBillChange(event.target.value)}
      />
    </div>
  );
}

function Service({ children, servicePercentage, onServicePercentageChange }) {
  return (
    <div>
      {children}
      <select
        value={servicePercentage}
        onChange={(event) => onServicePercentageChange(event.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h2>
      You pay ${Number(bill) + Number(tip)} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
