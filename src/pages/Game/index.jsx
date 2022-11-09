import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
import GameContainer from "./style";

const Game = () => {
    const { roomName, userName } = useParams();
    const user = { userName, roomName }
    const receiver = [];

    return (
        <GameContainer>
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <section className = 'players-info-container'>
                <button> Greet </button>
            </section>
            
        </GameContainer>
    )
}

export default Game;