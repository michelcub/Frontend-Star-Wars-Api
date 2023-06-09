const getCharactersDetails = async (characterID, setCharacterDetails) => {
  const response = await fetch(
    `https://www.swapi.tech/api/people/${characterID}`
  );
  const data = await response.json();
  const character = await data.result.properties;
  setCharacterDetails((prevDetails) => [...prevDetails, character]);
};

export default getCharactersDetails;
