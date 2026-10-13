import { useRef, useState } from "react";
import { CloseIcon } from "../icons/closeIcon";
import { Button } from "./button";
import { DropDown } from "./dropDown";
import { Input } from "./input";
import { TagsInput } from "./tagsInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { MsgBox } from "./msgBox";

type AddContentPropType = {
    setClose: ()=>void;
    cardsSize: number;
    setCardsSize: React.Dispatch<React.SetStateAction<number>>;
}

interface dataType{
    link:string;
    contentType:string;
    title: string;
    tags: string[];
}

export function AddContent({setClose, cardsSize, setCardsSize}: AddContentPropType){
    const titleRef = useRef<any>(null);
    const linkRef = useRef<any>(null);
    const [cType,setCType] = useState("Card Type")
    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    async function submitHandler(){
        try{
            const data: dataType ={
                "link": linkRef.current.value,
                "contentType": cType.toLocaleLowerCase(),
                "title": titleRef.current.value,
                "tags": tags
            }
            setLoading(true);
            const res = await axios.post(BACKEND_URL + "/api/v1/content",data);
            
            if(res.data.Message === "Content inserted"){
                console.log("succes");
                setMsg("Card created succesfully!")
                setCardsSize(curr => curr + 1);
            }
        }catch(e: any){
            console.log("Failed to add content:", e.message);
            setMsg(e.response.data.Message[0].message);
        }
        setLoading(false);
    }
    
    return(
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/20 flex justify-center ">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-between bg-white rounded-md p-5 outline-3 outline-gray-200 min-h-100 w-90 ">

                    <div className="flex justify-end w-full">
                        <button onClick={setClose} className="p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                            <CloseIcon />
                        </button>
                    </div>
                    
                    <div className="flex flex-col justify-center mt-2 w-full ">
                        <Input reference={titleRef} placeHolder="Title"/>
                        <Input reference={linkRef} placeHolder="Link"/>
                        <DropDown type={cType} setType={setCType}/>
                        <TagsInput tags={tags} setTags={setTags}/>
                    </div>
                    <MsgBox msg={msg} />
                    <div className="flex justify-center mt-4">
                        <Button onClick={submitHandler} variant="primary" size="md" text="Submit" loading={loading} />
                    </div>

                </div>
            </div>
        </div>
    );
}

