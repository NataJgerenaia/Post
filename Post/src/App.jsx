import Post from "./post";
import "./App.css";

function App() {
  const posts = [
    {
      profilePicture:
        "https://images.squarespace-cdn.com/content/v1/63126ea1e247b3652b89ef28/bf756995-160e-4cc3-ad56-7396801af277/TGC+%23113+-+Norman+Reedus+-+Website+Art.jpg?format=750w",
      userName: "Norman Reedus",
      img: "https://www.pluggedin.com/wp-content/uploads/2023/09/daryl-dixon.png",
      likes: 1200,
    },
    {
      profilePicture:
        "https://awards.adamatoulon.com/images/showcase/science-fiction/Carol_Peletier.jpg",
      userName: "Carol Peletier",
      img: "https://imageio.forbes.com/specials-images/imageserve/66fac407c90f0adf3e1d0371/Carol-Daryl-Dixon/960x0.png?format=png&width=1440",
      likes: 800,
    },
    {
      profilePicture:
        "https://cdnb.artstation.com/p/assets/images/images/009/555/633/large/jonas-barbosa-maggie.jpg?1519656453",
      userName: "Maggie Greene",
      img: "https://globalnews.ca/wp-content/uploads/2018/02/maggie-the-walking-dead.jpg?quality=85&strip=all",
      likes: 360,
    },
  ];

  return (
    <>
      {posts.map((posts, i) => (
        <Post
          key={i}
          profilePicture={posts.profilePicture}
          userName={posts.userName}
          img={posts.img}
          likes={posts.likes}
        />
      ))}
    </>
  );
}

export default App;
