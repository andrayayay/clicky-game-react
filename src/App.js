import React from "react";
import Card from "./components/Card"
import Container from "./components/Container"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import characters from '../src/characters.json';


class App extends React.Component {
  // declaring which variables will change
  state = {
    characters,
    score: 0,
    highscore: 0
  };

// losing the game 
  loseGame = () => {
    // setting the high score 
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    // setting that we want each card to only be clicked once
    this.state.characters.forEach(card => {
      card.count = 0;
    });
    // alert game over and set score back to 0
    alert(`Game Over! Your score is: ${this.state.score} points `);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    // eslint-disable-next-line 
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        // if character count equal 0, add one point to score
        if(characters[i].count === 0){
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          // rearrange character photos
          this.state.characters.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.loseGame();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Container score={this.state.score} highscore={this.state.highscore}></Container>
        {this.state.characters.map(card => (
          <Card
            id={card.id}
            image={card.image}
            clickCount={this.clickCount}
          />
        ))}
          <Footer />
      </Wrapper>
    );
  }
}

export default App;