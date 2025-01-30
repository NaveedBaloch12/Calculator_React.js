import React from "react";
import { useState } from "react";
import Info from "./Info.jsx";
import Calculator from "./Calculator.jsx";

export default function Container() {
    const [isInfo, setInfo] = useState(true);

    const toggleInfo = () => {
        setInfo(!isInfo);
    };
  return (
    <div className="container">
        {isInfo && <Info toggleInfo = {toggleInfo} />}
        {!isInfo && <Calculator/>}
    </div>
  );
}
