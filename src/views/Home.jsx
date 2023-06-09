import { useState } from "react";

import Title from "../components/Title";
import CardGroup from "../components/CardGroup";
import { Card } from "../components/Card";
import useAppContext from "../context/AppContext";

export const Home = () => {
  const { store, actions } = useAppContext();

  if (store.loading) {
    return <h1>Loading...</h1>;
  }

  console.log(store.characters);
  console.log(store.charactersDetails);

  return (
    <>
      <Title>Characters</Title>
      <CardGroup>
        {store?.characters.map((character, index) => {
          return (
            <Card title={character.name} key={character.uid} id={character.name}>
              <p>{`Gender: ${store?.charactersDetails[index].gender}`}</p>
              <p>{`Hair Color: ${store?.charactersDetails[index].hair_color}`}</p>
              <p>{`Eye Color: ${store?.charactersDetails[index].eye_color}`}</p>
            </Card>
          );
        })}
      </CardGroup>
      <Title>Planets</Title>
      <CardGroup>
        {store?.planets.map((planet, index) => {
          return (
            <Card title={planet.name} key={planet.uid} id={planet.name}>
              <p>{`Population: ${store?.planetsDetails[index].population}`}</p>
              <p>{`Terrain: ${store?.planetsDetails[index].terrain}`}</p>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
};
