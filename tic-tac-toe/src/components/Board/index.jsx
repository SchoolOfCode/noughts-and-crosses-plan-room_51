import React from 'react'
import Square from '../Square'

import css from "../../styles/styles.module.css"

function Board({board, move}) {
    
    return <div className={css.gridContainer}>
    {board.map(square => {
        return <Square mark={square} handleClick={move}/>
    })}
    </div>
}

export default Board
