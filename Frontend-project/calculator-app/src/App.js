import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [isDegree, setIsDegree] = useState(true);

  const handleClick = (value) => setInput((prev) => prev + value);

  const calculate = () => {
    try {
      let expr = input
        .replace(/√/g, "Math.sqrt")
        .replace(/%/g, "/100")
        .replace(/sin\((.*?)\)/g, (_, x) =>
          Math.sin(isDegree ? (parseFloat(x) * Math.PI) / 180 : parseFloat(x))
        )
        .replace(/cos\((.*?)\)/g, (_, x) =>
          Math.cos(isDegree ? (parseFloat(x) * Math.PI) / 180 : parseFloat(x))
        )
        .replace(/tan\((.*?)\)/g, (_, x) =>
          Math.tan(isDegree ? (parseFloat(x) * Math.PI) / 180 : parseFloat(x))
        );

      // Safe evaluation
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${expr}`)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");
  const del = () => setInput((prev) => prev.slice(0, -1));

  const toggleSign = () => {
    if (input) {
      try {
        // eslint-disable-next-line no-new-func
        const value = new Function(`return ${input}`)();
        setInput((-value).toString());
      } catch {
        setInput("Error");
      }
    }
  };

  const toggleDegree = () => setIsDegree(!isDegree);

  // Correct button order
  const buttons = [
    "C",
    "DEL",
    "±",
    "%",
    "√",
    "sin(",
    "cos(",
    "tan(",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "(",
    ")",
    "+",
    "=",
    isDegree ? "DEG" : "RAD",
  ];

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>
      <input className="display" type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((char) => (
          <button
            key={char}
            className={
              [
                "C",
                "DEL",
                "±",
                "√",
                "%",
                "(",
                ")",
                "sin(",
                "cos(",
                "tan(",
                "=",
              ].includes(char)
                ? "action"
                : ["/", "*", "-", "+"].includes(char)
                ? "operator"
                : ""
            }
            onClick={() => {
              if (char === "C") clear();
              else if (char === "DEL") del();
              else if (char === "=") calculate();
              else if (char === "±") toggleSign();
              else if (char === "DEG" || char === "RAD") toggleDegree();
              else handleClick(char);
            }}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
