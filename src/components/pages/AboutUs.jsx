import React from "react";
import Button from "./Button";

const AboutUs = () => {
  return (
    <div className=" bg-white  sudip py-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2   container  justify-between  py-6 px-auto   ">
        {/* Section 1 */}
        <div className=" flex flex-col  gap-10 w-full ">
          <div>
            <div className="w-30  bg-gray-300  mb-6 ">
              <div className="w-8  border-[1.5px]  border-cyan-600  "></div>
            </div>
            <h1 className="text-2xl sm:text-2xl font-medium text-gray-800 mb-1">
              Our
            </h1>
            <h2 className="text-2xl sm:text-2xl font-medium text-cyan-600">
              History
            </h2>
          </div>
          <p className="text-gray-700 text-base ">
            A hearty welcome to{" "}
            <strong>
              NAKARMI SEWING MACHINE <em>("Sew Your Passion")</em>.
            </strong>{" "}
            Our journey started with late Mr. Dhan Bahadur Nakarmi almost 90
            years ago. He's fond of repairing domestic sewing machines
            accelerated the keen interest of making an enterprise, which was
            eventually passed on to his son, late Mr. Ganesh Lal Nakarmi. In the
            mornings and evenings prior to his regular job, his ample time was
            given to repairing small domestic sewing machines. By which, in
            1960, our first retail store was opened at Bhedasingh, Kathmandu,
            Nepal.
          </p>

          <p className="text-gray-700 text-base ">
            NAKARMI SEWING MACHINE is a family business, passed down from one
            generation to another. Currently, we are operating at three stores
            in Tebahal, Kathmandu Nepal.{" "}
            <strong>We are Sole Authorized Dealer</strong> for renowned brands
            <strong>
              like NAKARMI, FINGTEX, USHA, MONA, UNIQUE, AND SUNSIR
            </strong>{" "}
            all over Nepal. It has been more than{" "}
            <strong>
              <em>45 years</em>
            </strong>{" "}
            of sustaining authorized dealers for USHA AND MONA sewing machines,
            more than{" "}
            <strong>
              <em>25 years</em>
            </strong>{" "}
            for the NAKARMI sewing machine, and about{" "}
            <strong>
              <em>5 years</em>
            </strong>{" "}
            for UNIQUE AND SUNSIR industrial sewing machines.
          </p>
          <p className="text-gray-700 text-base ">
            It is our privilege to provide our customers with the best quality
            sewing machines from domestic, household/designers to industrial
            level sewing machines. Apart from sewing machines, we also sell all
            kinds of interrelated products like steam irons, scissors, threads,
            spare parts, etc. Our products have also reached to different
            provinces of Nepal for sewing training, tailors, and for
            establishing garments.
          </p>
          <p className="text-gray-700 text-base ">
            As our slogan states,
            <strong>
              {" "}
              <em>“Sew Your Passion,”</em>{" "}
            </strong>
            we believe in meeting our customers’ demand by providing the right
            machines to create their passion in the sewing industry. Our main
            motive is to walk hand in hand and build a better relationship with
            our customers who have a dream in building an empire in the
            tailor/fashion industry. Our utmost desire is to bring the latest
            technologies in the sewing machine industry in Nepal. We hope to be
            your best help in anyways.
          </p>
        </div>

        {/* Section 2 */}
        <div className="relative  flex  justify-center ">
          <div className=" flex flex-col justify-between items-center h-[500px]  sm:h-[600px]">
            <img
              src="src/components/images/2people_IMG_1014-2-scaled.jpg"
              alt="store"
              className=" h-[250px] object-cover rounded-xl shadow-lg border-8 border-gray-200"
            />
            <img
              src="src/components/images/showitem_IMG_9302-scaled.jpg"
              alt="industrial"
              className="  h-[250px]  object-cover rounded-xl shadow-lg border-8 border-gray-200 "
            />
            <img
              src="src/components/images/single_5117-2-scaled.jpg"
              alt="tech"
              className=" h-[250px] object-cover rounded-xl shadow-lg border-8 border-gray-200 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
