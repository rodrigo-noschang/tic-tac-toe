import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameContainer from "./style";

const Game = ({ socket }) => {
    const [room, setRoom] = useState({
        players: []
    });
    const { roomName, userName } = useParams();
    const user = { userName, roomName }

    console.log(room);

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

    return (
        <GameContainer>
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <section className = 'players-info-container'>
                <div> {user.userName} </div>
                <div> VS </div>
                <div> {otherPlayer} </div>
            </section>
            
        </GameContainer>
    )
}

export default Game;