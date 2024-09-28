import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import  { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signup" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
