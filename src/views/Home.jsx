import Title from "../components/Title";
import CardGroup from "../components/CardGroup";
import { Card } from "../components/Card";
import useAppContext from "../context/AppContext";

export const Home = () => {
  const { store, actions } = useAppContext();

  if (store.loading) {
    return <h1>Loading...</h1>;
  }
  console.log(store?.characters)
  return (
    <>
      <Title>Characters</Title>
      <CardGroup>
        {store?.characters.map((character) => {
         return(<Card title={character.name} key={character.uid}></Card>) ;
        })}
      </CardGroup>
      <Title>Planets</Title>
      <CardGroup>
        <CardGroup>
          <Card title={"Hola"} id={1}>
            <p>Probando</p>
          </Card>
          <Card title={"Hola"} id={1}>
            <p>Probando</p>
          </Card>
          <Card title={"Hola"} id={1}>
            <p>Probando</p>
          </Card>
          <Card title={"Hola"} id={1}>
            <p>Probando</p>
          </Card>
          <Card title={"Hola"} id={1}>
            <p>Probando</p>
          </Card>
        </CardGroup>
      </CardGroup>
    </>
  );
};
