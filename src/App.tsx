import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import AddBook from "./components/AddBook"
import Home from "./pages/Home"
import Books from "./pages/Books"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  )
}

export default App