import styled from "styled-components";

const GameContainer = styled.div`
    color: #fff;

    .game-title {
        text-align: center;
        margin: 25px 35px;
    }

    .player-name {
        margin: 15px 0;
    }

    .player-turn-arrow {
        margin-right: 15px;
    }

    .player-1-name {
        color: var(--solid-red);
        text-shadow: 0 0 10px var(--shadow-red);
        font-size: ${props => props.playerTurn === props.player1 ? '38px' : '28px'};
    }

    .player-2-name {
        color: var(--solid-green);
        text-shadow: 0 0 10px var(--shadow-green);
        font-size: ${props => props.playerTurn === props.player2 ? '38px' : '28px'};
    }

    .game-container {
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        margin: 40px auto 0;
    }
`;

export default GameContainer;