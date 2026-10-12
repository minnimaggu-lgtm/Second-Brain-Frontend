import axios from "axios";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(){
  const savedToken = localStorage.getItem('authToken');
  if (savedToken) {
    axios.defaults.headers.common['Authorization'] = savedToken;
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  );
    
}

export default App