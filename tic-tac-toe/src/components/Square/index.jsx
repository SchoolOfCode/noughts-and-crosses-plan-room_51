import React from 'react'

function Square({mark, handleClick, id}) {
	return (
		<button id={id} onClick={handleClick}>
			{mark}
		</button>
	)
}

export default Square
