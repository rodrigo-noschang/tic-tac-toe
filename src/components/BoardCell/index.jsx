import BoardCellContainer from "./style";

const BoardCell = ({ line, column, value }) => {

    return (
        <BoardCellContainer line = {line}>
            <div className = 'border-cell-content-container'>
                
            </div>
            {column !== 2 &&
                <div className = 'border-cell-divisory'> </div>
            }
        </BoardCellContainer>
    )

}

export default BoardCell;