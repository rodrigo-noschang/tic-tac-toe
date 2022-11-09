import LandingPageContainer from "./style";
import ActionButton from "../../components/ActionButton";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const getUserName = () => {
        return document.getElementById('user-name').value;
    }

    const createRoom = evt => {
        evt.preventDefault();
        const userName = getUserName();
        const newRoomName = document.getElementById('create-room').value;
        navigate(`/game/${newRoomName}&${userName}`)

    }

    const joinRoom = evt => {
        evt.preventDefault();
        const userName = getUserName();
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
                <h2 className = 'landing-page-section-title'> Criar Sala </h2>
                
                <form className = 'landing-page-form-container' onSubmit = {createRoom}>
                    <label className = 'landing-page-form-label' htmlFor = 'create-room'> Nomeie sua sala: </label>
                    <input id = 'create-room' 
                        className = 'landing-page-form-input' 
                        placeholder = 'Nome da sala'/>
                    <ActionButton> Criar </ActionButton>
                </form>
            </section>

            <section className = 'landing-page-create-room-container'>
                <h2 className = 'landing-page-section-title'>
                    Entrar em sala já existente
                </h2>
                
                <form className = 'landing-page-form-container'  onSubmit = {joinRoom}>
                    <label className = 'landing-page-form-label' htmlFor = 'enter-room'> Nome da sala: </label>
                    <input id = 'enter-room' 
                        className = 'landing-page-form-input' 
                        placeholder = 'Nome da sala'/>
                    <ActionButton> Entrar </ActionButton>
                </form>
            </section>


        </LandingPageContainer>
    )

}

export default LandingPage;