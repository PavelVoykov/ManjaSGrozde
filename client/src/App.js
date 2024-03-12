import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/RegisterPage';
import socketIO from 'socket.io-client';
import MainPage from './components/MainPage';
import Err from './components/Error.js';
import SS from './components/Secret.js';


const socket = socketIO.connect('http://localhost:4000');
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/register" element={<ChatPage socket={socket} />}></Route>
          <Route path="/secret" element={<SS/>}></Route>
          <Route path="*" element={<Err/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;