/*
  Shows all the blogs stored in the database and also lets user to delete a particualr post.
  This is designed in such a way that only 200characters of the post text is shown.
*/

import React, { useEffect, useState } from 'react';
import Axios from "axios";
import '../App.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function BlogPage() {
  const [postList, setPostList] = useState([]);
  let history = useHistory();

  //function to get the dat from the backend to show the posts
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((data)=>{
      setPostList(data.data)
    });
  }, []);

  //function that send info to the backend to delete this particular post with this id from the database table
  const deletePost = (id) =>{
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  }
  return (
    <div className="MainPage">
      <div className="PostContainer">

        {postList.map((val, key) =>{
          return (
            <div className="Post" key={key} onClick={()=>{history.push(`/post/${val.id}`)}}>
              <h1 className="post title">{val.title}</h1>
              <p className="post text">{val.posts_text.length > 500 ? val.posts_text.substring(0, 200) + '...':val.posts_text}</p>
              {/* Shows only some of the text when the length is greater than 500 */}
              <h4 className="post user">{val.user_name}</h4>
              <button onClick={()=>{deletePost(val.id)}}><FontAwesomeIcon icon={faTrash}/></button>
              {/* FontAwesome shown the trash icon so it is easy to use. */}
            </div>
          )
        })} 
      </div>
    </div>
  )
}
