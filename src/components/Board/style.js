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

export default BoardContainer;