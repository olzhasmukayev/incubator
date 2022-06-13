import React from "react";
import "./styles.css";
import profileImage from "./img/cat.jpg"


const CreatePost = () => {
  return (
    <div className="create-post-wrapper">
      <div className="input-wrapper">
        <div>Create Post</div>
        <img src={profileImage} className="profile-image" alt="" />
        <input type="text" placeholder="Что нового?" />
      </div>
      <button style={{float: "right"}} className="post-button">Твитнуть</button>
    </div>
  );
};

export default CreatePost;
