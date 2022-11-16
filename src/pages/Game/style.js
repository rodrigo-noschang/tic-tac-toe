import styled from "styled-components";

const GameContainer = styled.div`
    color: #fff;

    .game-header {
        position: relative;
    }

    .game-header-return-icon {
        position: absolute;
        top: 5px;
        left: 15px;
        font-size: 20px;
        transition: .2s;
    }

    .game-header-return-icon:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: .2s;
    }

    .game-header-return-icon:active {
        transform: scale(.9);
        transition: .2s;
    }

    .game-title {
        text-align: center;
        margin: 25px 35px;
    }

    .players-info-container {
        width: 350px;
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

    .player-info-identifyer {
        color: #8f8fa5;
        font-size: 21px;
        margin-left: 10px;
        font-style: italic;
    }

    .game-container {
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        margin: 40px auto 0;
    }

    .game-result-container {
        font-size: 28px;
    }

    .game-result-container::before {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        background-color: var(--solid-blue);
        box-shadow: 0 0 10px 2px var(--shadow-blue);
        border-radius: 5px;
        margin: 15px 0 20px;
    }

    .game-result-winner-name {
        color: ${props => props.winner === props.player1 ?
            'var(--solid-red)' : 'var(--solid-green)'};
    }
`;

export default GameContainer;