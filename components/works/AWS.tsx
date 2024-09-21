import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const AWS = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Cloud Virtual Internship
        <span className="text-textGreen tracking-wide">@AWS</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2022 - Feb 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The AWS Cloud Virtual Internship was provided by the All India Council of Technical Education with the support of AWS Academy.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During this 10-week of virtual internship, I gained hands-on experience through various projects provided by AWS Academy. These projects helped me learn about AWS services and how to effectively implement them.
        </li>
        
      </ul>
    </motion.div>
  );
};

export default AWS;
