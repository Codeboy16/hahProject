import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import  Login  from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/main";
import Employee from "./pages/Employee";
function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/emplyoee" element={<Employee/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
