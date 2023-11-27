import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = React.useState<number>(0);
  const [toggle, setToggle] = React.useState<boolean>(false);

  const ref = React.useRef<NodeJS.Timeout | null>(null);

  const toggleStopwatch = () => {
    setToggle(!toggle);
  };

  const resetStopwatch = () => {
    setToggle(false);
    setSeconds(0);
  };

  React.useEffect(() => {
    ref.current = setInterval(() => {
      if (toggle) setSeconds((state) => state + 1);
    }, 1000);

    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [toggle]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counter">
          <div>{seconds}</div>

          <div className="buttons">
            <button onClick={toggleStopwatch}>
              {toggle ? "Stop" : "Start"}
            </button>

            <button onClick={resetStopwatch} className="reset">
              Reset
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
