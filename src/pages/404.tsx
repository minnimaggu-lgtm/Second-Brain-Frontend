import { NotFoundIcon } from "../icons/404Icon";

export function PageNotFound(){
    return (
        <div className="bg-gray-100 h-screen w-screen flex justify-center">
            <div className="flex flex-col justify-center ">
                <div className="flex">
                    <div className="mr-5">
                        <NotFoundIcon />
                    </div>
                    <div>
                        <div className="text-6xl ">
                            404 Not Found
                        </div>
                        <div className="flex justify-end">
                            Page you are looking for does not exist!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}