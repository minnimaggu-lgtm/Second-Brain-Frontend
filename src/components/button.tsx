import type { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean
}

const variantStyles = {
    "primary": "bg-purple-600 rounded-md text-white",
    "secondary": "bg-purple-300 rounded-md text-purple-500"
}

const sizes = {
        "sm":"p-2",
        "md":"px-4 py-4 pt-2 pb-2",
        "lg":"p-6"
}
export function Button(props: ButtonProps){
    return (
        <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizes[props.size]} flex cursor-pointer ${props.fullWidth ? "w-full justify-center" : ""}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{props.text}{props.endIcon}</button>
    );
}