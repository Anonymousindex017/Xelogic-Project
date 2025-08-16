import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './component/SignUp.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <nav>
          <ul className='nav-links d-flex mt-3'>
            <li className='list-group-item'>
              <div className='btn btn-primary fw-bold'><Link to="/login">Login Here</Link></div>
            </li>
            <li className='list-group-item'>
              <div className='btn btn-primary fw-bold'><Link to="/signup">Sign Up</Link></div>
            </li>
          </ul>
        </nav>
        </div>
        <Routes>
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      
    </Router>
    </>
  )
}

export default App
