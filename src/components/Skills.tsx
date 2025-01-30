import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/next js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-4 m-2 md:grid-cols-4">
      {skills.map((skill) => (
        <div key={skill.name} className=" bg-[#F2F7FF] p-5 rounded-md items-center ">
          <img src={skill.img} alt="techstack image" className="w-24 h-24 " />
          <h2>{skill.name}</h2>
          
        </div>
      ))}
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
    img: react,
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

export default Skills;
