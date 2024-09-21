import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hello! My name is Powar Pratik Ravsaheb, and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I completed a course called DTP (Design to Publishing). After that, I wanted to dive deeper into web development, so I started learning programming languages and eventually pursued a degree in Computer Science Engineering (CSE)!
          </p>
          <p>
          I recently completed a 5-month internship as a {" "} <span className="text-textGreen"> 
              Software Engineer Intern
            </span> at {" "} <span className="text-textGreen"> Codehop Interfusion </span>, where I worked with the backend team using the Spring Boot framework.
            
          </p>
          <p><span className="text-textGreen">Here are a few technologies I have been working with recently: </span></p>
          <ul className="max-w-[450px] text-lg font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              
                <AiFillThunderbolt />
              
              <span className="text-textGreen">Core Java</span>
            </li>
            <li className="flex items-center gap-2">
              
                <AiFillThunderbolt />
              <span className="text-textGreen">Java EE</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">React</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">Spring Boot</span>
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">AWS</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">Javascript</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">MySQL</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">JPA</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">Tailwind CSS</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">DSA</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">SQL</span>
              
            </li>
            <li className="flex items-center gap-2">
                <AiFillThunderbolt />
              <span className="text-textGreen">Git</span>
              
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
