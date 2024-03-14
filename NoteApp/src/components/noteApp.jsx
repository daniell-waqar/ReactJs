import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "react-toastify/dist/ReactToastify.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToastContainer, toast } from 'react-toastify';
import './note.css'

export default function NoteApp() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [values, setValues] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission behavior

    if (!note.title || !note.content) {
      toast.error("Please fill in the fields");
      return;
    }

    if (editIndex === -1) {
      setValues((prevValues) => [...prevValues, { title: note.title, content: note.content }]);
    } else {
      // Updating an existing item
      const updatedItems = [...values];
      updatedItems[editIndex] = {
        title: note.title,
        content: note.content
      };
      setValues(updatedItems);
      setEditIndex(-1);
    }

    setNote({
      title: "",
      content: ""
    });
  };

  const deleteNote = (id) => {
    setValues((prevValues) => prevValues.filter((_, index) => index !== id));
    if (id === editIndex) {
      setEditIndex(-1);
      setNote({
        title: "",
        content: ""
      });
    }
  };

  const editNote = (id) => {
    setEditIndex(id);
    setNote({
      title: values[id].title,
      content: values[id].content
    });
  };

  return (
    <div className="main">
      <div className="header">
        <h1 className="notes__title">Note Taking App</h1>
      </div>

      <div>
        <form className="create-note" action="">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            type="text"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={3}
            type="text"
          />

          <button onClick={handleSubmit}>
            {editIndex === -1 ? <AddIcon /> : <EditIcon />}
          </button>
        </form>
      </div>

      <ul className="note-list">
        {values.map((item, index) => (
          <li key={index} className="note-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <div className="note-actions">
              <button onClick={() => deleteNote(index)}>
                <DeleteIcon />
              </button>
              <button onClick={() => editNote(index)}>
                <EditIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <ToastContainer autoClose={1000} />
    </div>
  );
}
