import React from "react";
import { useHistory } from "react-router";
import CardComponent from "./card";
import { dealer, players } from "./data";

const TestCase = () => {

    const history = useHistory();

  return (
    <div className="test-case">
      <h1 className="game-name">Welcome to Black Magic Game!</h1>
      <h3 className = "players">Dealer</h3>
      <CardComponent data = {dealer} />
      <img src="/assets/images/vs.png" alt="..." className = "vs-image"/>
      <h3 className = "players">Players</h3>
      <div className="testcase-container">
        {players.map((card) => (
          <CardComponent data = {card} />
        ))}
      </div>
      <button className = "test-btn" onClick = {() => history.push("/result")} >Check Result</button>
    </div>
  );
};

export default TestCase;
