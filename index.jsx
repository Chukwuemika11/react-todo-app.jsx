import React, { useState } from "react";

function TodoList() {
  const [newNotes, setNewNotes] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote(){
    if(newNotes.trim()){
        setNotes([...notes, newNotes]);
        setNewNotes("");
    }
  }

  function handleInputChange(event){
    setNewNotes(event.target.value);
  }

   function handleDelete(index){
     const updatedNotes = notes.filter((_, deletedTodo) => deletedTodo !== index);
     setNotes(updatedNotes);
   }

    return (
        <>
            <p>Take a note</p> 
         <input type="text" 
         value={newNotes}
         onChange={handleInputChange}
         />

         <button onClick={addNote}>Add note</button>
        
        <ul>
            {notes.map((note, index)=>(
                <li key={index}>
                    {note}
                <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    );
}

export default TodoList;