//импортируем стили
import "./App.css";
import { useState } from "react";
//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "./assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "./assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "./assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "./assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "./assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "./assets/youtube.svg";

import swCharacters from "./data/characters.json";
import swPlanets from "./data/planets.json";
import swStarships from "./data/starships.json";

import { Header } from "./components/header";
import { Content } from "./components/content";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export default function App() {
  const [funs, setfun] = useState();
  const handleCreateHun = ({ name }) => {
    setfun(name);
  };  
  return (
    <>
      <Header fan={funs} />
      <hr />
      <Content handleCreateHun={handleCreateHun} />
    </>
  );
}
