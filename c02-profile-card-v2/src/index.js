import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#28d918",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#b5aa0b",
  },
  {
    skill: "Git + GitHub",
    level: "beginner",
    color: "#1e0ad1",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#d10a53",
  },
  {
    skill: "ReactJS",
    level: "beginner",
    color: "#a30ad1",
  },
  {
    skill: "SAP ABAP",
    level: "advanced",
    color: "#d12f0a",
  },
  {
    skill: "OOPS ABAP",
    level: "advanced",
    color: "#d1880a",
  },
  {
    skill: "RAP",
    level: "beginner",
    color: "#0ad1d1",
  },
  {
    skill: "CAP",
    level: "beginner",
    color: "#0aa6d1",
  },
  {
    skill: "Fiori + UI5",
    level: "intermediate",
    color: "#5d0ad1",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App skills={skills} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
