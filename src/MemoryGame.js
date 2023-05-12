import React, { useEffect, useState } from 'react'
import Gameover from './Components/Gameover'
import Gameboard from './Components/Gameboard';
import game from './game';

export default function MemoryGame() {
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(game.createCardsFromTechs())
    }, [])

    function restart() {
        game.clearCards();
        setCards(game.createCardsFromTechs());
        setGameOver(false);
    }

    function handleFlip(card) {
        game.flipCard(card.id, () => {
            setGameOver(true)
        }, () => {
            setCards([...game.cards])
        })
        setCards([...game.cards])
    }
    
    return (
        <div>
            <Gameboard handleFlip={handleFlip} cards={cards} />
            <Gameover showGameOver={gameOver} restartGame={restart} />
        </div>
    )
}
