import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function MainLayout() {
  return (
    <div id="app">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
