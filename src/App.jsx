import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Header } from "./components/header";
import  Login  from "./pages/login";
import SignUp from "./pages/SignUp";
import Main from "./pages/main";
function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
