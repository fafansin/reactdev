import { useState } from 'react';

import Board from "./Board";

export default function Game() {
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ history ,setHistory ] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length -1];

    function handlePlay(nextSquares){
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove){

    }

    const moves = history.map((squares, move) => {
        let description = move > 0 ? `Go to move # ${move}` : `Go to game start # ${move}`

        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}