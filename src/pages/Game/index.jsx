import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameContainer from "./style";
import Board from "../../components/Board";
import { FaLongArrowAltRight } from 'react-icons/fa';

const Game = ({ socket }) => {
    const [room, setRoom] = useState({});
    const { roomName, userName } = useParams();

    const getMe = () => {
        if (room.player1) {
            if (room.player1.userName === userName) {
                return {...room.player1, position: 'player1'};
            }
            return {...room.player2, position: 'player2'};
        } else {
            return {...room.player2, positoin: 'player2'};
        }
    }

    const getAdversary = () => {
        if (room.player1) {
            if (room.player1.userName !== userName) {
                return {...room.player1, position: 'player1'};
            } else if (room.player2) {
                return {...room.player2, position: 'player2'};
            } 
        }
    }

    const me = getMe();
    const adversary = getAdversary();

    useEffect(() => {
        socket.emit('get_room_info', roomName);

        return () => {
            socket.off('disconnect');
        }
    }, [])

    socket.on('receive_get_room_info', (roomInfo) => {
        setRoom(roomInfo);
    
    })

    return (
        <GameContainer playerTurn = {room.turn} user = {userName} >
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <div className = 'game-container'>
                <section className = 'players-info-container'>

                    <div className = 'player-name user-name'>
                        <span className = 'player-turn-arrow'>
                            <FaLongArrowAltRight />      
                        </span>
                        { room.player1 ?
                            room.player1.userName 
                        :
                            'Aguardando Jogador...'
                        }
                        
                    </div>

                    <div> VS </div>

                    <div className = 'player-name other-player-name'>
                        <span className = 'player-turn-arrow'>
                            <FaLongArrowAltRight />      
                        </span>
                        {room.player2 ?
                            room.player2.userName
                        :
                            'Aguardando Jogador...'
                        }    
                    
                    </div>
                </section>

                {/* <section className = 'game-board-container'>
                    <Board room = {room} 
                        socket = {socket} 
                        user = {user}
                        setRoom = {setRoom}/>
                </section> */}
            </div>

            {/* <button onClick = {changePlayersTurn} disabled = {room.turn !== userName}> 
                Play 
            </button>  */}
        </GameContainer>
    )
}

export default Game;