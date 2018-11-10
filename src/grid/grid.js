import React, { Component } from 'react';
import GridItem from '../grid-item/grid-item';
import symbols from '../players-symbols';
import './grid.css';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.loadGame();
    }

    clickHandler(i) {
        if (!this.state.gridItems[i] && this.winnerPlayer === null) {
            var newArray = this.state.gridItems.slice();
            newArray[i] = (this.state.isNextOccuranceIsX) ? 'X' : 'O';
            var newState = {
                gridItems: newArray,
                isNextOccuranceIsX: !this.state.isNextOccuranceIsX
            }
            this.setState(newState);
            this.winnerPlayer = this.calculateWinner(newState.gridItems);
            if (this.winnerPlayer) {
                var x = document.getElementById("myAudio");
                x.play();
                this.winnerPlayerName = <span>Player "{this.winnerPlayer}" WIN!</span>;
            }
        }
    }

    loadGame() {
        let gridItems = [];
        for (var i = 1; i < 10; i++) {
            gridItems[i] = null
        }
        this.winnerPlayer = null;
        this.state = {
            gridItems: gridItems,
            isNextOccuranceIsX: false
        };
        this.winnerPlayerName = <span>&nbsp;</span>;
    }

    resetGame() {
        this.loadGame();
        this.setState(this.state);
    }

    renderGridItem(i) {
        return <GridItem value={this.state.gridItems[i]} onClick={() => this.clickHandler(i)} />;
    }

    render() {
        var gridCount = 10;

        return (
            <div className="container">
                <h1>Tic-Tac-Toe Game</h1>
                <span className="status">{this.winnerPlayerName}</span>
                <div className="grid-row">
                    {this.renderGridItem(0)}
                    {this.renderGridItem(1)}
                    {this.renderGridItem(2)}
                </div>
                <div className="grid-row">
                    {this.renderGridItem(3)}
                    {this.renderGridItem(4)}
                    {this.renderGridItem(5)}
                </div>
                <div className="grid-row">
                    {this.renderGridItem(6)}
                    {this.renderGridItem(7)}
                    {this.renderGridItem(8)}
                </div>
                <audio id="myAudio" src="./sounds/applause2.wav" />
                <button onClick={() => this.resetGame()}>Reset</button>
            </div>
        );
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default Grid;