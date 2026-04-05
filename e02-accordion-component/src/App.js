import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  function handleToggle(num) {
    num === currOpen ? setCurrOpen(null) : setCurrOpen(num);
  }

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          num={index + 1}
          title={item.title}
          text={item.text}
          onToggle={handleToggle}
          currOpen={currOpen}
          key={index}
        >
          {currOpen === index + 1 && (
            <div className="content-box">{item.text}</div>
          )}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, currOpen, onToggle, children }) {
  return (
    <div
      className={`item ${currOpen === num ? "open" : ""}`}
      onClick={() => onToggle(num)}
    >
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{currOpen === num ? "-" : "+"}</p>
      {children}
    </div>
  );
}
