import { Card } from "./card";
import type { cardType } from "../pages/home";


type allNotesBodyProps={
    cardsSize: number; 
    setCardsSize: React.Dispatch<React.SetStateAction<number>>;
    cards: cardType[];
}

export function AllNotesBody({cardsSize, setCardsSize, cards}:allNotesBodyProps){


    return(
        <div className="columns-4 gap-0 pt-5 border-t-2 border-t-gray-200 select-none">
            {cards.map((card: cardType)=>{
                return <Card id={card.id} title={card.title} type={card.type} link={card.link} tags={card.tags} cardsSize={cardsSize} setCardsSize={setCardsSize} />
            })}
        </div> 
    );
}