import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SquareD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: null,
            column: null,
            box: null,
            visibleRow: null,
            visibleColumn: null,
        };
    }

    render() {
        if(this.props.visibleRow && this.props.visibleColumn){
            return (
                <button className="squared">
                    {this.props.box}
                </button>
            );
        }else if(this.props.visibleColumn){
            return (
                <button className="squared">
                    {this.props.column}
                </button>
            );
        }else if(this.props.visibleRow){
            return (
                <button className="squared">
                    {this.props.row}
                </button>
            );
        }else{
            return (
                <button className="squared">
                    {}
                </button>
            );
        }
    }
}

class SquareG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: null,
            column: null,
            box: null,
            visibleRow: null,
            visibleColumn: null,
        };
    }

    render() {
        if(this.props.visibleRow && this.props.visibleColumn){
            return (
                <button className="squareg">
                    {this.props.box}
                </button>
            );
        }else if(this.props.visibleColumn){
            return (
                <button className="squareg">
                    {this.props.column}
                </button>
            );
        }else if(this.props.visibleRow){
            return (
                <button className="squareg">
                    {this.props.row}
                </button>
            );
        }else{
            return (
                <button className="squareg">
                    {}
                </button>
            );
        }
    }
}

class Board extends React.Component {
    renderSquareD(row,column,visibleR,visibleC) {
        return <SquareD row={row} column={column} box={row+column} visibleRow={visibleR} visibleColumn={visibleC} />;
    }

    renderSquareG(row,column,visibleR,visibleC) {
        return <SquareG row={row} column={column} box={row+column} visibleRow={visibleR} visibleColumn={visibleC} />;
    }

    render() {
        const status = 'Chess View';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquareD('a',1, true, false)}
                    {this.renderSquareG('a',2, false, false)}
                    {this.renderSquareD('a',3, false, false)}
                    {this.renderSquareG('a',4, false, false)}
                    {this.renderSquareD('a',5, false, false)}
                    {this.renderSquareG('a',6, false, false)}
                    {this.renderSquareD('a',7, false, false)}
                    {this.renderSquareG('a',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareG('b',1, true, false)}
                    {this.renderSquareD('b',2, false, false)}
                    {this.renderSquareG('b',3, false, false)}
                    {this.renderSquareD('b',4, false, false)}
                    {this.renderSquareG('b',5, false, false)}
                    {this.renderSquareD('b',6, false, false)}
                    {this.renderSquareG('b',7, false, false)}
                    {this.renderSquareD('b',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareD('c',1, true, false)}
                    {this.renderSquareG('c',2, false, false)}
                    {this.renderSquareD('c',3, false, false)}
                    {this.renderSquareG('c',4, false, false)}
                    {this.renderSquareD('c',5, false, false)}
                    {this.renderSquareG('c',6, false, false)}
                    {this.renderSquareD('c',7, false, false)}
                    {this.renderSquareG('c',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareG('d',1, true, false)}
                    {this.renderSquareD('d',2, false, false)}
                    {this.renderSquareG('d',3, false, false)}
                    {this.renderSquareD('d',4, false, false)}
                    {this.renderSquareG('d',5, false, false)}
                    {this.renderSquareD('d',6, false, false)}
                    {this.renderSquareG('d',7, false, false)}
                    {this.renderSquareD('d',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareD('e',1, true, false)}
                    {this.renderSquareG('e',2, false, false)}
                    {this.renderSquareD('e',3, false, false)}
                    {this.renderSquareG('e',4, false, false)}
                    {this.renderSquareD('e',5, false, false)}
                    {this.renderSquareG('e',6, false, false)}
                    {this.renderSquareD('e',7, false, false)}
                    {this.renderSquareG('e',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareG('f',1, true, false)}
                    {this.renderSquareD('f',2, false, false)}
                    {this.renderSquareG('f',3, false, false)}
                    {this.renderSquareD('f',4, false, false)}
                    {this.renderSquareG('f',5, false, false)}
                    {this.renderSquareD('f',6, false, false)}
                    {this.renderSquareG('f',7, false, false)}
                    {this.renderSquareD('f',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareD('g',1, true, false)}
                    {this.renderSquareG('g',2, false, false)}
                    {this.renderSquareD('g',3, false, false)}
                    {this.renderSquareG('g',4, false, false)}
                    {this.renderSquareD('g',5, false, false)}
                    {this.renderSquareG('g',6, false, false)}
                    {this.renderSquareD('g',7, false, false)}
                    {this.renderSquareG('g',8, false, false)}
                </div>
                <div className="board-row">
                    {this.renderSquareG('h',1, true, true)}
                    {this.renderSquareD('h',2, false, true)}
                    {this.renderSquareG('h',3, false, true)}
                    {this.renderSquareD('h',4, false, true)}
                    {this.renderSquareG('h',5, false, true)}
                    {this.renderSquareD('h',6, false, true)}
                    {this.renderSquareG('h',7, false, true)}
                    {this.renderSquareD('h',8, false, true)}
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
