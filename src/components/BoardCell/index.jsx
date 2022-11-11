import BoardCellContainer from "./style";

const BoardCell = ({ line, column, value, updateBoard }) => {

    const markCell = () => {
        updateBoard(line, column);
    }

    console.log('Renderizou');
    return (
        <BoardCellContainer line = {line} symbol = {value} onClick = {markCell}>
            <div className = 'border-cell-content-container'>
                {value}
            </div>
            {column !== 2 &&
                <div className = 'border-cell-divisory'> </div>
            }
        </BoardCellContainer>
    )

}

export default BoardCell;