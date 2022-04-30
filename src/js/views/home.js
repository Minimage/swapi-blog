import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch("https://www.swapi.tech/api/people");
      const payload = await response.json();
      setCharacters(payload.results);
    };
    fn();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((item, index) => {
          return (
            <li key={index}>
              <a href={"/character/" + item.uid}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
