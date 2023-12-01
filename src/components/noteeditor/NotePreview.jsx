"use client"

import { useContext } from 'react'
import { NoteContext } from '../Provider/NoteProvider'
import { NoteCard } from './NoteCard';

export const NotePreview = () => {

    const { notes } = useContext(NoteContext);

    return (
        <div className='grid grid-cols-3 gap-6'>
          {notes.length === 0 ? (
            <p className='text-xl text-gray-400 col-span-3 mt-60 w-full text-center'>You don't have any notes right now. <br /> Click the + button on the top-right to create a new note.</p>
          ) : (
            notes.map(({ title, body }, index) => {
              return <NoteCard title={title} body={body} index={index} key={index} />;
            })
          )}
        </div>
      );
    };

