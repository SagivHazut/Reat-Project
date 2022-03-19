import React from "react";
import headerlogo from "../../assets/pexels-bekka-mongeau-1452717.jpg";
import "./HomePage.css";
import DogOne from "../../assets/pexels-alexandru-rotariu-733416.jpg";
import DogTwo from "../../assets/pexels-hoy-1390784.jpg";
import DogTree from "../../assets/pexels-ilargian-faus-1629781.jpg";
import DogFour from "../../assets/pexels-pixabay-46505.jpg";
import dog1 from "../../assets/dog1.jpg";
import dog2 from "../../assets/dog2.jpg";
import dog3 from "../../assets/dog3.jpg";
import dog4 from "../../assets/dog4.jpg";
import logo from "../../assets/dogwithhuman.jpg";

const HomePage = () => {
  return (
    <div className="header">
      <img src={headerlogo} alt="" />
      <br />
      <hr />
      <br />
      <h1>Services</h1>
      <br />
      <div className="container">
        <br />
        <div className="gallery">
          <img src={DogOne} alt="" />
          <h4>Meals</h4>
          <p>
            We follow a proper meal prepared by our food for your pet during his
            stay with us.
          </p>
        </div>
        <div className="gallery">
          <img src={DogTwo} alt="" />
          <h4>Exotic Pet Medicine</h4>
          <p>
            Vast experience with exotics like rabbits, guinea pigs, birds and
            lizards.we perform surgeries also.
          </p>
        </div>
        <div className="gallery">
          <img src={DogTree} alt="" />
          <h4>Advanced Dental Care</h4>
          <p>
            We make sure that your pet have a healthy teeth and polish to
            improve quality of life of pet.
          </p>
        </div>
        <div className="gallery">
          <img src={DogFour} alt="" />
          <h4>Pampering</h4>
          <p>
            We offer your pet a clean, healthy, hygienic and loving environment
            to stay, while he is away from you.
          </p>
        </div>
      </div>
      <div className="aboutus">
        <hr />
        <div className="logo">
          <div className="paragraph">
            <h2>About Us</h2>
            <p>
              A home, away from home for all kind of pets. We, Homely Pet Care
              Takers, situated at Malad West, Mumbai, Maharashtrea, welcome your
              family member into our loving environment and wee promise to
              shower him with all the love. affection and attention that we have
              to offer. We have the best facilities your pet could have. Right
              from their food to playground, to spa & shower treatments, we
              handle everything and give your pet a comfortable and a luxury
              stay.
            </p>
          </div>
          <img src={logo} alt="" />
        </div>
      </div>
      <hr />
      <div className="photos">
        <h1>Gallery</h1>
        <img src={dog1} alt="" />
        <img src={dog2} alt="" />
        <img src={dog3} alt="" />
        <img src={dog4} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
