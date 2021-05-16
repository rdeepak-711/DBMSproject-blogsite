/*
  This page is to show in detail what each blog post contains.
  Here the title is shown first(underlined) then the text and the author in the bottom.
  Here you can also update your blog post text.
*/

import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useParams } from 'react-router-dom';
import '../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function Posts() {
  let {postId} = useParams();

  const[blog, setBlog] = useState({});
  const[newText, setNewText] = useState({});

  //function to show get info of a particular post based on the id from the database through the backend 
  useEffect(() =>{
    Axios.get(`http://localhost:3001/api/getFromId/${postId}`).then((data)=>{
      setBlog({title: data.data[0].title, post: data.data[0].posts_text, userName: data.data[0].user_name});
    });
  }, []);

  //function to send the updated the version of the blog post text to teh backend when the update button is clicked
  const updatePostText = (id) =>{
    Axios.put('http://localhost:3001/api/update', {
      id: id,
      text: newText
    }).then((response)=>{
      alert("Blog text updates upon refreshing page");
    })
  }

  //to show the info
  return (
    <div className="individualPost">
      <div className="Post individual">
        {/* Info stored in the database is shown */}
        <div>
          <h1 className="center-text"><u>{blog.title}</u></h1>
          <p className="Text-inside">{blog.post}</p>
          <h4 className="center-text username">{blog.userName}</h4>
        </div>
        {/* This div is for the update portion */}
        <div> 
          <textarea 
            type="text" 
            placeholder="Add new text...." 
            onChange={(e)=>{
              setNewText(e.target.value);
            }}
          /> 
          <button className="posts-button" onClick={()=>updatePostText(postId)}>
            <FontAwesomeIcon icon={faPen}/> Update post text
          </button>
        </div>
      </div>
    </div>
  )
}
