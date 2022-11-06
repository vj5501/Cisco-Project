import * as React from 'react'
import { Routes, Route, NavLink, Navigate} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Navbar'
import Team from './components/Team'
import './styles.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
export default App;