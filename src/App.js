import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {

  const [notes, setNotes] = useState([]);
  const addNotes = (note) => {
    setNotes(
      (prevData) => {
        return [...prevData, note];
      }
    )
  }

  const deleteNote = (id) => {
    setNotes( (oldData) => {
      return oldData.filter((val, idx) => {
        return idx !== id;
      })
    } )
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNotes} />
      {/* <Note /> */}


     <div className='grid'>
     {notes.map((val, index) => {
        return (
          <Note id={index}
            key={index}
            title={val.title}
            content={val.content}
            passNote = {deleteNote}
          />
        )
      })}
     </div>


      {/* <Footer/> */}
    </>
  )
}

export default App;
