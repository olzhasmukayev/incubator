import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { useState } from "react";

export const Content = ({handleCreateHun}) => {
    const [selector, setSelector] = useState("Characters");
    const handleSelectorChange = (event) => {
        setSelector(event.target.value);
    }
  return (
    <>
      <div className="content-layout">
        <select
          value={selector}
          onChange={handleSelectorChange}
          placeholder="Choose your path"
          className="select-item"
        >
          <option>Characters</option>
          <option>Planets</option>
          <option>Starships</option>
        </select>
      </div>
      {selector === "Characters" &&
        swCharacters.map((char) => (
          <div key={char.name} className="item-list-layout">
            <div>
              <p>{char.name}</p>
              <p>gender: {char.gender}</p>
              <p>birthday: {char.birth_year}</p>
            </div>
            <div className="item-image-layout">
              <button className="favorite-button" onClick={handleCreateHun}>
                I am your fan!!
              </button>
              <img className="item-image" src={char.url} alt="asd" />
            </div>
          </div>
        ))}
      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <div key={planet.name} className="item-list-layout">
            <div>
              <p>{planet.name}</p>
              <p>rotation: {planet.rotation_period}</p>
              <p>period: {planet.orbital_period}</p>
            </div>
            <div className="item-image-layout">
              <button className="favorite-button">I am your fan!!</button>
              <img className="item-image" src={planet.url} alt="asd" />
            </div>
          </div>
        ))}
    </>
  );
};
