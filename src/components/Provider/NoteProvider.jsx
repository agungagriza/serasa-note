"use client";

import {createContext, useState, useEffect} from 'react'

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([]); 

  function addNote() {
    const newNotes = [...notes]
    const newNote = {
        body: ""
    }
    newNotes.push(newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));

  }

  function deleteNote(index) {
    const newNotes = [...notes]
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function editNote(index, editedNote) {
    const newNotes = [...notes]
    const newNote = {
        body: editedNote
    }
    newNotes.splice(index, 1, newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  useEffect(() => {
    const data = localStorage.getItem("notes")
    // set default ke empty
    const currentNotes = JSON.parse(data) || [];
    setNotes(currentNotes)

  },[])

  return <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>{children}</NoteContext.Provider>
};


