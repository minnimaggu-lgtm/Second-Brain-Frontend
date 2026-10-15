import { Button } from "../components/button"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { AddContent } from "../components/addContent"
import { useEffect, useState} from "react"
import { SideBar } from "../components/sideBar"
import { AllNotesBody } from "../components/allNotesBody"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { TweetBody } from "../components/tweetBody"
import { YtBody } from "../components/ytBody"
import { DocumentBody } from "../components/documnetBody"
import { LinkBody } from "../components/linkBody"

export type cardType = {
    id: string;
    type: "link" | "youtube" | "tweet" | "document";
    link: string;
    title: string;
    tags: string[];
}



function Home({user}:{user: string}) {
  const [modalOpen,setModalOpen] = useState(false);
  const [cardsSize, setCardsSize] = useState(0);
  const [cards, setCards] = useState<cardType[]>([]);
  const [type, setType] = useState("all");


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

  return (
    <div className="grid grid-cols-[300px_1fr] bg-gray-100 h-screen w-screen overflow-hidden">
      {modalOpen && <AddContent cardsSize={cardsSize} setCardsSize={setCardsSize} setClose={()=>{
        setModalOpen(false);
      }}/>}
      <div >
        <SideBar user={user} setType={setType} />
      </div>
      <div className="pt-6 pl-2 pr-2 pb-2 overflow-y-auto">
        <div className="flex justify-between">
          <div className="font-bold text-3xl">
            <div className="mb-5 select-none">
              All Notes
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon />} loading={false}/>
            <Button onClick={()=>{setModalOpen(true);}} variant="primary" size="md" text="Add Content" startIcon={<PlusIcon />} loading={false}/>
          </div>
        </div>

        {/*All Notes Body*/} 
        {type==="all" && <AllNotesBody cardsSize={cardsSize} setCardsSize={setCardsSize} cards={cards}  />}
        {type==="tweet" && <TweetBody cardsSize={cardsSize} setCardsSize={setCardsSize} cards={cards}  />}
        {type==="youtube" && <YtBody cardsSize={cardsSize} setCardsSize={setCardsSize} cards={cards}  />}
        {type==="document" && <DocumentBody cardsSize={cardsSize} setCardsSize={setCardsSize} cards={cards} />}
        {type==="link" && <LinkBody cardsSize={cardsSize} setCardsSize={setCardsSize} cards={cards} />}
      </div>
    </div>
      
  );
}

export default Home
