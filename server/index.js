// The backend file that does the communication between the frontend and the database

const express = require('express')
const db = require('./config/db');
const cors = require('cors');

const app = express()

const PORT = 3001

app.use(cors());
app.use(express.json());

// This get request is used for the MainPage that contains all the blogs so the viewer can see the blogs present.
app.get("/api/get", (req, res) => {
  db.query(
    "SELECT * FROM posts",
    (err, result) => {
      if(err){
        console.log(err);
      }

      res.send(result);
    }
  );
});

//This get request is for specific posts to be displayed
app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id
  db.query(
    "SELECT * FROM posts WHERE id = ?", id,
    (err, result) => {
      if(err){
        console.log(err);
      }

      res.send(result);
    }
  );
});

//This post request is to create a post and add it to the database
app.post('/api/create/', (req, res)=>{
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO posts(title, posts_text, user_name) VALUES(?, ?, ?)", [title, text, username],
    (err, result) => {
      if(err){
        console.log(err);
      }

      console.log(result);
    }
  );
});

//This put request is to update the posts_text in the posts table
app.put('/api/update/', (req, res)=>{
  const id = req.body.id;
  const text = req.body.text;

  db.query(
    "UPDATE posts SET posts_text=? WHERE id=?", [text, id],
    (err, result) => {
      if(err){
        console.log(err);
      }

      res.send(result);
    }
  )
})

//This delete request is to delete a particular post
app.delete('/api/delete/:id', (req, res) => {
  const id=req.params.id;
  db.query(
    "DELETE FROM posts WHERE id=?", id,
    (err, result) => {
      if(err){
        console.log(err);
      }

      res.send(result);
    }
  )
})

//This listen request helps in starting the backend.
app.listen(PORT, () =>{
  console.log(`Server on port ${PORT}`);
});