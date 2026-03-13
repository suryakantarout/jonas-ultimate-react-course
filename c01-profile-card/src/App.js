import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./avatar.jpg" alt="My Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Suryakanta Rout</h1>
      <p>
        SAP Fullstack Developer and Web Developer having 10+ yrs of Experience.
        I like playing Su-do-ku.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👌" color="green" />
      <Skill skill="Java" emoji="👍" color="red" />
      <Skill skill="ABAP" emoji="🤞" color="yellow" />
      <Skill skill="Fiori" emoji="💖" color="blue" />
      <Skill skill="UI5" emoji="🙌" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
