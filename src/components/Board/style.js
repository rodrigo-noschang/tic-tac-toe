import styled from "styled-components";

const BoardContainer = styled.div`
    width: 470px;
    height: 482px;
    padding: 10px;
    background-color: var(--board-background);

    .board-line {
        display: flex;
    }

    .board-line-divisory {
        background-color: var(--solid-blue);
        height: 4px;
        background-color: var(--solid-blue);
        box-shadow: 0 0 10px 2px var(--shadow-blue);
        border-radius: 20px;
    }
`;

const ResetButton = styled.button`
    margin: 30px auto 0;
    display: block;
    padding: 2px 15px;
    background-color: var(--solid-blue);
    box-shadow: 0 0 10px 2px var(--shadow-blue);
    border: none;
    border-radius: 2px;

    &:hover {
        cursor: pointer;
        filter: brightness(1.15);
        transition: .4s;
    }

    &:active {
        transform: scale(.95);
        filter: brightness(.95);
        transition: .3s;
    }
`;

export { BoardContainer, ResetButton };