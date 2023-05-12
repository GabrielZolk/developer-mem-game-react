import React from 'react'

export default function Gameover(props) {
    return (props.showGameOver ? 
        <div id="gameOver">
            <div>
                Parabéns, você completou o jogo!
            </div>
            <button id="restart" onClick={props.restartGame}>Jogue novamente</button>
        </div> : <div></div>
    )
}
