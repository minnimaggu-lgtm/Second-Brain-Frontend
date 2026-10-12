import type { ReactElement } from "react";
import { BrainIcon } from "../icons/brainIcon";
import { DocumentIcon } from "../icons/documentIcon";
import { LinkIcon } from "../icons/linkIcon";
import { TweetIcon } from "../icons/tweetIcon";
import { YtIcon } from "../icons/ytIcon";

export function SideBar(){
    return (
        <div className="bg-white h-full w-full border-r-2 border-r-grey-200" >
            <div className="flex p-2">
                <BrainIcon />
                <div className="text-black font-bold text-2xl pl-2">
                    Second Brain
                </div>
            </div>
            <div className="p-6">
                <SideBarButton logo={<TweetIcon />} title={"Tweets"} />
                <SideBarButton logo={<YtIcon />} title={"Video"} />
                <SideBarButton logo={<DocumentIcon />} title={"Documents"} />
                <SideBarButton logo={<LinkIcon />} title={"links"} />
            </div>
            
        </div>
    );
}

function SideBarButton({logo, title}:{
    logo: ReactElement,
    title: string
}){
    return (
        <div className="flex pt-4 pb-4">
            <div>
                {logo}
            </div>
            <div className="pl-4">
                {title}
            </div>
        </div>
    );
}