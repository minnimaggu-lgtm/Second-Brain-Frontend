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
        <div className="flex flex-col w-full relative">
            <div onClick={dropDownHandler} className="text-txt-100 mt-2 outline-2 outline-gray-200 p-1 flex justify-between select-none hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300 hover:outline-2 hover:outline-black">
                 <span>{type}</span><span className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}>
                    <DropDownIcon />
                </span>
            </div>
            <div className={`
                absolute left-0 top-full w-full z-10 overflow-hidden
                outline-2 outline-gray-200 bg-white shadow-lg rounded-b-md 
                transition-all duration-300 ease-in-out origin-top transform
                
                ${open 
                    ? 'opacity-100 max-h-60 mt-1 scale-y-100 pointer-events-auto' 
                    : 'opacity-0 max-h-0 mt-0 scale-y-95 pointer-events-none'
                }
            `}>
                <DropDownButton placeholder="Youtube" fn={setDropDownValue}/>
                <DropDownButton placeholder="Tweet" fn={setDropDownValue}/>
                <DropDownButton placeholder="Document" fn={setDropDownValue}/>
                <DropDownButton placeholder="Link" fn={setDropDownValue}/>
            </div>
            
        </div>
    );
}