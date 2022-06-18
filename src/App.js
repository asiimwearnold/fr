import React from 'react';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/list/List"
import Hotel from './pages/hotel/Hotel';
import Chat from './components/chat/Chat';
import Admin_chat from './components/chat/Admin_chat';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route exact path="/Chat" component={Chat} />
      <Route path="/agent" component={Admin_chat} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
