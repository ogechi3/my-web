import hpvImage from "../assets/HPV Page.png"
import musicImage from "../assets/music-page.png"
import weatherImage from "../assets/weather-app.png"
import weatherReact from "../assets/weather.react.png"
import Button from './Button'

const Projects = () => {
  return (
    <div id="project">
      <section className="bg-[#F2F7FF] grid md:grid-cols-3 gap-4 ">
        {projects.map((project) => (
          <div className=" bg-white rounded-[10px] m-5  p-5 items-center lg:p-2 ">
            <img
              src={project.image}
              alt=" project image"
              className="w-[30rem]  "
            />
            <div className="items-center">
              <p className="p-5 text-2xl font-bold ">{project.name}</p>
              <p>{project.technologies}</p>
              <div className="flex items-center gap-2 ">
                <a href={project.githubLink} target="_blank">
                  <Button name={project.gitlink} />
                </a>

                <a href={project.DemoLink} target="_blank">
                  <Button name={project.link} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

interface PROJECTS{
    name:string
    image:string
    githubLink:string
    DemoLink:string
    technologies:string
    link:string
    gitlink:string
}


let projects: PROJECTS[] = [
  {
    name: "HPV Projects",
    image: hpvImage,
    githubLink: "https://github.com/ogechi3/landing-page",
    DemoLink: "https://hpv-page.netlify.app/",
    technologies: "Built with Html and Css",
    link: "Demo",
    gitlink: "Github Url",
  },

  {
    name: "Music Page",
    image: musicImage,
    githubLink: "https://github.com/ogechi3/music-page",
    DemoLink: "https://jennys-music-website.netlify.app/",
    technologies: "Built with Html and Css",
    link: "Demo",
    gitlink: "Github Url",
  },

  {
    name: "weather app",
    image: weatherImage,
    githubLink: "https://github.com/ogechi3/Meteo-App",
    DemoLink: "https://nature-guide-app.netlify.app",
    technologies: "Built with Html,Css and JavaScript",
    link: "Demo",
    gitlink: "Github Url",
  },

  {
    name: "weather app react",
    image: weatherReact,
    githubLink: "https://github.com/ogechi3/react-weather-app",
    DemoLink: "https://reaact-app.netlify.app/",
    technologies: "Built with Html, Css, JavaScript and React",
    link: "Demo",
    gitlink: "Github Url",
  },
];
export default Projects
