import { Routes, Route } from 'react-router'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import FriendsList from './Components/Dashboard/FriendsList.jsx'
import Friends from './Components/FriendDetails/Friends.jsx'
import Timeline from './Components/Timeline/Timeline.jsx'
import Stats from './Components/Stats/Stats.jsx'
import NotFound from './Components/NotFound.jsx'

import { InteractionProvider } from './Components/Stats/Context'

function App() {
  return (
    <InteractionProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/:id" element={<Friends />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </InteractionProvider>
  )
}

export default App;