import { useState } from "react";
import SectionTitle from "./SectionTitle";
import AWS from "./works/AWS";
import Codehop from "./works/Codehop";

const Experience = () => {
  const [workCodehop, setWorkCodehop] = useState(true);
  const [workAWS, setWorkAWS] = useState(false);

  const handleCodehop = () => {
    setWorkCodehop(true);
    setWorkAWS(false);
  };

  const handleAWS = () => {
    setWorkCodehop(false);
    setWorkAWS(true);
  };

  
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCodehop}
            className={`${
              workCodehop
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Codehop Interfusion
          </li>
          <li
            onClick={handleAWS}
            className={`${
              workAWS
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            AICTE
          </li>
          
          
        </ul>
        {workCodehop && <Codehop />}
        {workAWS && <AWS />}
        
      </div>
    </section>
  );
};

export default Experience;
