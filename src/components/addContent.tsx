import { CloseIcon } from "../icons/closeIcon";
import { Button } from "./button";
import { Input } from "./input";

type AddContentPropType = {
    setClose: ()=>void;
}

export function AddContent({setClose}: AddContentPropType){
    return(
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/20 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-md p-4 outline-1">
                    <div onClick={setClose} className="flex justify-end cursor-pointer">
                        <CloseIcon />
                    </div>
                    <div className="flex justify-center mt-2">
                        <div>
                            <Input placeHolder="title"/>
                            <Input placeHolder="link"/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button variant="primary" size="md" text="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

