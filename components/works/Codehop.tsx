import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Codehop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Software Engineer Intern
        <span className="text-textGreen tracking-wide">@Codehop Interfusion</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2023 - March 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrated proficiency in Backend development(Java) through contributions to two key projects: SMSuite and InternLink.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked with a variety of different languages, platforms, frameworks.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default Codehop;
