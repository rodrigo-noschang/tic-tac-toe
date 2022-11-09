import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Game from '../pages/Game';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001', {
    withCredentials: true,
    extraHeaders: {
        "checkers-header": "whatevs"
    }
});

const RouteContainer = () => {

    return (
        <Routes>
            <Route exat path = '/' element = {<LandingPage socket = {socket}/>}/>
            <Route exat path = '/game/:roomName&:userName' element = {<Game socket = {socket}/>}/>
        </Routes>
    )

}

export default RouteContainer;