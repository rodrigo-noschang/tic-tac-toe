import BoardCellContainer from "./style";

const BoardCell = ({ line, column, value, boardMap, setBoardMap, user, room, setRoom, socket, checkForWin }) => {

    const chooseCell = () => {
        // Waits for other player to join so that the game can be played
        if (room.players.length < 2) return;

        // If cell was already selected, or if the player is playing out of turn, 
        // the cell won't be selected.
        if (value !== '' || room.turn !== user.userName)  return
        
        const updateData = {
            line, 
            column, 
            roomName: room.roomName, 
            symbol: user.boardSymbol
        }

        boardMap[line][column] = user.boardSymbol;

        checkForWin(line, column);

        socket.emit('register_play', updateData);
        socket.emit('change_player', room.roomName);
    }

    return (
        <BoardCellContainer line = {line} onClick = {chooseCell} symbol = {value}>
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