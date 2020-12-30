import React, { Component } from "react";
import Board from "./Board.jsx";
import calculateWinner from "./CalculateWinner.jsx";
import styles from './Game.module.css';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [{ 
                squares: Array(9).fill(null) 
            }],
        }
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares
          }]),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
        });
      }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className={styles.game}>
                <div className={styles.game_board}>
                    <Board 
                    onClick={(i) => this.handleClick(i)}
                    squares={current.squares} 
                    />
                </div>
                <div className={styles.game_info}>
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;