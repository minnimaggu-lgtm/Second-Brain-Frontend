import { Button } from "../components/button"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { Card } from "../components/card"
import { AddContent } from "../components/addContent"
import { useState } from "react"
import { SideBar } from "../components/sideBar"

function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-[300px_1fr] bg-gray-100 h-screen w-screen">
      {modalOpen && <AddContent setClose={()=>{
        setModalOpen(false);
      }}/>}
      <div >
        <SideBar />
      </div>
      <div className="p-10">
        <div className="flex justify-between">
          <div className="font-bold text-3xl">
            <div className="mb-5">
              All Notes
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon />}/>
            <Button onClick={()=>{setModalOpen(true);}} variant="primary" size="md" text="Add Content" startIcon={<PlusIcon />}/>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <Card title="Project Ideas" type="youtube" descreption="Future Projects Build a personal knowledge base Create a habit tracker Design a minimalist todo app" tags={["productivity", "ideas"]}/>
          <Card title="Project Ideas" type="tweet" descreption="Future Projects Build a personal knowledge base Create a habit tracker Design a minimalist todo app" tags={["productivity", "ideas"]}/>
          <Card title="Project Ideas" type="document" descreption="Future Projects Build a personal knowledge base Create a habit tracker Design a minimalist todo app" tags={["productivity", "ideas"]}/>     
        </div>    
      </div>
    </div>
      
  )
}

export default Dashboard
