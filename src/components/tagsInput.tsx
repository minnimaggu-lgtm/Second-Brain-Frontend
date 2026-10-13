import { useState, type KeyboardEvent, type ChangeEvent, type ReactElement } from "react";
import { Tag } from "./tag";

export function TagsInput({tags, setTags}:{tags: string[], setTags:React.Dispatch<React.SetStateAction<string[]>>}){
    const [inputValue, setInputValue] = useState("");


    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter"){
            const cleanValue = inputValue.trim();
            if (cleanValue && !tags.includes(cleanValue)) {
                setTags([...tags, cleanValue]);
                setInputValue(""); 
            }
        }
        if(e.key === "Backspace"){
            if(inputValue==="" && tags.length>0){
                setTags(tags.slice(0,-1));
            }
        }
    }

    return (
        <div className="flex flex-row flex-wrap items-start gap-2 p-1 outline-2 mt-2 outline-gray-200 min-h-20 max-w-full max-h-80 hover:outline-2 hover:outline-black">
            {tags.map((tag: string):ReactElement => {
                return <Tag title={tag} />
            })}
            <input 
            value={inputValue} 
            onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                    setInputValue(e.target.value)
                }}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? "Type and press enter..." : ""}
            className="flex-1 pb-20 max-h-25 border-none outline-none "
            >
            </input>
        </div>

    );
}