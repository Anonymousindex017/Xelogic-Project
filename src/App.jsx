import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './component/SignUp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login />
        
      </div>
      <div>
        <SignUp />
      </div>
    </>
  )
}

export default App
