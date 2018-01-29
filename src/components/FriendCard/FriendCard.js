import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.randomizeFriends(props.id)}>
    <div className="img-container" onClick={() => props.isClicked(props.clicked)}>
      <img alt="Random Friend" src={props.image} />
    </div>

  </div>
);

export default FriendCard;
