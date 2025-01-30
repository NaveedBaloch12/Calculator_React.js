import React from "react";

export default function Info(props) {
  return (
    <div>
      <h1>Welcome to the Calculator</h1>
      <p>This is a simple calculator created using React.</p>
      <button onClick={props.toggleInfo} className="toggle-button btn btn-secondary">
            Use Calculator
        </button>
    </div>
  );
}
