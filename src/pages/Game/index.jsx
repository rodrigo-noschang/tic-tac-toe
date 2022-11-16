import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameContainer from "./style";
import Board from "../../components/Board";
import { FaLongArrowAltRight } from 'react-icons/fa';

const Game = ({ socket }) => {
    const [room, setRoom] = useState({});
    const [ winner, setWinner ] = useState('');
    const { roomName, userName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        socket.emit('is_user_connected_correctly');
        socket.emit('get_room_info', roomName);

        return () => {
            socket.off('disconnect');
        }
    }, [])

    socket.on('receive_get_room_info', (roomInfo) => {
        setRoom(roomInfo);
    })

    socket.on('receive_is_user_connected_correctly', userFound => {
        if (!userFound) {
            navigate('/');
        }
    })

    return (
        <GameContainer playerTurn = {room.turn} 
            player1 = {room.player1?.userSocketId || ''} 
            player2 = {room.player2?.userSocketId || ''} 
            winner = {winner.userSocketId} >
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <div className = 'game-container'>
                <section className = 'players-info-container'>

                    <div className = 'player-name player-1-name'>
                        { room.player1 ?
                        <>
                            { room.turn === room.player1.userSocketId &&
                                <span className = 'player-turn-arrow'>
                                    <FaLongArrowAltRight />      
                                </span>
                            }
                            <span> 
                                {room.player1.userName} 
                            </span>
                        </>
                        :
                            'Aguardando Jogador...'
                        }
                        
                    </div>
                    <div> VS </div>
                    <div className = 'player-name player-2-name'>
                        
                        {room.player2 ?
                            <>
                            { room.turn === room.player2.userSocketId &&
                                <span className = 'player-turn-arrow'>
                                    <FaLongArrowAltRight />      
                                </span>
                            }
                            <span> { room.player2.userName } </span>
                            </>
                        :
                            'Aguardando Jogador...'
                        }    
                    
                    </div>

                    { winner && 
                        <div className = 'game-result-container'>
                            <span className = 'game-result-winner-name'> { winner.userName } </span> venceu!
                        </div>
                    }
                </section>
                
                { room.player2 &&
                    <section className = 'game-board-container'>
                        <Board room = {room} 
                            socket = {socket} 
                            winner = {winner}
                            setWinner = {setWinner}/>
                    </section>
                }
            </div>
        </GameContainer>
    )
}

export default Game;