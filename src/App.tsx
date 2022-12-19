import { Routes, Route, useNavigate } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Books from "./pages/Books"
import { useEffect } from "react"

const App = () => {
  let isAuth = localStorage.getItem('S_key')
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth) {
      navigate('/sign-up')
    }
  }, [window.location.pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  )
}

export default App