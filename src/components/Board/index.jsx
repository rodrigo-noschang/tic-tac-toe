import BoardContainer from "./style";
import BoardCell from "../BoardCell";

const Board = () => {
    const boardMap = [
        ['', '', ''], 
        ['', '', ''],
        ['', '', '']
    ];

    return (
        <BoardContainer>
            { boardMap.map((line, lineNumber) => {
                return (
                    <div className = 'board-line-container'>
                        <div className = 'board-line'>
                            { line.map((cell, cellColumn) => {
                                return (
                                    <BoardCell line = {lineNumber} column = {cellColumn} value = {cell}/>
                                )
                            })}
                        </div>
                        { lineNumber !== 2 &&
                            <div className = 'board-line-divisory'> </div>
                        }

                    </div>
                )
            })
                
            }      
        </BoardContainer>
    )

}

export default Board;