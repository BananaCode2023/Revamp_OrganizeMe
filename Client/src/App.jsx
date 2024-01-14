import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Features from './pages/Features';
import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <Router>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/signup' element={<Signup/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
