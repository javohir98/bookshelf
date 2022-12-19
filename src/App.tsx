import { Routes, Route, useNavigate } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Books from "./pages/Books"
import { useEffect } from "react"
import { ToastContainer, toast  } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
        <ToastContainer />
    </>
  )
}

export default App