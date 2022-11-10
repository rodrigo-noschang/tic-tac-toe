import BoardCellContainer from "./style";

const BoardCell = ({ line, column, value, boardMap, setBoardMap, user, room, setRoom, socket }) => {

    const chooseCell = () => {
        if (value === '' && room.turn === user.userName) {
            const updateData = {
                line, 
                column, 
                roomName: room.roomName, 
                symbol: user.boardSymbol
            }

            socket.emit('register_play', updateData);
            socket.emit('change_player', room.roomName);
        }
    }

    socket.on('receive_play', ({line, column, symbol}) => {
        boardMap[line][column] = symbol;
        setBoardMap([...boardMap]);
    })

    socket.on('receive_change_player', updatedRoom => {
        setRoom(updatedRoom);
    })

    return (
        <BoardCellContainer line = {line} onClick = {chooseCell}>
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