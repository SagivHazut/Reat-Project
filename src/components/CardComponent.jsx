import axios from "axios";
import { useState, useEffect } from "react";
import BizCard from "./bizCard/BizCard.component";

const originalCardArr = [
  {
    name: "kenny",
    desc: "greolki4390t8j4tijerg",
    phone: "05005050505",
    address: "hartiyun 666, Telaviv",
    id: 5434,
  },
  {
    name: "omer",
    desc: "greolki4390t8j4tijerg",
    phone: "05005050505",
    address: "hartiyun 666, Telaviv",
    id: 75576,
  },
  {
    name: "cartman",
    desc: "greolki4390t8j4tijerg",
    phone: "05005050505",
    address: "hartiyun 666, Telaviv",
    id: 854,
  },
];

const PanelCard = () => {
  const [cardsArr, setCardsArr] = useState([]);
  const [loaded, setLoaded] = useState(false);
  //   let cardsArr = ;
  useEffect(() => {
    setTimeout(() => {
      axios.get("/cards/allCards").then((dataFromServer) => {
        console.log("dataFromServer", dataFromServer);
        setCardsArr(dataFromServer.data);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (cardsArr.length > 0) {
      setLoaded(true);
    }
  }, [cardsArr]);

  const handleDeleteCard = (id) => {
    //! cardsArr = cardsArr.filter((item) => item.id != id); //dont do this, react will not update the ui
    // console.log("new cardsArr", cardsArr);
    let newCardsArr = cardsArr.filter((item) => item._id !== id);
    setCardsArr(newCardsArr);
  };

  const renderCardsArr = (item) => {
    return (
      <BizCard
        key={item._id}
        id={item._id}
        name={item.name}
        desc={item.desc}
        phone={item.phone}
        address={item.address}
        onDeleteCard={handleDeleteCard}
      ></BizCard>
    );
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {!loaded && <h1>Loading...</h1>}
      {cardsArr.map(renderCardsArr)}
    </div>
  );
};

export default PanelCard;
