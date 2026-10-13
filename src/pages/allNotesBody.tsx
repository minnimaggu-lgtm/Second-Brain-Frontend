import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Card } from "../components/card";

type cardType = {
    id: string;
    type: "link" | "youtube" | "tweet" | "document";
    link: string;
    title: string;
    tags: string[];
}

export function AllNotesBody({cardsSize, setCardsSize}:{cardsSize: number, setCardsSize: React.Dispatch<React.SetStateAction<number>>}){

    const [cards, setCards] = useState<cardType[]>([]);

    useEffect(()=>{
        async function getAllNotes(){
            try{
                const res = await axios.get(BACKEND_URL + "/api/v1/content");
                setCards(res.data.Content);
                setCardsSize(cards.length);
            }
            catch(e){

            }
        }
        getAllNotes();
    },[cardsSize])

    return(
        <div className="columns-4 gap-0 pt-5 border-t-2 border-t-gray-200 select-none">
            {cards.map((card: cardType)=>{
                return <Card id={card.id} title={card.title} type={card.type} link={card.link} tags={card.tags} cardsSize={cardsSize} setCardsSize={setCardsSize} />
            })}
        </div> 
    );
}