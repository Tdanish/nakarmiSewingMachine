import React from "react";
import WelcomeSection from "./WelcomeSection";
import Card from "../../SingleComponent/Card";
import accessories from "../images/accessories.jpg";
import nakarmi50 from "../images/NAKARMI-50.png";
import nakarmi28 from "../images/28.jpg";
import nakarmi52 from "../images/52.jpg";
import nakarmi43 from "../images/43.jpg";

import nakarmi54 from "../images/industrialMachine.jpg";
import Button from "./Button";
import BrandCard from "../../SingleComponent/BrandCard";

const Home = () => {
  return (
    <>
      <WelcomeSection />;
      <div className="grid  grid-wrap m-auto justify-between w-max gap-5 mb-5 lg:grid-cols-3 md:grid-cols-2 sm:grid">
        <Card
          image={accessories}
          name="accossories"
          to="./product-catagory/accessories"
        />
        <Card
          image={nakarmi43}
          name="CUTTING MACHINE"
          to="./product-catagory/cutting-machine"
        />
        <Card
          image={nakarmi28}
          name="DOMESTIC SEWING MACHINEs"
          to="./product-catagory/domestic-sewing-machine"
        />

        <Card
          image={nakarmi50}
          name="HOUSEHOLD/DESINER SEWING MACHINE "
          to="./product-catagory/household-designer-sewing-machine"
        />
        <Card
          image={nakarmi54}
          name="INDUSTRIAL MACHINES"
          to="./product-catagory/industrial-machine"
        />
        <Card image={nakarmi52} name="IRON" to="./product-catagory/iron" />
      </div>
      <Button to="https://google.com" name="google" external />
      <BrandCard />
    </>
  );
};

export default Home;
