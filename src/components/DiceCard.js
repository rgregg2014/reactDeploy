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
      <button onClick={RNG} className="button">
        <img
          alt="a wireframe of an icosahedron"
          src={d20}
          className="d20"
        ></img>
        <h4>Click Here</h4>
      </button>
      <h2 className="heading">{roll}</h2>
    </div>
  );
}
