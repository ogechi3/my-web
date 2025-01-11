
import { FaGithub, FaLinkedin, FaLongArrowAltUp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#094B72] p-5 flex justify-between mb-5" id="footer">
      <h1 className="font-bold font-playfair ">
        {" "}
        <span className="border border[ #094B72] rounded-[30px] p-2 bg-[#094B72] text-white">
          J
        </span>{" "}
      </h1>

      <div className="flex gap-4 text-[2rem] mb-5 text-white text-xl">
        <a href="https://twitter.com/thomassjenny" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://github.com/Ogechi3" target="_blank">
          <FaGithub />
        </a>{" "}
        <a href="https://www.linkedin.com/in/jennifer-thomas13" target="_blank">
          <FaLinkedin />
        </a>{" "}
      </div>
      <div className="text-white ">
        <a href="#home" className="flex">
          Back to top{" "}
          <span>
            <FaLongArrowAltUp />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
