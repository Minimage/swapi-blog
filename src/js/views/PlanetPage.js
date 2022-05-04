import React from "react";
import { useParams } from "react-router-dom";

export const PlanetPage = () => {
  const params = useParams();
  const [planet, setPlanet] = React.useState(null);

  React.useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://www.swapi.tech/api/planets/" + params.id
      );
      const payload = await response.json();
      setPlanet(payload.result.properties);
    };
    fn();
  }, []);
//comment
  return (
    <div>
      <h1>planet Page {planet !== null ? planet.name : ""}</h1>
    </div>
  );
};
