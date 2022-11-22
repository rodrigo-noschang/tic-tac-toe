import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Game from '../pages/Game';
import { io } from 'socket.io-client';

export const connectUser = () => {
    const socket = io(process.env.REACT_APP_SOCKET_URL, {
        transports: ['websocket', 'polling', 'flashsocket'],
        withCredentials: true,
        extraHeaders: {
            "checkers-header": "whatevs"
        }
    });

    return socket;
}

const RouteContainer = () => {

    const socket = connectUser();

    return (
        <Routes>
            <Route exat path = '/' element = {<LandingPage socket = {socket}/>}/>
            <Route exat path = '/game/:roomName&:userName' element = {<Game socket = {socket}/>}/>
        </Routes>
    )

}

export default RouteContainer;