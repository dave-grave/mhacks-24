import { useState } from 'react'
<<<<<<< HEAD
import BrowserRouter from "react-router-dom";
import { Login } from "./components/login;";
import { Signup } from './components/signup;'
import { Home } from "./components/home;";
import { Navbar } from "./components/navbar;";
=======

>>>>>>> refs/remotes/origin/main

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
      <Navbar> </Navbar>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
=======

>>>>>>> refs/remotes/origin/main
    </>
  );
}

export default App
