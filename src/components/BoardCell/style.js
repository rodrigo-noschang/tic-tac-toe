import styled from "styled-components";

const BoardCellContainer = styled.div`
    width: 150px;
    height: 150px;
    cursor: pointer;
    display: flex;

    .border-cell-content-container {
        flex-grow: 1;
        line-height: 150px;
        text-align: center;
        font-size: 95px;
        font-weight: 300;
        color: ${props => props.symbol === 'X' ? 'var(--solid-red)' : 'var(--solid-green)'};
        text-shadow: 0 0 10px ${props => props.symbol === 'X' ? 'var(--shadow-red)' : 'var(--shadow-green)'}
    }

    .border-cell-divisory {
        width: 4px;
        background-color: var(--solid-blue);
        box-shadow: 0 0 10px 2px var(--shadow-blue);
        border-top-left-radius: ${props => props.line === 0 ? '20px' : '0'};
        border-top-right-radius: ${props => props.line === 0 ? '20px' : '0'};
        border-bottom-left-radius: ${props => props.line === 2 ? '20px' : '0'};
        border-bottom-right-radius: ${props => props.line === 2 ? '20px' : '0'};
    }
`;

export default BoardCellContainer;