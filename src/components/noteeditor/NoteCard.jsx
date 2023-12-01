"use client"

import { useContext, useState } from 'react'
import { NoteContext } from '../Provider/NoteProvider'
import {Minus} from "lucide-react"

export const NoteCard = ({title, body, index}) => {

  const { deleteNote, editNote } = useContext(NoteContext);

  return (

    <div className="shadow-md rounded-lg relative">
    {/* Title textarea */}
    <textarea
      value={title}
      onChange={(e) => {
        editNote(index, { ...body, title: e.target.value });
      }}
      placeholder="Your note's title"
      className="w-full text-s text-slate-800 font-medium focus:outline-none px-4 resize-none mt-2" rows={1}
    ></textarea>

    {/* Body textarea */}
    <textarea
      value={body.content}
      onChange={(e) => {
        editNote(index, { ...body, content: e.target.value });
      }}
      placeholder="What is your thoughts?"
      className="w-full text-s text-slate-800 focus:outline-none px-4 resize-none" rows={6}
    ></textarea>

    <Minus
      className="stroke-gray-400"
      onClick={() => deleteNote(index)}
      style={{
        position: 'absolute',
        right: '8px', // Adjust the distance from the right
        bottom: '8px', // Adjust the distance from the bottom
      }}
    />
  </div>
  
  )
}
