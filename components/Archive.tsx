import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Spring Boot Security"
          des=" This project is related to spring boot security with JWT (JSON WEB TOKEN) .
In this project we will see how to configure InMemory user and JWT authentication using latest Spring Boot version 3.2."
          listItem={["Spring Security", "Spring Boot", "Java"]}
          link="https://github.com/pratik1507/Spring-Boot-Security-JWT"
        />
        <ArchiveCard
          title="Event Management System"
          des=" This project is a dynamic Event Management System for college events, handling event registration and showcasing events in real-time during the registration process."
          listItem={["Spring Boot", "Java", "JPA"]}
          link="https://github.com/pratik1507/Event_Management_System"
        />
        <ArchiveCard
          title="Captcha Creation"
          des=" In this project I have created random captcha image which will take capital alphabets , lower alphabets and numbers in random order to create captcha in the form of image ."
          listItem={["Java", "Spring Boot", "MySQL"]}
          link="https://github.com/pratik1507/captcha_creation"
        />
        

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Email Notification"
                des=" This project is an Email Notification system which takes the email from which we want to sent and to whom we want to send also it takes two more parameters subject and email text ."
                listItem={["Spring Boot", "Java", "Java Mail Sender"]}
                link="https://github.com/pratik1507/EmailNotification"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Pagination"
                des=" In this project I have created page navigation buttons at the end of the page and customized the page size ."
                listItem={["Java", "Java", "HTML/CSS"]}
                link="https://github.com/pratik1507/pagination"
              />
            </motion.div>
            
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
