import React from 'react'
import css from '../../styles/styles.module.css'

function Square({mark, handleClick, id}) {
	return (
		<button className={css.button} id={id} onClick={handleClick}>
			{mark}
		</button>
	)
}

export default Square
