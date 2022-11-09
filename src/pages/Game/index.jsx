import { useParams } from "react-router-dom";
import GameContainer from "./style";

const Game = ({ socket }) => {
    const { roomName, userName } = useParams();
    const user = { userName, roomName }
    
    const greet = () => {
        socket.emit('send_greeting', user);
    }

    socket.on('receive_greeting', message => {
        console.log(message);
    })



    return (
        <GameContainer>
            <h1 className = 'game-title'> Sala: {roomName} </h1>

            <section className = 'players-info-container'>
                <button onClick = {greet}> Greet </button>
            </section>
            
        </GameContainer>
    )
}

export default Game;