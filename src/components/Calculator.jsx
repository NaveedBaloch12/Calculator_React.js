import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [Answer, setAnswer] = React.useState();
  const [NumInput, setNumInput] = React.useState(0);
  const [Operation, setOperation] = React.useState(null);

  // Implement all the operations here...
  const HandleOperation = () => 
  {
    // Add Operation..
    if(Operation === "+")
    {
      setAnswer(Number(Answer) + Number(NumInput));
      setNumInput(0);
    }
    // Subtract Operation..
    else if(Operation === "-")
    {
      setAnswer(Number(Answer) - Number(NumInput));
      setNumInput(0);
    }
    // Multiply Operation..
    else if(Operation === "*")
    {
      setAnswer(Number(Answer) * Number(NumInput));
      setNumInput(0);
    }
    // Divide Operation..
    else if(Operation === "/")
    {
      setAnswer(Number(Answer) / Number(NumInput));
      setNumInput(0);
    }
    else
    {
      setAnswer(Number(NumInput));
      setNumInput(0);
    }
    setNumInput(0);
  }

  const HandleClick = (e) => 
  {
    if(e.target.value === "=")
    {
      HandleOperation();
    }
    else if(e.target.value === "+" || e.target.value === "-" || e.target.value === "*" || e.target.value === "/")
    {
      setOperation(e.target.value);
      setAnswer(Answer === 0? Number(NumInput) : Answer);
      HandleOperation();
      setNumInput(0);
    }
    else if(e.target.value === "AC") 
    {
      setAnswer(0);
      setNumInput(0);
      setOperation(null);
    }
    else if(e.target.value === "DEL")
    {
      setNumInput(NumInput.toString().slice(0, -1));
      setOperation(null);
    }
    else if(e.target.value === "ANS")
      {
        setNumInput(Answer);
      }
    else
    {
      setNumInput(NumInput === 0 ? e.target.value : NumInput + e.target.value);
    }
  }


  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="center">CALCULATOR</h2>
      <div className="calculator d-flex flex-column justify-content-center align-items-center card shadow">
        <input value={Answer} type="text" name="Answer" className="display form-control" readOnly />
        <input value={NumInput} type="text" className="display form-control" readOnly />

        <div className="container"></div>
        <div className="row justify-content-between w-100">
          <button onClick={HandleClick} value={"DEL"} className="mybtn clrbtn col-sm">DEL</button>
          <button onClick={HandleClick} value={"AC"} className="mybtn clrbtn col-sm">AC</button>
          <button onClick={HandleClick} value={"%"} className="mybtn opbtn col-sm">%</button>
          <button onClick={HandleClick} value={"/"} className="mybtn opbtn col-sm">÷</button> 
        </div>
        <div className="row justify-content-between w-100">
          <button onClick={HandleClick} value={7} className="mybtn col-sm">7</button>
          <button onClick={HandleClick} value={8} className="mybtn col-sm">8</button> 
          <button onClick={HandleClick} value={9} className="mybtn col-sm">9</button>
          <button onClick={HandleClick} value={"*"} className="mybtn opbtn col-sm">×</button>
        </div>

        <div className="row justify-content-between w-100">
          <button onClick={HandleClick} value={4} className="mybtn col-sm">4</button>
          <button onClick={HandleClick} value={5} className="mybtn col-sm">5</button>
          <button onClick={HandleClick} value={6} className="mybtn col-sm">6</button>
          <button onClick={HandleClick} value={"-"} className="mybtn opbtn col-sm">–</button>

        </div>

        <div className="row justify-content-between w-100">
          <button onClick={HandleClick} value={1} className="mybtn col-sm">1</button>
          <button onClick={HandleClick} value={2} className="mybtn col-sm">2</button>
          <button onClick={HandleClick} value={3} className="mybtn col-sm">3</button>
          <button onClick={HandleClick} value={"+"} className="mybtn opbtn col-sm">+</button>
        </div>

        <div className="row justify-content-between w-100">
          <button onClick={HandleClick} value={0} className="mybtn col-sm">0</button>
          <button onClick={HandleClick} value={"."} className="mybtn col-sm">.</button>
          <button onClick={HandleClick} value={"ANS"} className="mybtn col-sm">ANS</button>
          <button onClick={HandleClick} value={"="} className="mybtn opbtn col-sm">=</button>
        </div>
      </div>
    </div>
  );
}
