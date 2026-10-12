import type { ReactElement } from "react";
import { ShareIcon } from "../icons/shareIcon";
import { DeleteIcon } from "../icons/deleteIcon";
import { DocumentIcon } from "../icons/documentIcon";
import { YtIcon } from "../icons/ytIcon";
import { TweetIcon } from "../icons/tweetIcon";

interface cardProps{
    "title": string;
    "type": "youtube" | "tweet" | "document" | "link";
    "descreption"?: string | null | undefined;
    "link"?: string;
    "tags"?: string[];

}
interface tagProps{
    "title": string
}
export function Tag(prop: tagProps){
    return (
        <div className="bg-purple-300 text-purple-500 rounded-3xl p-1 text-[15px]">
            #{prop.title}
        </div>
    );
}

const icons: {[key:string]: ReactElement} = {
    "document": <DocumentIcon />,
    "youtube": <YtIcon />,
    "tweet": <TweetIcon />,
}

export function Card(props: cardProps){
    const tags=props.tags;
    

    return(
        <div className="bg-white max-h-150 max-w-70 rounded-xl border-2 border-gray-200 p-4">
            <div className="flex justify-between">
                <div className="flex">
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
                    <div>
                        {<DeleteIcon />}                      
                    </div>
                </div>              
            </div>
            <div className="mt-6">
                <div>
                    {props.type==="youtube" && <iframe className="w-full h-full block" src="https://www.youtube.com/embed/RukxQ0vJKCo?si=H4mGNdKzgd1SjzHg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    {props.type==="document" && props.descreption}
                    {props.type==="tweet" && <div className="w-full h-full block"><blockquote><p lang="en" dir="ltr">Project idea - manim or remotion that spits videos that are at par with After effects.
Still code -&amp;gt; video, but shouldn't look ai generated.</p>&mdash; Harkirat Singh (@kirat_tw) <a href="https://x.com/kirat_tw/status/2107489246772953355?ref_src=twsrc%5Etfw">October 6, 2026</a></blockquote>
<script async src="https://platform.x.com/widgets.js" charSet="utf-8"></script></div>}
                </div>
                <div className="flex space-x-2 mt-5">
                    {tags?.map((tag:string):ReactElement => {
                        return(
                            <span>
                                {<Tag title={tag}/>}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}