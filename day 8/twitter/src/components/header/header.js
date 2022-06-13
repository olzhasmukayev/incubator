import React from "react";
import "./styles.css";
import IconPopularTweets from "../../icons/popular-tweets"

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-row"> 
        <div>Главная</div>
        <div className="popular-tweets">
          <IconPopularTweets />
        </div>
      </div>
      
    </div>
  );  
};

export default Header;
