import { useState } from 'react'
import BrowserRouter from "react-router-dom";
import { Login } from "./components/login;";
import { Signup } from './components/signup;'
import { Home } from "./components/home;";
import { Navbar } from "./components/navbar;";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar> </Navbar>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
