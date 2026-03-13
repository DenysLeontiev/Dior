import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'
import AddProfilePicture from './pages/AddProfilePicture/AddProfilePicture'
import ScoreComponent from './pages/ScoreComponent/ScoreComponent'
import BadgeComponent from './pages/BadgeComponent/BadgeComponent'
import StaffTraining from './pages/StaffTraining/StaffTraining'
import LearningJourney from './pages/LearningJourney/LearningJourney'
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
import Community from './pages/Community/Community'
import Notifications from './pages/Notifications/Notifications'
import MyAccount from './pages/MyAccount/MyAccount'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/add-profile-picture" element={<AddProfilePicture />} />
      <Route path="/score" element={<ScoreComponent />} />
      <Route path="/badge" element={<BadgeComponent />} />
      <Route path="/learning-journey" element={<LearningJourney />} />
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/staff-training" element={<StaffTraining />} />
      </Route>
    </Routes>
  )
}

export default App
