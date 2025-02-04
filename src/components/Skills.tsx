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
    <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex flex-none gap-24 pr-10 max-sm:gap-10"
        animate={{
          x: "-50%",
        }}
        transition={{duration:20, ease: "linear", repeat: Infinity}}
      >
        {Array.from({length: 2}).map((_,i) => (
        skills.map((skill, index) => (
          <div
          key={`${i}-${index}`}
            className="flex flex-col items-center justify-center pr-10"
          >
            <img src={skill.img} alt={`Image ${index}`} className="h-24" />
            <h2>{skill.name}</h2>
          </div>
        ))
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
