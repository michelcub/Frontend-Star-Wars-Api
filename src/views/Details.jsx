import { useParams } from "react-router";
import useAppContext from "../context/AppContext";

import DetailsFile from "../components/Details";

export const Details = () => {
  const params = useParams();
  const { store, actions } = useAppContext;

  return (
    <DetailsFile>
      <p>Prueba</p>
    </DetailsFile>
  );
};
