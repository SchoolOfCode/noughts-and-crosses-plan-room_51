import React from 'react'
import css from '../../styles/styles.module.css'
import Square from '../Square'

function Board({board, move, handleClick}) {
	return (
		<div className={css.gridContainer}>
			{board.map((square, i) => {
				return <Square mark={square} key={i} id={i} handleClick={handleClick} />
			})}
		</div>
	)
}

export default Board
