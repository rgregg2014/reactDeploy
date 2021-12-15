import React, { useState } from "react";
import d20 from "../assets/images/d20.png";
import "../assets/css/diceCard.css";

export default function DiceCard() {
  const [roll, setRoll] = useState(0);

  const RNG = () => {
    let num = Math.floor(Math.random() * 20 + 1);
    console.log(num);
    setRoll(num);
    return num;
  };

  return (
    <div className="container">
      <h2 className="heading">D20 Roller</h2>
      <img alt="a wireframe of an icosahedron" src={d20} className="d20"></img>
      <button onClick={RNG} className="button">
        Click Here
      </button>
      <h4 className="heading">{roll}</h4>
    </div>
  );
}
