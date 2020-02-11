import React, { Component } from 'react';
import BeyBlades from './components/BeyBlades';
import Wrapper from './components/Wrapper';
import beys from './beys.json';
import Header from "./components/Header";
import "./App.css";


function shuffleBeys(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    beys,
    currentScore: 0,
    highScore: 0,
    message: "",
    clicked: [],
  };

  removeBey = id => {
    const beys = this.state.beys.filter(beyblade => beyblade.id !== id)
    this.setState({ beys });
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Correct!"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "Wrong! Click an image to play again",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledBeys = shuffleBeys(beys);
    this.setState({ beys: shuffledBeys });
  };



  render() {
    return (
      <Wrapper>
        <Header
          title="BeyBlade Clicks"
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        {/* // Map over this.state.beys and render a BeyBlade card component for each friend object */}
        {this.state.beys.map(beyblade => (
          <BeyBlades
            removeBey={this.removeBey}
            id={beyblade.id}
            key={beyblade.key}
            name={beyblade.name}
            image={beyblade.image}
            type={beyblade.type}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
