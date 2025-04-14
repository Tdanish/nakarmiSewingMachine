import React from "react";
import Button from "./Button";

const WelcomeSection = () => {
  return (
    <div className=" bg-white flex items-center justify-center p-6 md:p-10 mb-10px">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 w-full max-w-7xl ">
        {/* Section 1 */}
        <div className=" flex flex-col px-4 gap-6  h-full">
          <div>
            <hr className="w-36 sm:w-32 border-t-4 border-cyan-500 mb-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">
              Welcome To
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-600">
              Nakarmi Sewing Machine
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

          <Button name="Read More" to="./home" />
        </div>

        {/* Section 2 */}
        <div className="relative  flex items-center justify-center  h-full">
          <div className="relative w-full max-w-lg h-[500px]  sm:h-[600px]">
            <img
              src="src/components/images/11zon_IMG_6147-scaled.jpg"
              alt="store"
              className="absolute top-0 left-[-40px] w-[280px] sm:w-[340px] h-[180px] sm:h-[230px] object-cover rounded-xl shadow-lg border-8 border-gray-200 z-30"
            />
            <img
              src="src/components/images/SK801_11zon-scaled.jpg"
              alt="industrial"
              className="absolute top-[60px] sm:top-[110px] left-[140px] sm:left-[160px] w-[280px] sm:w-[340px] h-[180px] sm:h-[330px] object-cover rounded-xl shadow-lg border-8 border-gray-200 z-20"
            />
            <img
              src="src/components/images/11zon_IMG_1079-scaled.jpg"
              alt="tech"
              className="absolute top-[180px] sm:top-[230px] left-0 w-[380px] sm:w-[440px] h-[280px] sm:h-[350px] sm:mt-10 object-cover rounded-xl shadow-lg border-8 border-gray-200 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
