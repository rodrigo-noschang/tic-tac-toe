import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
import GameContainer from "./style";

const socket = io('http://localhost:3001', {
    withCredentials: true,
    extraHeaders: {
        "checkers-header": "whatevs"
    }
});

const Game = () => {
    const { roomName, userName } = useParams();
    const user = { userName, roomName }
    const receiver = [];

    useEffect(() => { 
        user.userSocketId = socket.id;
        socket.emit('enter_room', user, response => {
            console.log(response.message);
        });
        
    }, [])

    const sendGreeting = () => {
        socket.emit('send_greeting', user);
    }

    socket.on('receive_greeting', message => {
        receiver.push(1);
        console.log(receiver)
    })


    return (
        <GameContainer>
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <section className = 'players-info-container'>
                <button onClick = {sendGreeting}> Greet </button>
            </section>
            
        </GameContainer>
    )
}

export default Game;