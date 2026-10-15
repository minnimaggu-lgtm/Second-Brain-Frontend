import type { ReactElement } from "react";
import { BrainIcon } from "../icons/brainIcon";
import { DocumentIcon } from "../icons/documentIcon";
import { LinkIcon } from "../icons/linkIcon";
import { TweetIcon } from "../icons/tweetIcon";
import { YtIcon } from "../icons/ytIcon";
import { UserIcon } from "../icons/userIcon";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export function SideBar({user, setType}:{user: string, setType: React.Dispatch<React.SetStateAction<string>>}){
    return (
        <div className="bg-white h-full w-full border-r-3 border-r-grey-200 pt-5 flex flex-col justify-between" >
            <div>
                <div className="flex p-2">
                    <BrainIcon />
                    <div className="text-black font-bold text-2xl pl-2 select-none cursor-pointer">
                        <a href="home">Second Brain</a>
                    </div>
                </div>
                <div className="mt-9">
                    <SideBarButton logo={<TweetIcon />} title={"Tweets"} t="tweet" setType={setType}/>
                    <SideBarButton logo={<YtIcon />} title={"Video"} t="youtube" setType={setType} />
                    <SideBarButton logo={<DocumentIcon />} title={"Documents"} t="document" setType={setType} />
                    <SideBarButton logo={<LinkIcon />} title={"links"} t="link" setType={setType}/>
                </div>
            </div>

            <UserButton user={user}/>

            
        </div>
    );
}

function SideBarButton({logo, title, t, setType}:{
    logo: ReactElement,
    title: string,
    t: string,
    setType: React.Dispatch<React.SetStateAction<string>>
}){


    return (
        <div onClick={()=>{setType(t)}} className="flex cursor-pointer select-none hover:bg-gray-200 active:bg-gray-300 ">
            <div className="p-4">
                {logo}
            </div>
            <div className="p-4">
                {title}
            </div>
        </div>
    );
}

function Login({user}:{user: string}){
    const navigate = useNavigate();
    return (
        <div className="flex justify-between">
            <div className="flex">
                <UserIcon />
                <div className="flex items-center pl-2 text-2xl select-none">
                    {user}
                </div>
            </div>
            <Button variant="primary" size="md" text="Log Out" onClick={() => {
                localStorage.clear();
                setTimeout(() => navigate("/signin"), 600);;
            }}/>
        </div>
    );
}

function NotLogin(){
    const navigate = useNavigate();
    return (
        <div className="flex justify-around">
            <Button variant="secondary" size="md" text="Sign Up" onClick={() => {setTimeout(() => navigate("/signup"), 600);}}/>
            <Button variant="primary" size="md" text="Login In" onClick={() => {setTimeout(() => navigate("/signin"), 600);}}/>  
        </div>
    );
}


function UserButton({user}:{user: string}){
    return(
        <div className="bg-grey-200 mb-10 outline-3 outline-gray-200 p-2">
            {user ? <Login user={user}/> : <NotLogin /> }
        </div>
    );
}