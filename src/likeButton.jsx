import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  let likedStyle = {
    color: "red",
    fontSize: "100px",
  };

  let unlikedStyle = {
    fontSize: "100px",
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={likedStyle}></i>
        ) : (
          <i class="fa-regular fa-heart" style={unlikedStyle}></i>
        )}
      </p>
    </div>
  );
}
