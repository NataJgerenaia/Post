import Post from "./post";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function handleAddPost() {
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      body: newPostBody,
    };
    setPosts([newPost, ...posts]);
  }

  return (
    <>
      <h2
        style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}
      >
        Add New Post
      </h2>
      <input
      style={{height:"30px"}}
        type="text"
        placeholder="Input Post Title"
        value={newPostTitle}
        onChange={(e) => {
          setNewPostTitle(e.target.value);
        }}
      ></input>
      <input
        style={{height:"30px"}}
        type="text"
        placeholder="Input Post Caption"
        value={newPostBody}
        onChange={(e) => {
          setNewPostBody(e.target.value);
        }}
      ></input>
      <button style={{height:"30px"}} onClick={handleAddPost}>Add New Post</button>
      {posts.map((post, i) => (
        <Post key={i} title={post.title} body={post.body} />
      ))}
    </>
  );
}

export default App;
