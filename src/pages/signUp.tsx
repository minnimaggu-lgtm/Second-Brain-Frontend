import { useRef } from "react"
import { Input } from "../components/input";
import { Button } from "../components/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const navigate = useNavigate();
    async function signup(){
        try{
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            await axios.post(BACKEND_URL + "/api/v1/signup",{
                "username": username,
                "password": password
            })
            alert("You are Signed In!");
            navigate("/signin");
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
                    <Button onClick={signup} variant="primary" size="md" text="Sign Up" fullWidth={true}/>
                </div>
            </div>
        </div>
    );
}

export default SignUp