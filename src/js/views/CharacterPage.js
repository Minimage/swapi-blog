import React from "react";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  const params = useParams();
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://www.swapi.tech/api/people/" + params.id
      );
      const payload = await response.json();
      setCharacter(payload.result.properties);
    };
    fn();
  }, []);

  return (
    <div>
      <h1>Character Page {character !== null ? character.name : ""}</h1>
    </div>
  );
};
