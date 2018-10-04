import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import logo from './slogo.svg';
import "./App.css";

class App extends Component {

  state = {
    characters,
    clickedIds: [],
    score: 0,
    record: 0
  }

  

  shuffleCharacter = id => {

    let clickedIds = this.state.clickedIds;
    let score = this.state.score;
    let record = this.state.record;


    if (!clickedIds.includes(id)) {
      this.setState({ score: score++ })

      if (score === record) {
        
        score = this.state.score++;
        record = this.state.record++

      } else {
        this.state.score++
      }
      clickedIds.push(id)


      for (let i = characters.length - 1; i >= 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let newCharacter = characters[random];

        characters[random] = characters[i];
        characters[i] = newCharacter;
      }

    } else {
      this.setState({
        clickedIds: [],
        score: 0,
      });
      alert("Good Game! \n Your score: " + clickedIds.length);
      return;
    }

    if (clickedIds.length === 12) {
      this.setState({
        clickedIds: [],
        score: 0,
      })
      alert("Congratulations! \n You win the game!");

    }
  }

  scoreIncrement = id => {
    this.setState({ score: this.state.score++ })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <h1 className="App-title">Clicky Game</h1>
          <h2>Test your memory!</h2>
          <h3>Please click every image ONCE.</h3>
        </header>

        <Title score={this.state.score}
          record={this.state.record}
        />
        <Wrapper>

          {this.state.characters.map(character => (
            <CharacterCard
              shuffleCharacter={this.shuffleCharacter}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
