import "./App.css";
import Button from "./components/Button";

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <div className="header">
        <span style={{ color: "blue" }}>
          <i className="fas fa-calculator"></i>
        </span>
        <span style={{ fontWeight: "bold" }}>React Counter</span>
      </div>
      <div className="content">
        <div className="firstline">
          <div
            className="Button"
            style={{
              visibility: counter === 10 ? "hidden" : "visible",
            }}
          >
            <Button
              operation="+"
              counter={counter}
              setCounter={setCounter}
              cls="button-operation"
            />
          </div>
          <div className="Counter">
            <span>{counter}</span>
          </div>
          <div
            className="Button"
            style={{
              visibility: counter === 0 ? "hidden" : "visible",
            }}
          >
            <Button
              operation="-"
              counter={counter}
              setCounter={setCounter}
              cls="button-operation"
            />
          </div>
        </div>
        <div className="secondline">
          <Button
            operation="reset"
            counter={counter}
            setCounter={setCounter}
            cls="button-reset"
          />
        </div>
      </div>
      <div className="footer">
        Made with <span style={{ fontWeight: "bold" }}>React</span> at{" "}
        <span style={{ fontWeight: "bold" }}>Le Reacteur</span> by david
      </div>
    </div>
  );
};

export default App;
