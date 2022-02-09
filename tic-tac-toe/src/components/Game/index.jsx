import React from 'react';
import { useState } from 'react';
import Board from '../Board'

function Game() {
    const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null])
	return (
		<div>
			Game
			<Board board={board}/>
		</div>
	)
}

export default Game
