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
    const user = { userName, roomName };

    // Uses user index on the players list of the room to find his symbol.
    // The first user to login will be on the first position of the players list and shall play with the X symbol
    const symbols = ['X', 'O'];
    const indexInRoom = room.players.findIndex(player => player.userName === user.userName);
    user.boardSymbol = symbols[indexInRoom];
    
    // Get the name of the other player based on the array or just put a message of "waiting connection"
    const otherPlayer = room.players.length < 2 ? 
        'Aguardando outro jogador...' : 
        room.players.find(player => player.userName !== user.userName).userName;

    useEffect(() => {
        socket.emit('get_room_info', roomName);

        return () => {
            socket.off('disconnect');
        }
    }, [])
    
    socket.on('receive_room_info', roomInfo => {
        setRoom(roomInfo);
    })

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
                    <Board room = {room} 
                        socket = {socket} 
                        user = {user}
                        setRoom = {setRoom}/>
                </section>
            </div>

            {/* <button onClick = {changePlayersTurn} disabled = {room.turn !== userName}> 
                Play 
            </button>  */}
        </GameContainer>
    )
}

export default Game;