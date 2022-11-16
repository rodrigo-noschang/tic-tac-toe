import { BoardContainer, ResetButton } from "./style";
import BoardCell from "../BoardCell";
import { useState } from "react";

const Board = ({room, setRoom, socket, winner, setWinner, draw, setDraw}) => {
    const [boardMap, setBoardMap] = useState([
        ['', '', ''], 
        ['', '', ''],
        ['', '', '']
    ]);

    const boardSymbols = {
        player1: 'X',
        player2: 'O'
    }

    const resetGame = () => {
        room.turn = room.player1.userSocketId;
        setRoom({...room});
        socket.emit('reset_game', room.roomName);
    }

    const updateBoard = (chosenLine, chosenColumn) => {
        // Only accepts the play if it is that players turn and that cell is empty
        if (winner) return;
        if (room.turn !== socket.id || boardMap[chosenLine][chosenColumn] !== '') return;

        const currentPlayer = room.turn === room.player1.userSocketId ? 
            'player1' : 'player2';

        const symbol = boardSymbols[currentPlayer];
        boardMap[chosenLine][chosenColumn] = symbol;
        
        // Send an event to update the boardRoom and another to change the players turn
        socket.emit('register_new_board_and_check_for_endgame', room.roomName, boardMap, chosenLine, chosenColumn);
        socket.emit('change_turn', room.roomName, currentPlayer);
    }

    socket.on('receive_register_new_board_and_check_for_endgame', (updatedBoard, win, winnerPlayer, draw) => {
        setBoardMap(updatedBoard);
        if (win) {
            setWinner(winnerPlayer);
        }
        if (!win) {
            setDraw(draw);
        }
    })

    socket.on('receive_reset_game', (resetedRoom, resetedBoard) => {
        setRoom(resetedRoom);
        setBoardMap(resetedBoard);
        setWinner('');
        setDraw(false);
    })

    return (
        <>
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
                                            updateBoard = {updateBoard} />
                                    )
                                })}
                            </div>
                            { lineNumber !== 2 &&
                                <div className = 'board-line-divisory'> </div>
                            }

                        </div>
                    )
                })}

            </BoardContainer>
        
            { (winner || draw) &&
                <ResetButton onClick = {resetGame}> Reiniciar Jogo </ResetButton>
            }
        </>
    )

}

export default Board;