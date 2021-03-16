import React from "react";
import { useHistory } from "react-router";
import { players, dealer } from "./data";

const Result = () => {
  const history = useHistory();

  return (
    <div className="result">
      <div className="result-container">
        <h1>Result</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Dealer</th>
              <th>status</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            <tr key={dealer.id}>
              <td>{dealer.id}</td>
              <td className="result-player">
                <img src={dealer.userImg} alt="..." />
                <h3>{dealer.name}</h3>
              </td>
              <td>{dealer.status}</td>
              <td>{dealer.points}</td>
            </tr>
          </tbody>
        </table>
        <table className = "p-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>status</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, i) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td className="result-player">
                  <img src={player.userImg} alt="..." />
                  <h3>{player.name}</h3>
                </td>
                <td>{player.status}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => history.goBack()} className="test-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Result;
