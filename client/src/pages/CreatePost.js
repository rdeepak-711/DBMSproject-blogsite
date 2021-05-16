/*
  This is the file that accepts new posts from the user and sends it to the backend which then send it to the database.
*/
import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css';

export default function CreatePost() {

  const[userName, setUserName] = useState("");
  const[title, setTitle] = useState("");
  const[text, setText] = useState("");

  //function to send the data to backend
  const submitPost = () =>{
    Axios.post('http://localhost:3001/api/create', {userName:userName, title:title, text:text});
  }

  //collects the data from the user and sets the data to the particular field.
  //The onChange function does the job of storing the input value in the respective fields.
  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label>User Name</label>
        <input type="text" onChange={(e)=>{setUserName(e.target.value);}}/>
        <label>Title</label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value);}}/>
        <label>Post Text</label>
        <textarea id="post" onChange={(e)=>{setText(e.target.value);}}></textarea>

        <button className="createpost-button"onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  )
}
