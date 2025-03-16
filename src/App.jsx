import React,{useState,lazy,Suspense} from "react";
import { BrowserRouter, Routes,Route,Router,Navigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
const Login = lazy(()=> import("./pages/Login"));
const SignUp = lazy(()=> import("./pages/SignUp"));
const Main = lazy(()=> import("./pages/main"));
const Poc = lazy(()=> import("./pages/Poc/Poc"));
const EmployerDashboard = lazy(()=> import("./pages/Employer/EmployerDashboard"));
const Error = lazy(()=> import("./pages/Error"));
const Vendor = lazy(()=> import("./pages/Vendor/Vendor"));
const Search = lazy(()=> import("./pages/Search"));

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center items-center w-full h-screen">
      <CircularProgress size="6rem" color="primary" />
    </div>}>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/login" element={<Login login={login}/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/employee/*" element={<EmployerDashboard/>}></Route>
      <Route path="/poc/*" element={<Poc/>}></Route>
      <Route path="/vendor/*" element={<Vendor/>}></Route>
      <Route path="/search/*" element={<Search/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </Suspense>
    </BrowserRouter>

    </>
  )
}

export default App
