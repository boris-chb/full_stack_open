import "./styles.css";
import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} you are {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const age = 25;
  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name="Boris" age={age} />
    </div>
  );
};

export default App;
