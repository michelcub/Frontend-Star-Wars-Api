import Title from "../components/Title";
import CardGroup from "../components/CardGroup";
import { Card } from "../components/Card";
import useAppContext from "../context/AppContext";

export const Home = () => {
  const { store, actions } = useAppContext();

  if (store.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Title>Characters</Title>
      <CardGroup>
        {store?.characters.map((character, index) => {
          const characterDetail = store?.charactersDetails[index];
          return (
            <Card title={character.name} key={character.uid}>
              <p>{`Gender: ${characterDetail.gender}`}</p>
              <p>{`Hair Color: ${characterDetail.hair_color}`}</p>
              <p>{`Eye Color: ${characterDetail.eye_color}`}</p>
            </Card>
          );
        })}
      </CardGroup>
      <Title>Planets</Title>
      <CardGroup>
        {store?.planets.map((planet, index) => {
          const planetDetail = store?.planetsDetails[index];
          return (
            <Card title={planet.name} key={planet.uid}>
              <p>{`Population: ${planetDetail.population}`}</p>
              <p>{`Terrain: ${planetDetail.terrain}`}</p>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
};
