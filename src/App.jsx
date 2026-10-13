import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../src/App.css"
function App() {

  return (
   <BrowserRouter>
    {/* <nav>
      <Link to="/login">
        Login
      </Link>
      <Link to="/">
        Home
      </Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<>LOGIN</>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
