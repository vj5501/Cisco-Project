import * as React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Navbar'
import Team from './components/Team'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <h1>Changes by VJ</h1>
    </div>
  )
}
export default App;