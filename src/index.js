import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box: '',
        };
    }

    render() {
        {console.log(this.props)}
        return (
            <button className="square">
                {this.props.box}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(row,column) {
        return <Square box={row+column} />;
    }

    render() {
        const status = 'Chess View';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare('a',1)}
                    {this.renderSquare('a',2)}
                    {this.renderSquare('a',3)}
                    {this.renderSquare('a',4)}
                    {this.renderSquare('a',5)}
                    {this.renderSquare('a',6)}
                    {this.renderSquare('a',7)}
                    {this.renderSquare('a',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('b',1)}
                    {this.renderSquare('b',2)}
                    {this.renderSquare('b',3)}
                    {this.renderSquare('b',4)}
                    {this.renderSquare('b',5)}
                    {this.renderSquare('b',6)}
                    {this.renderSquare('b',7)}
                    {this.renderSquare('b',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('c',1)}
                    {this.renderSquare('c',2)}
                    {this.renderSquare('c',3)}
                    {this.renderSquare('c',4)}
                    {this.renderSquare('c',5)}
                    {this.renderSquare('c',6)}
                    {this.renderSquare('c',7)}
                    {this.renderSquare('c',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('d',1)}
                    {this.renderSquare('d',2)}
                    {this.renderSquare('d',3)}
                    {this.renderSquare('d',4)}
                    {this.renderSquare('d',5)}
                    {this.renderSquare('d',6)}
                    {this.renderSquare('d',7)}
                    {this.renderSquare('d',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('e',1)}
                    {this.renderSquare('e',2)}
                    {this.renderSquare('e',3)}
                    {this.renderSquare('e',4)}
                    {this.renderSquare('e',5)}
                    {this.renderSquare('e',6)}
                    {this.renderSquare('e',7)}
                    {this.renderSquare('e',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('f',1)}
                    {this.renderSquare('f',2)}
                    {this.renderSquare('f',3)}
                    {this.renderSquare('f',4)}
                    {this.renderSquare('f',5)}
                    {this.renderSquare('f',6)}
                    {this.renderSquare('f',7)}
                    {this.renderSquare('f',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('g',1)}
                    {this.renderSquare('g',2)}
                    {this.renderSquare('g',3)}
                    {this.renderSquare('g',4)}
                    {this.renderSquare('g',5)}
                    {this.renderSquare('g',6)}
                    {this.renderSquare('g',7)}
                    {this.renderSquare('g',8)}
                </div>
                <div className="board-row">
                    {this.renderSquare('a',1)}
                    {this.renderSquare('a',2)}
                    {this.renderSquare('a',3)}
                    {this.renderSquare('a',4)}
                    {this.renderSquare('a',5)}
                    {this.renderSquare('a',6)}
                    {this.renderSquare('a',7)}
                    {this.renderSquare('a',8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
