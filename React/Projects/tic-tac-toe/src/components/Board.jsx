import React, { Component } from 'react';
import Square from "./Square.jsx";
import styles from './Board.module.css';
import calculateWinner from './CalculateWinner.jsx';


export default class Board extends Component {
    renderSquare(i) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
    }

    render() {
        return (
            <div>
                <div className={styles.board_row}>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className={styles.boarder_row}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={styles.boarder_row}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
