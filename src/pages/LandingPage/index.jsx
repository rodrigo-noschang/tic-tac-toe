import LandingPageContainer from "./style";
import ActionButton from "../../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LandingPage = ({ socket }) => {
    if (!socket.connected) {
        socket.connect();
    }
    
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getUserName = () => {
        return document.getElementById('user-name').value;
    }

    const getRoomName = () => {
        return document.getElementById('create-room').value;
    }

    const createRoom = evt => {
        evt.preventDefault();
        const userName = getUserName();
        const newRoomName = getRoomName();

        if (userName && newRoomName) {            
            const user = {
                userName: userName,
                roomName: newRoomName,
                userSocketId: socket.id
            }
            
            socket.emit('enter_room', user, response => {
                if (response.status === 'success') {
                    navigate(`/game/${newRoomName}&${userName}`)
                } else {
                    setError(response.message);
                }
            })
        }
    }

    return (
        <LandingPageContainer>
            <header className = 'landing-page-header'>
                <h1 className = 'landing-page-container'>
                    <span className = 'langin-page-letter letter-blue'> T</span>ic
                    <span className = 'langin-page-letter letter-green'> T</span>ac
                    <span className = 'langin-page-letter letter-red'> T</span>oe
                </h1>

                <div className = 'landing-page-name-container'>
                    <label className = 'landing-page-form-label' htmlFor = 'user-name'> Nome: </label>
                    <input id = 'user-name' 
                        placeholder = 'Seu nome'
                        autoFocus
                        className = 'landing-page-form-input'/>
                </div>
            </header>

            <section className = 'landing-page-create-room-container'>
                <h2 className = 'landing-page-section-title'> Crie ou entre em uma sala </h2>
                
                <form className = 'landing-page-form-container' onSubmit = {createRoom}>
                    <label className = 'landing-page-form-label' htmlFor = 'create-room'> Sala: </label>
                    <input id = 'create-room' 
                        className = 'landing-page-form-input' 
                        placeholder = 'Nome da sala'/>
                    <ActionButton> Jogar </ActionButton>
                </form>
                
                { error &&
                    <div className = 'error-message'>
                        {error}
                    </div>
                }
            </section>



        </LandingPageContainer>
    )

}

export default LandingPage;