import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState} from "react";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Home from "./pages/home";

function App(){
  const [user,setUser] = useState("");
  useEffect(()=>{
    function TokenSet(){
      const savedToken = localStorage.getItem('authToken');
      const u = localStorage.getItem('user');
      if (savedToken) {
        axios.defaults.headers.common['Authorization'] = savedToken;
        setUser(u!);
      }
    }
    TokenSet();
  },[])
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
        <Route path="/home" element={<Home user={user}/>} />
      </Routes>
    </BrowserRouter>

  );
    
}

export default App