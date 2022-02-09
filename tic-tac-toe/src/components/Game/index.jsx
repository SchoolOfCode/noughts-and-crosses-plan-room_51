import React, {useState} from 'react'
import Board from '../Board'

function Game() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)

	function handleClick(e) {
		let id = e.target.id
		let updatedSquares = board.slice()

		if (board[id] === null) {
			updatedSquares[id] = xIsNext ? 'X' : 'O'
			setBoard(updatedSquares)
			setXIsNext(!xIsNext)
		}
	}
	const winner = calculateWinner(board)
	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a]
			}
		}
		return null
	}

	return (
		<div>
			{winner ? (
				<p> Winner: {winner}</p>
			) : xIsNext ? (
				<p>Player 1(X) is next</p>
			) : (
				<p>Player 2(O) is next</p>
			)}
			<Board board={board} xIsNext={xIsNext} handleClick={handleClick} />
		</div>
	)
}

export default Game
