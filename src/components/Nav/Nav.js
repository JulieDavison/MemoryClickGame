import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }

    renderMessage(correct, gameWon, clear = false) {
        let message, className
        if(clear) {
            className = ''
        }
        else if (correct === undefined) {
            message = 'Click an image to begin'
            className = ''
        } else {
            message = gameWon ? 'You won the game!!' : (correct ? 'Correct!!' : 'Incorrect')
            className = correct ? 'correct' : 'incorrect'
        }

        window.clearTimeout(this.timeout)
        if (!clear & correct !== undefined) {
            this.timeout = window.setTimeout(this.renderMessage, gameWon ? 3000 : 1000, gameWon ? undefined : correct, false, true)
        }
        return <li key={Math.random()} className={className}>{message}</li>
    }

    render() {
        return (
            <nav className="container navList pinned teal lighten-3">
                
                    <ul>
                        <li className="logo" style={{ fontSize : 30 }}>MemoryClickGame</li>
                        <li className="center-align col s3" style={{marginLeft : 50}}> {this.renderMessage(this.props.correct, this.props.gameWon)} </li>
                        <li className="right-align col s3" style={{marginLeft : 50, fontSize : 30}}>Score: {this.props.score} | High Score: {this.props.highScore}</li>
                    </ul>
                
            </nav>

        )
    }
};

export default Nav