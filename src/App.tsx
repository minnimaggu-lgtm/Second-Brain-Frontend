import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import { useState} from "react";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import { PageNotFound } from "./pages/404";

const ProtectedLayout = ({ token }: { token: string | null }) => {
  if (!token) {
    return <Navigate to="/signup" replace />;
  }
  return <Outlet />;
};


function App(){
  const [user, setUser] = useState(() => localStorage.getItem("user") ?? "");
  const savedToken = localStorage.getItem('authToken');
  if (savedToken) {
    axios.defaults.headers.common['Authorization'] = savedToken;
  }
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
        <Route element={<ProtectedLayout token={savedToken} />}>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/home" element={<Home user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
    
}

export default App