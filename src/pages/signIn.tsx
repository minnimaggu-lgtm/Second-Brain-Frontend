import { useRef, useState } from "react"
import { Input } from "../components/input";
import { Button } from "../components/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function SignIn({user, setUser}:{user: string, setUser:React.Dispatch<React.SetStateAction<string>>}){
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const navigate = useNavigate();
    async function signin(){
        try{
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
                "username": username,
                "password": password
            })
            const jwt = response.data.Jwt_token;
            setUser(response.data.username); 
            localStorage.setItem('authToken',jwt);
            localStorage.setItem('user',response.data.username)
            axios.defaults.headers.common['Authorization'] = jwt;
            console.log("Sign in successfully");
            navigate("/home");

        }catch(e: any){
            console.log("Failed to fetch user:", e.message);
        }
    }
    return(
        <div className="h-screen w-screen bg-grey-200 flex justify-center items-center">
            <div className="bg-white rounded-xl p-10 flex flex-col">
                <Input reference={usernameRef} placeHolder="Username" />
                <Input reference={passwordRef} placeHolder="Password" />
                <div className="flex justify-center pt-5">
                    <Button onClick={signin} variant="primary" size="md" text="Sign In" fullWidth={true}/>
                </div>
            </div>
        </div>
    );
}

export default SignIn