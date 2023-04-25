// Import modules
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Import components
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
// Import context
import { AuthContext } from "./context/AuthContext";
// Import styles
import './assets/scss/App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
