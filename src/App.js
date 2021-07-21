import "./App.css";
import Button from "./components/Button";

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <div className="content">
        <div className="firstline">
          <div
            className="Button"
            style={{ visibility: counter === 10 ? "hidden" : "visible" }}
          >
            <Button
              operation="+"
              counter={counter}
              setCounter={setCounter}
              // display={counter >= 10 ? "none" : "inherit"}
            />
          </div>
          <div className="Counter">
            <span>{counter}</span>
          </div>
          <div
            className="Button"
            style={{ visibility: counter === 0 ? "hidden" : "visible" }}
          >
            <Button
              operation="-"
              counter={counter}
              setCounter={setCounter}
              display={counter < 0 ? "none" : "inherit"}
            />
          </div>
        </div>
        <div className="secondline">
          <Button operation="reset" counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
};

export default App;
