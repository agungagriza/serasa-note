"use client";

import {NoteContext} from "../Provider/NoteProvider"
import {useContext} from "react"
import {Plus} from "lucide-react"

export const NoteHeader = () => {

    const {addNote} = useContext(NoteContext);

  return (
    <div className='flex justify-between py-8 items-center'>
    <div className="flex gap-3 items-center"> 
    <div className="text-xl font-semibold">Sarasa Note</div>
    <div className="text">Eloquent Mind Journeys</div>
    </div>
    <div><Plus onClick={addNote} /></div>
    </div>
)
}
