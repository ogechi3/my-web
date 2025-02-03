
import myImage from "../assets/home.jpg";
import {  FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section
        className=" text-2xl mx-10 md:mx-[100px] my-10"
        id="home"
      >
        <div className=" md:py-11 md:flex md:justify-between md:items-center">
          <div>
          <p className="py-6">
            <span>👋</span>Hello,i'm
          </p>
          <h1 className="md:text-[5rem] text-[3rem] leading-[60px] text-2xl my-5 font-playfair">
            Thomas Jennifer
          </h1>
          <p className="md:text-[2rem] py-5 ">Front-end Developer.</p>
          <div className="flex gap-6 md:mb-10 mb-5 text-xl">
            <a href="mailto:thomassjennifer13@gmail.com">
              <Button name="Let's Talk" />
            </a>

            <a href="#project">
              <Button name="My Work" />
            </a>
          </div>

          <div className="flex gap-4 text-[2rem] md:mb-5 mb-10  ">
            <a href="https://twitter.com/thomassjenny">
              <FaTwitter />
            </a>
            <a href="https://github.com/Ogechi3">
              <FaGithub />
            </a>{" "}
            <a href="https://www.linkedin.com/in/jennifer-thomas13">
              <FaLinkedin />
            </a>{" "}
          </div>
        </div>
        
        <div>
          <img src={myImage} alt="coders Image" className="rounded w-[400px] "  />
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
