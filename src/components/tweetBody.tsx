import { Card } from "./card";
import type { cardType } from "../pages/home";

type tweetBodyProps = {
    cards: cardType[];
    cardsSize: number;
    setCardsSize: React.Dispatch<React.SetStateAction<number>>;
}

export function TweetBody({cards, cardsSize, setCardsSize}: tweetBodyProps){
    return(
            <div className="columns-4 gap-0 pt-5 border-t-2 border-t-gray-200 select-none">
                {cards.map((card: cardType)=>{
                    if(card.type==='tweet'){
                        return <Card id={card.id} title={card.title} type={card.type} link={card.link} tags={card.tags} cardsSize={cardsSize} setCardsSize={setCardsSize} />
                    }
                })}
            </div> 
        );
}