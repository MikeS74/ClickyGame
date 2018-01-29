import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  randomizeFriends = id => {
    // Filter this.state.friends for friends and grab the id
    this.state.friends.filter(friend => friend.id === id);
    friends.sort(function(a, b){return 0.5 - Math.random()});
    // Set this.state.friends after randomizing orig. friends array
    this.setState({
      friends
    });
console.log(id);
  };

  isClicked = clicked => {
//Get the current 'clicked' status of friend clicked on
this.state.friends.filter(friend => friend.clicked === clicked);
console.log(clicked);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            randomizeFriends={this.randomizeFriends}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
            isClicked={this.isClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
