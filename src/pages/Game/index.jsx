import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameContainer from "./style";
import Board from "../../components/Board";
import { FaLongArrowAltRight } from 'react-icons/fa';

const Game = ({ socket }) => {
    const [room, setRoom] = useState({
        players: [],
        turn: ''
    });
    const { roomName, userName } = useParams();
    const user = { userName, roomName }

    // Pega o nome do outro jogador baseado no array de players da sala, ou escreve "Aguardando"
    const otherPlayer = room.players.length < 2 ? 
        'Aguardando outro jogador...' : 
        room.players.find(player => player.userName !== user.userName).userName;

    useEffect(() => {
        socket.emit('get_room_info', roomName);
    }, [])
    
    socket.on('receive_room_info', roomInfo => {
        setRoom(roomInfo); 
    })

    const changePlayersTurn = () => {
        socket.emit('change_player', roomName);
    }

    socket.on('receive_change_player', updatedRoom => {
        setRoom(updatedRoom);
    })

    console.log(room);

    return (
        <GameContainer playerTurn = {room.turn} user = {userName} otherPlayer = {otherPlayer}>
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <div className = 'game-container'>
                <section className = 'players-info-container'>
                    <div className = 'player-name user-name'>
                        { room.turn === userName && 
                            <span className = 'player-turn-arrow'>
                                <FaLongArrowAltRight />      
                            </span>
                        }
                        {user.userName} 
                    </div>

                    <div> VS </div>

                    <div className = 'player-name other-player-name'>
                        { room.turn === otherPlayer && 
                            <span className = 'player-turn-arrow'>
                                <FaLongArrowAltRight />      
                            </span>
                        }
                        {otherPlayer} 
                    </div>
                </section>

                <section className = 'game-board-container'>
                    <Board />
                </section>
            </div>

            <button onClick = {changePlayersTurn} disabled = {room.turn !== userName}> 
                Play 
            </button> 
        </GameContainer>
    )
}

export default Game;