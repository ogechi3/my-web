import aboutImg from "../assets/about.jpg";
import Button from "./Button";
import Skills from "./Skills";


const About = () => {
  return (
    <div id="about">
      <section>
        <div className="gap-10 p-5 m-10 ju:stify-between md:flex md:flex-col lg:flex-row">
          <img src={aboutImg} alt="my Image" className="rounded-[50%]" />
          <div className="font-[poppins] md:text-2xl md:mt-24">
            <h1 className="p-2 my-3 text-2xl font-bold">About Me</h1>
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
            <div className="flex gap-4 ">
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
        <h1 className="p-2 my-3 text-2xl font-bold text-center">Skill Set</h1>
        <Skills/>

     
      </section>
    </div>
  );
};


export default About;
