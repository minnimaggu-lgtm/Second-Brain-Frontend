import type { ReactElement } from "react";
import { ShareIcon } from "../icons/shareIcon";
import { DeleteIcon } from "../icons/deleteIcon";
import { DocumentIcon } from "../icons/documentIcon";
import { YtIcon } from "../icons/ytIcon";
import { TweetIcon } from "../icons/tweetIcon";
import { Tag } from "./tag";
import TweetEmbed, { DocOrLink, YtEmbed } from "./embeds";
import { LinkIcon } from "../icons/linkIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface cardProps{
    "id": string;
    "title": string;
    "type": "youtube" | "tweet" | "document" | "link";
    "descreption"?: string | null | undefined;
    "link": string;
    "tags"?: string[];
    "cardsSize": number;
    "setCardsSize": React.Dispatch<React.SetStateAction<number>>;

}

const icons: {[key:string]: ReactElement} = {
    "document": <DocumentIcon />,
    "youtube": <YtIcon />,
    "tweet": <TweetIcon />,
    "link": <LinkIcon />
}

export function Card(props: cardProps){
    const tags=props.tags;

    const cardContent: {[key:string]: ReactElement } ={
        "youtube": <YtEmbed link={props.link}/>,
        "tweet": <TweetEmbed link={props.link}/>,
        "document": <DocOrLink link={props.link}/>,
        "link": <DocOrLink link={props.link}/>
    }

    async function deleteCard(id:string){
        const req:{id: string}={
            id: id
        }
        try{
            const result = await axios.delete(BACKEND_URL + "/api/v1/content", {data:req});
            if(result.status===200){
                console.log("Succesfully deleted: " + id);
                props.setCardsSize(curr => curr - 1);
            }
        }catch(e: any){
            console.log(`error deleting ${id}: ` + e.message);
        }

    }


    return(
        <div className="bg-white max-h-min max-w-70 rounded-xl border-2 border-gray-200 p-4 break-inside-avoid mb-4 hover:bg-white/5 hover:shadow-2xl hover:shadow-gray-400 hover:cursor-pointer hover:outline-purple-300 hover:outline-2">
            {/*title and icons*/}

            <div className="flex justify-between">
                <div className="flex select-none">
                    <div className="mr-2">
                        {icons[props.type]}
                    </div>
                    <div>
                        {props.title} 
                    </div>
                </div>
                
                <div className="flex">
                    <div className="mr-4">
                        {<ShareIcon />}
                    </div>
                    <div onClick={()=>{
                        deleteCard(props.id);
                    }}>
                        {<DeleteIcon />}                      
                    </div>
                </div>          

            </div>

            <div className="mt-1 max-w-60 flex flex-col justify-center">

                {/*Content Card*/}

                <div className="flex justify-center mt-6 max-w-70 truncate">
                    {cardContent[props.type]}
                </div>
                
                {/*Tags Card*/}

                <div className="flex flex-wrap gap-1 mt-5 ">
                    {tags?.map((tag:string):ReactElement => {
                        return(
                            <span className="mt-4">
                                {<Tag title={tag}/>}
                            </span>
                        );
                    })}
                </div>
            </div>


        </div>
    );
}