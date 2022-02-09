import React, {useState} from 'react'
import Board from '../Board'

function Game() {
	const [board, setBoard] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	])
	const [xIsNext, setXIsNext] = useState(true)
	function handleClick(e) {
		let id = e.target.id
		let updatedSquares = board.slice()

		if (board[id] === null) {
			updatedSquares[id] = xIsNext ? 'X' : 'O'
			setBoard(updatedSquares)
			console.log('board if :', board)
			setXIsNext(!xIsNext)
			console.log('xIsNext:', xIsNext)
		}
		console.log('board else :', board)

		console.log('e.target: ', e.target.id)
	}
	// function move(e) {
	//   if(e.target)
	// }
	return (
		<div>
			{xIsNext ? <p>Player 1(X) is next</p> : <p>Player 2(O) is next</p>}
			<Board board={board} xIsNext={xIsNext} handleClick={handleClick} />
		</div>
	)
}

export default Game
