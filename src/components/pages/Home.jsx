import React from "react";
import WelcomeSection from "./WelcomeSection";
import Button from "./Button";
import { machineData } from "../../mock Data/cardData";
import Card from "../SingleComponent/Card";
import BrandCard from "../SingleComponent/BrandCard";

const Home = () => {
  return (
    <>
      <WelcomeSection />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 m-auto sudip  justify-between  gap-9 mb-5 pt-10  ">
        {machineData.map((data, index) => (
          <Card key={index} image={data.image} name={data.name} to={data.to} />
        ))}
      </div>
      {/* <div className="w-7/9 mt-5">
        <div className="w-30  bg-gray-300  ">
          <div className="w-8  border-[1.5px]  border-cyan-600  "></div>
        </div>

        <h1 className="text-2xl sm:text-2xl font-medium text-gray-800 mb-1">
          Our
        </h1>
        <h2 className="text-2xl sm:text-2xl font-medium text-cyan-600">
          History
        </h2>
      </div> */}
      <BrandCard />
    </>
  );
};

export default Home;
