import React from 'react'

function Square({mark, handleClick}) {
	return <button onClick={handleClick}>{mark}</button>
}

export default Square
