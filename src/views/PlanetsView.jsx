import { useParams } from "react-router";
import useAppContext from "../context/AppContext";

import Planets from "../components/Planets";

export const PlanetsView = () => {
  const params = useParams();
  const { actions, store } = useAppContext();

  let details = store.planetsDetails;
  console.log(details);
  // data?.forEach((item) => {
  //   item.name === params.id ? (details = item) : null;
  // });
  // console.log(details);
  if (store.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Planets details={{ details }}>
      <p>
        Voluptate laborum laborum adipisicing occaecat cupidatat aliqua Lorem
        tempor do nulla. Magna pariatur minim aliqua esse pariatur Lorem
        cupidatat aute amet. Exercitation ipsum eiusmod cupidatat ex cillum duis
        reprehenderit exercitation sit cupidatat ad magna elit laboris. Quis
        nisi laborum ea nulla proident commodo. Cillum officia magna excepteur
        ullamco labore. Magna Lorem enim amet officia. Ea eu incididunt
        excepteur quis ipsum ipsum veniam consequat reprehenderit laborum
        ullamco.
      </p>
    </Planets>
  );
};
