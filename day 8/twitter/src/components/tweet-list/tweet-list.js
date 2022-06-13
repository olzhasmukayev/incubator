import React from 'react'
import "./styles.css"
import cat from "../create-post/img/cat.jpg"
export const TweetList = () => {
    const arr = [
      {
        accountName: "Olzhas",
        tweet: "I love tomatoes",
        commentNumber: 1,
        retweetNumber: 30,
        likeNumber: 40,
      },
      {
        accountName: "Olzhas",
        tweet: "I love tomatoes",
        commentNumber: 1,
        retweetNumber: 30,
        likeNumber: 40,
      },
      {
        accountName: "Olzhas",
        tweet: "I love tomatoes",
        commentNumber: 1,
        retweetNumber: 30,
        likeNumber: 40,
      },
      {
        accountName: "Olzhas",
        tweet: "I love tomatoes",
        commentNumber: 1,
        retweetNumber: 30,
        likeNumber: 40,
      },
    ];
  return (
    <div className="tweet-list-wrapper">
      {arr.map((tweet) => (
        <div className="tweet-box">
          <div className="user-image">
            <img src={cat} alt="" />
          </div>
          <div className="tweet-content">
            <div>{tweet.accountName}</div>
            <div>{tweet.tweet}</div>
            {/* <div className="tweet-actions">
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetList;