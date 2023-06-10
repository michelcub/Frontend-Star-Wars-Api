import { useParams } from "react-router";
import useAppContext from "../context/AppContext";

import Details from "../components/Details";

export const DetailsView = () => {
  const params = useParams();
  console.log(params.id);
  const { actions, store } = useAppContext();

  const data = store.allDetailData;
  let details = null;
  data?.forEach((item) => {
    item.name === params.id ? (details = item) : null;
  });
  console.log(details);

  return (
    <Details details={details}>
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
    </Details>
  );
};
