import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import typescript from "../assets/typescript.png";
import React from "../assets/react.png";
import nextjs from "../assets/next js.png";
import aboutImg from "../assets/about.jpg";
import tailwind from "../assets/tailwind.png";
import Button from "./Button";


const About = () => {
  return (
    <div id="about">
      <section>
        <div className="gap-10 p-5 m-10 ju:stify-between md:flex md:flex-col lg:flex-row">
          <img src={aboutImg} alt="my Image" className="rounded-[50%]" />
          <div className="font-[poppins] md:text-2xl md:mt-24">
            <h1 className="text-2xl p-2 my-3 font-bold">About Me</h1>
            <p>Front-end Developer</p>
            <p>
              I am a front-end developer with over a year of experience in
              creating user-friendly interfaces and over two years of experience
              in the pharmaceutical industry as a microbiologist. I have worked
              diligently remotely volunteering and interning to hone my tech
              skills. I am a lifelong learner who is dedicated and eager to
              learn new skills, I am looking to collaborate with professionals
              and organization with whom we share the same vision
            </p>
            <div className=" flex gap-4">
              <button className="p-3 text-white transition-all ease-in bg-[#094B72] rounded-[4px] hover:bg-[#e0f2fe] border border-[#094B72] hover:text-black my-5">
                <a href="/resume.pdf" download="resume.pdf">
                  Download CV
                </a>
              </button>
              
              <a href="mailto:thomassjennifer13@gmail.com">
                <Button name="let's Talk" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-2xl p-2 my-3 text-center font-bold">Skill Set</h1>

        <div className="flex justify-evenly gap-4 relative overflow-hidden animate-scroll py-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <img
                src={skill.img}
                alt="techstack image"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

interface SKILL {
  name: string;
  img: string;
}

let skills: SKILL[] = [
  {
    name: "Html",
    img: html,
  },
  {
    name: "Css",
    img: css,
  },
  {
    name: "JavaScript",
    img: javascript,
  },
  {
    name: "TypeScript",
    img: typescript,
  },

  {
    name: "React Js",
    img: React,
  },
  {
    name: "Next Js",
    img: nextjs,
  },
  {
    name: "Tailwind",
    img: tailwind,
  },
];

export default About;
