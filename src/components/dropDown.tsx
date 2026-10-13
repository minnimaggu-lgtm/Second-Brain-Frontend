import { useState } from "react";
import { DropDownIcon } from "../icons/dropDownIcon";

function DropDownButton({placeholder, fn}:{placeholder: string, fn: (placeholder:string) => void} ){
    return (
        <div onClick={() => {
            fn(placeholder);
        }} className="outline-gray-200 text-txt-100 p-1 m-0.5 select-none hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300 hover:outline-2 hover:outline-black">{placeholder}</div>
    );
}


export function DropDown({type, setType}:{type:string , setType: React.Dispatch<React.SetStateAction<string>>}){
    const [open,setOpen] = useState(false);
    function dropDownHandler(){
        setOpen(open => !open)
    }
    function setDropDownValue(placeholder: string){
        setType(placeholder);
        dropDownHandler();
    }
    return (
        <div className="flex flex-col w-full">
            <div onClick={dropDownHandler} className="text-txt-100 mt-2 outline-2 outline-gray-200 p-1 flex justify-between select-none hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300 hover:outline-2 hover:outline-black">{type}{<DropDownIcon />}</div>
            {open && <div className="outline-2 outline-gray-200">
                <DropDownButton placeholder="Youtube" fn={setDropDownValue}/>
                <DropDownButton placeholder="Tweet" fn={setDropDownValue}/>
                <DropDownButton placeholder="Document" fn={setDropDownValue}/>
                <DropDownButton placeholder="Link" fn={setDropDownValue}/>
            </div>}
            
        </div>
    );
}