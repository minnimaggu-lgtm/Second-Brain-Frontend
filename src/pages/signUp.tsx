import { useRef, useState } from "react"
import { Input } from "../components/input";
import { Button } from "../components/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { MsgBox } from "../components/msgBox";

function SignUp(){
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");
    async function signup(){
        setLoading(true);
        try{
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            await axios.post(BACKEND_URL + "/api/v1/signup",{
                "username": username,
                "password": password
            })
            setTimeout(() => navigate("/signin"), 600);
        }catch(e: any){
            if(e.response.data.Errors){
                setMsg(e.response.data.Errors[0].message);
            }
            else if(e.response.data.Message){
                setMsg(e.response.data.Message);
            }
            console.log("Failed to fetch user:", e.message);
        }
        setLoading(false);
    }
    return(
        <div className="h-screen w-screen bg-grey-200 flex justify-around items-center select-none">
            <div>
                <img src="../../public/download.jpg" className="h-150 w-130 "></img>
            </div>
            <div className="border-l-6 border-gray-200 p-50 mr-20 h-full relative">
                <div className="absolute left-30 top-50vh bg-white w-90 h-90 rounded-xl p-10 flex flex-col">
                    <div className="flex justify-center p-2 text-4xl">Sign Up</div>
                    <Input reference={usernameRef} placeHolder="Username" />
                    <Input reference={passwordRef} placeHolder="Password" type={"password"} />
                    <MsgBox msg={msg} />
                    <div className="flex justify-center pt-5">
                        <Button onClick={signup} variant="primary" size="md" text="Sign Up" loading={loading} fullWidth={true}/>
                    </div>
                    <div className="flex justify-center p-6">Already signed up?<a className="pl-1.5 text-blue-400" href="/signin"> log In</a></div>
                </div>
            </div>
        </div>
    );
}

export default SignUp