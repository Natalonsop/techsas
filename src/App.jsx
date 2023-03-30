import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import LoginRegister from "@pages/LoginRegister";
function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>
            <Route path='login' element={<LoginRegister></LoginRegister>}></Route>
        </Routes>
    </> 
  )
}

export default App
