import "./App.css";
import "./style.css";

function App({ skills }) {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
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

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
      ;
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👍"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
