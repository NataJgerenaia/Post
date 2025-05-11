import Post from "./post";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
 const [posts, setPosts] = useState ([]);

 useEffect ( () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
 }, [])
  return (
    <>
      {posts.map((post, i) => (
        <Post
          key={i}
          title={post.title}
          body = {post.body}
        />
      ))}
    </>
  );
}

export default App;
