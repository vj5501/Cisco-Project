import * as React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'
import './styles.css'

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">Cisco Netacad</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href='/'><NavLink className='text-link' to="/">Home</NavLink></a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href='/'><NavLink className='text-link' to="/team">Team</NavLink></a></li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
export default App;