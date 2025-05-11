import { useState } from "react";
export default function Post(props) {
  const [likeCount, setLikeCount] = useState(4507);
  const [isLiked, setIsLiked] = useState(false);

  function like() {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
  }
  return (
    <div className="wrapper">
      <div>
        <div className="header-info">
          <img
            src="https://i.pinimg.com/736x/73/f8/8f/73f88ff85f0f8db447a4e862460cb5b0.jpg"
            alt="profile picture"
          />
          <h3 className="username">{props.title.slice(0, 15)}</h3>
        </div>

        <img
          src="https://i.pinimg.com/736x/a2/10/46/a21046087782d70f0556f8409b092ebb.jpg"
          alt="posted picture"
          className="posted-img"
        />

        <div className="like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            onClick={like}
            style={{
              color: isLiked ? "red" : "gray",
              cursor: "pointer",
            }}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z"
            />
          </svg>
          <h2> {likeCount} likes</h2>
        </div>
        <div className="post-caption">
          <p>
            <span className="username">{props.title.slice(0, 15)}</span>{" "}
            {props.body}
          </p>
        </div>
      </div>
    </div>
  );
}
