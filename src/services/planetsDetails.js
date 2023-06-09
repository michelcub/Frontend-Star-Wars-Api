const getPlanetsDetails = async (planetID, setPlanetDetails) => {
  const response = await fetch(
    `https://www.swapi.tech/api/planets/${planetID}`
  );
  const data = await response.json();
  const planet = await data.result.properties;
  setPlanetDetails((prevDetails) => [...prevDetails, planet]);
};

export default getPlanetsDetails;
