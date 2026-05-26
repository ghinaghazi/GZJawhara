import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App