import React, { Component } from "react";
import { Row, CardPanel, Col } from "react-materialize";
import Emojis from "./components/Emojis";
import Nav from "./components/Nav";
import { faSmile, faSmileBeam, faKiss, faLaughWink, faLaughSquint, faLaughBeam, faSmileWink, faKissBeam, faGrin, faGrinBeam, faGrinWink, faMeh } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    icons: [faSmile, faSmileBeam, faKiss, faLaughWink, faLaughSquint, faLaughBeam, faSmileWink, faKissBeam, faGrin, faGrinBeam, faGrinWink, faMeh].sort(this.randomize),
    clicked: [],
    score: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false
  };

  randomize = (a, b) => Math.random() > .5 ? -1 : 1

  clickHandler = iconName => {
    if (this.state.clicked.indexOf(iconName) === -1) {
      let score = this.state.clicked.length + 1, clicked = score === this.state.icons.length ? [] : [...this.state.clicked, iconName]

      this.setState({
        icons: this.state.icons.sort(this.randomize),
        clicked: clicked,
        score: score,
        highScore: Math.max(this.state.highScore, score),
        correct: true,
        gameWon: score === this.state.icons.length
      })
    } else {
      this.setState({
        icons: this.state.icons.sort(this.randomize),
        clicked: [],
        score: 0,
        correct: false,
        gameWon: false
      })
    }
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <div className="container">
          <Nav correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore} />
        </div>
        <div className="container">
          <Row>
            <Col s={12}>
              <CardPanel style={{marginTop: 100}}>
                <p>Click image and earn points. Be sure not to click the same one twice.</p>
                
              </CardPanel>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            {this.state.icons.map(icon => <Emojis correct={this.state.correct} key={icon.iconName} icon={icon} clickHandler={this.clickHandler} />)}
          </Row>
        </div>
      </div>

    );
  }
}

export default App;

