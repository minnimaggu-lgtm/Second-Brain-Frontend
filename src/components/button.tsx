import type { ReactElement } from "react";
import SmoothLoader from "../gifs/smoothloader";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean
    loading?: boolean
}

const variantStyles = {
    "primary": "bg-purple-600 rounded-md text-white hover:bg-indigo-800 active:bg-indigo-900",
    "secondary": "bg-purple-300 rounded-md text-purple-500 hover:bg-indigo-200 active:bg-indigo-300"
}

const sizes = {
        "sm":"p-2",
        "md":"px-4 py-4 pt-2 pb-2",
        "lg":"p-6"
}

function Loading(){
    return (
        <SmoothLoader />
    );
}

export function Button(props: ButtonProps){
    return (
        <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizes[props.size]} flex cursor-pointer ${props.fullWidth ? "w-full justify-center" : ""} select-none`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{props.loading ? <Loading /> :<div>{props.text}{props.endIcon}</div>}</button>
    );
}