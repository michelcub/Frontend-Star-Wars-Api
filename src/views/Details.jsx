import { useParams } from "react-router";
import useAppContext from "../context/AppContext";

import DetailsFile from "../components/Details";

export const Details = () => {
  const params = useParams();
  console.log(params.id)
  const { actions, store} = useAppContext();
  const data = store.allDetailData
  let details = null;
  data?.forEach(item => {
    item.name === params.id? details = item:null
  })
  console.log(details)
  return (
    <DetailsFile details = {details}>
      <p>Prueba</p>
    </DetailsFile>
  );
};
