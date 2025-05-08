import { useState } from "react";
export default function Post(props) {
  const [likeCount, setLikeCount] = useState(props.likes);
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
          <img src={props.profilePicture} alt="profile picture" />
          <h3 className="username">{props.userName}</h3>
        </div>

        <img src={props.img} alt="posted picture" className="posted-img" />

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
      </div>
    </div>
  );
}
