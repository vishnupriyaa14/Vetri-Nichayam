import React, { useState } from "react";

function Dice() {
  const [p1, setP1] = useState(1);
  const [p2, setP2] = useState(1);
  const [result, setResult] = useState("Let's Play!");

  const rollDice = () => {
    const r1 = Math.floor(Math.random() * 6) + 1;
    const r2 = Math.floor(Math.random() * 6) + 1;

    setP1(r1);
    setP2(r2);

    setResult(
      r1 > r2 ? "🏆 Player 1 Wins!" : r2 > r1 ? "🏆 Player 2 Wins!" : "🚩 Draw!"
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        background: "#0f0202ff",
        color: "white",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>{result}</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          marginTop: "20px",
        }}
      >
        <div>
          <p>Player 1</p>
          <img src={`./images/dice${p1}.png`} alt="dice" width="100" />
        </div>

        <div>
          <p>Player 2</p>
          <img src={`./images/dice${p2}.png`} alt="dice" width="100" />
        </div>
      </div>
      <br />

      <button
        onClick={rollDice}
        style={{
          marginTop: "30px",
          padding: "12px 28px",
          fontSize: "18px",
          borderRadius: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Roll Dice
      </button>
    </div>
  );
}

export default Dice;
