import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App