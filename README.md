Hey viewers

I have created this blog site as my DBMS lab project. I have used ReactJS for the frontend, NodeJS for the backend and MySQL for database. The frontend files(images, code) are available in the client folder. The backend files(connectivity to database and MySQL queries) are available in the server folder. I use MySQL workbench for the database management. 

When you start the website you will be shown an intro and a read more link. 
  > Upon clicking the read more you can read the blogs written. This is where I have used the 'SELECT' MySQL keyword to display the blog posts from the post table in the blogposts database. Here only some of the posts text is shown(if it longer than 200 characters) along with the title and author name. 
 
  > There will be a trash button available below each blog post that will allow users to delete the blog post. This is where I have used the 'DELETE' MySQL keyword to delete the post from the posts table in the blogposts database.
  
  > Upon clicking a blog post(other than the trash icon) you can read the post in detail. Here if you want to update the post text you can by using the text-area shown below and clicking on the button. Once you refresh the page the post would be updated. This is where I have used 'UPDATE' MySQL keyword to update the text(posts_text) in the posts table in blogposts database.
  
  > The navbar offers a 'CREATE POST' button where you can go ahead an create a post. To create a post you need to include the title of the post, your name(or the resource you take it from) and the posts text. Once you click the create post button the post is added to the posts table in the database. The action is done using the 'INSERT' MySQL keyword to add the post to the posts table in the blogposts database.

  I have used all the MySQL queires in the index.js file inside the server folder as a backend file. Each of these queries are triggered when the user does any of the actions specified in the index,js file.

The web application is started when you type in 'npm start' in the terminal once inside the client folder. To start the frontend 'npm start' is used and to start the backend 'npm run devStart' is used in the terminal once inside the server folder.
