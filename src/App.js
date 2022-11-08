import { io } from 'socket.io-client';
import { useState } from 'react';

const socket = io('http://localhost:3001', {
        withCredentials: true,
        extraHeaders: {
          "checkers-header": "whatevs"
        }
      });

function App() {
  const [socketId, setSocketId] = useState(socket.id);

  socket.on('connect', () => {
    setSocketId(socket.id);
  })
  
  console.log(socket.id);

  return (
    <div className="App">
      <h1>
        Hello {socketId}
      </h1>
    </div>
  );
}

export default App;
