import styled from "styled-components";

const ActionButtonContainer = styled.button`
    margin-left: 20px;
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

export default ActionButtonContainer;