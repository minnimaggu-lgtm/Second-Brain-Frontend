import { Button } from "../components/button"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { AddContent } from "../components/addContent"
import { useState } from "react"
import { SideBar } from "../components/sideBar"
import { AllNotesBody } from "./allNotesBody"

function Home({user}:{user: string}) {
  const [modalOpen,setModalOpen] = useState(false);
  const [cardsSize, setCardsSize] = useState(0);

  return (
    <div className="grid grid-cols-[300px_1fr] bg-gray-100 h-screen w-screen overflow-x-hidden">
      {modalOpen && <AddContent cardsSize={cardsSize} setCardsSize={setCardsSize} setClose={()=>{
        setModalOpen(false);
      }}/>}
      <div >
        <SideBar user={user} />
      </div>
      <div className="pt-6 pl-2 pr-2 pb-2">


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

        <AllNotesBody cardsSize={cardsSize} setCardsSize={setCardsSize} />

      </div>
    </div>
      
  )
}

export default Home
