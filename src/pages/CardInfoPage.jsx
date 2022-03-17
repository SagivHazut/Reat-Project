import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const CardInfoPage = () => {
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    axios
      .get("/cards/card/" + id)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
  return <h1>card info page</h1>;
};
export default CardInfoPage;
