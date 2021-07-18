import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id="11111"
            title="Sony X90J 75 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility"
            price={2998}
            image="https://m.media-amazon.com/images/I/91KZbi-CbzL._AC_SX352_SY330_.jpg"
            rating={5}
          />

          <Product
            id="11112"
            title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
            price={279.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SY355_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="11113"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="11114"
            title="Nilos Glass Vases Set of 10, Clear Vintage Glass Flower Vase with Rope Design Home Decoration"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81aarywz98L._AC_SX522_.jpg"
            rating={2}
          />
          <Product
            id="11115"
            title="D31.5inch Remote Dimming Chandelier Living Room Modern K9 Crystal Chandelier"
            price={3051.99}
            image="https://m.media-amazon.com/images/I/71AKUuDMLRS._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="11116"
            title="Sony PS5 Playstation 5 Console Disc Version - Wireless Controller"
            price={599.59}
            image="https://images-na.ssl-images-amazon.com/images/I/51a4AihA6MS._SX522_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
