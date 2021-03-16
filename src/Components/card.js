import React from "react";

const CardComponent = ({ data }) => {
  return (
    <div className="card-container">
      <img src={data.userImg} alt="..." className="user-img" />
      <h3>{data.name}</h3>
      <h4>Points: {data.points}</h4>
      <div>
        {data.hand.map((card, i) => (
          <img src={card.image} key={i} alt="..." className="card-image" />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
