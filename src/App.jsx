// Import modules
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import components
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

// Import styles
import './assets/scss/App.scss'

function App() {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
