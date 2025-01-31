import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [Answer, setAnswer] = React.useState();
  const [NumInput, setNumInput] = React.useState(0);
  const [Operation, setOperation] = React.useState(null);

  const BtnRow1 = ["DEL", "AC", "%", "/"];
  const BtnRow2 = ["7", "8", "9", "*"];
  const BtnRow3 = ["4", "5", "6", "-"];
  const BtnRow4 = ["1", "2", "3", "+"];
  const BtnRow5 = ["0", ".", "ANS", "="];

  // Implement all the operations here...
  const HandleOperation = () => {
    // Add Operation..
    if (Operation === "+") {
      setAnswer(Number(Answer) + Number(NumInput));
      setNumInput(0);
    }
    // Subtract Operation..
    else if (Operation === "-") {
      setAnswer(Number(Answer) - Number(NumInput));
      setNumInput(0);
    }
    // Multiply Operation..
    else if (Operation === "*") {
      setAnswer(Number(Answer) * Number(NumInput));
      setNumInput(0);
    }
    // Divide Operation..
    else if (Operation === "/") {
      setAnswer(Number(Answer) / Number(NumInput));
      setNumInput(0);
    } else {
      setAnswer(Number(NumInput));
      setNumInput(0);
    }
    setNumInput(0);
  };

  const HandleClick = (e) => {
    if (e.target.value === "=") {
      HandleOperation();
    } else if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "*" ||
      e.target.value === "/"
    ) {
      setOperation(e.target.value);
      setAnswer(Answer === 0 ? Number(NumInput) : Answer);
      if (NumInput !== 0) HandleOperation();
      setNumInput(0);
    } else if (e.target.value === "AC") {
      setAnswer(0);
      setNumInput(0);
      setOperation(null);
    } else if (e.target.value === "DEL") {
      setNumInput(NumInput.toString().slice(0, -1));
      setOperation(null);
    } else if (e.target.value === "ANS") {
      setNumInput(Answer);
    } else {
      setNumInput(NumInput === 0 ? e.target.value : NumInput + e.target.value);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="center">CALCULATOR</h2>
      <div className="calculator d-flex flex-column justify-content-center align-items-center card shadow p-3 mt-4">
        <input
          value={Answer}
          type="text"
          name="Answer"
          className="display form-control"
          readOnly
        />
        <input
          value={NumInput}
          type="text"
          className="display form-control mb-1"
          readOnly
        />

        <div className="container"></div>
        <div className="row justify-content-between w-100">
          {
            BtnRow1.map((btn, i) => {
              return (
                <button
                  key={i}
                  onClick={HandleClick}
                  value={btn}
                  className="mybtn col-sm"
                >
                  {btn}
                </button>
              );
            })
          }
        </div>
        <div className="row justify-content-between w-100">
        {
            BtnRow2.map((btn, i) => {
              return (
                <button
                  key={i}
                  onClick={HandleClick}
                  value={btn}
                  className="mybtn col-sm"
                >
                  {btn}
                </button>
              );
            })
          }
        </div>

        <div className="row justify-content-between w-100">
        {
            BtnRow3.map((btn, i) => {
              return (
                <button
                  key={i}
                  onClick={HandleClick}
                  value={btn}
                  className="mybtn col-sm"
                >
                  {btn}
                </button>
              );
            })
          }
        </div>

        <div className="row justify-content-between w-100">
        {
            BtnRow4.map((btn, i) => {
              return (
                <button
                  key={i}
                  onClick={HandleClick}
                  value={btn}
                  className="mybtn col-sm"
                >
                  {btn}
                </button>
              );
            })
          }
        </div>

        <div className="row justify-content-between w-100">
        {
            BtnRow5.map((btn, i) => {
              return (
                <button
                  key={i}
                  onClick={HandleClick}
                  value={btn}
                  className="mybtn col-sm"
                >
                  {btn}
                </button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
