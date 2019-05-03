import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card"
import Container from "./components/Container"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import characters from '../src/characters.json';


class App extends React.Component{
  state = {
    characters
  }

  mixCards = array => {
    const characters = array.sort(() => Math.random()-0.5);

    this.setState({ characters })
  }

  render(){
    return(
      <div className = "App">
      {/* <NavBar /> */}
      <Wrapper>
        <Container />
        {this.state.characters.map(character => (
           <Card 
           id={character.id}
           name={character.name}
           image={character.image}
           onClick={this.mixCards}
         />
        ))}
      </Wrapper>
      <Footer />
      </div>
    )
  }
}

export default App;