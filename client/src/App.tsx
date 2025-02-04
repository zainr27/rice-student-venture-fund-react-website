import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import { ToasterProvider } from "./contexts/ToasterContext"
import { Layout } from "./components/Layout"
import Home from "./pages/Home"
import OurStory from "./pages/OurStory"
import MeetTheTeam from "./pages/MeetTheTeam"

function App() {
  return (
    <ToasterProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </ToasterProvider>
  )
}

export default App