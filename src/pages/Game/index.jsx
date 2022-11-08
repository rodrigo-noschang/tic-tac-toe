import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001', {
    withCredentials: true,
    extraHeaders: {
        "checkers-header": "whatevs"
    }
});

const Game = () => {
    const { roomName, userName } = useParams();
    const user = { userName, roomName}

    socket.on('connect', () => {
        socket.emit('enter_room', user);
    })

    socket.on('send_greet', message => {
        console.log(message);
    })

    const getGreeting = () => {
        socket.emit('greet', user);
    }

    return (
        <div>
            Gamee
            <button onClick = {getGreeting}> Greet </button>
        </div>
    )
}

export default Game;