import BoardContainer from "./style";
import BoardCell from "../BoardCell";
import { useState } from "react";

const Board = ({ room, setRoom, socket, user }) => {
    const [boardMap, setBoardMap] = useState([
        ['', '', ''], 
        ['', '', ''],
        ['', '', '']
    ]);

    socket.on('receive_play', ({line, column, symbol}) => {
        boardMap[line][column] = symbol;
        setBoardMap([...boardMap]);
    })

    socket.on('receive_change_player', updatedRoom => {
        setRoom(updatedRoom);
    })

    const checkForWin = (line, column) => {
        console.log('Coordenadas -> ' ,line, column);
    }

    return (
        <BoardContainer>
            { boardMap.map((line, lineNumber) => {
                return (
                    
                    // Maps through boardMap and create lines
                    <div key = {`line=${lineNumber}`} className = 'board-line-container'>
                        <div className = 'board-line'>
                            { line.map((value, cellColumn) => {
                                return (
                                    // Maps through the lines of boardMap and creates the cells
                                    <BoardCell key = {`cell-${cellColumn}`} 
                                        line = {lineNumber} 
                                        column = {cellColumn}
                                        value = {value}
                                        boardMap = {boardMap}
                                        setBoardMap = {setBoardMap}
                                        user = {user}
                                        room = {room}
                                        setRoom = {setRoom}
                                        socket = {socket}
                                        checkForWin = {checkForWin}/>
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