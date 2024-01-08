import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Features from './pages/Features';


function App() {

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/features' element={<Features/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
