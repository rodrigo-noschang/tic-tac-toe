import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Game from '../pages/Game';

const RouteContainer = () => {

    return (
        <Routes>
            <Route exat path = '/' element = {<LandingPage />}/>
            <Route exat path = '/game/:roomName&:userName' element = {<Game />}/>
        </Routes>
    )

}

export default RouteContainer;