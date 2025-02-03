import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/next js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="items-center "
          >
            <img src={skill.img} alt={`Image ${index}`} className="w-24 h-24 " />
            <h2>{skill.name}</h2>
          </div>
        ))}
      </motion.div>
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
