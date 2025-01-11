import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <nav className="py-5 px-2  text-2xl  md:justify-between md:flex md:py-5 md:px-5 bg-[#094B72] z-10 ">
        <div>
          <h1 className="font-bold font-playfair text-white">
            {" "}
            <span className="border border[ #094B72] rounded-[30px] p-2  ">
              J
            </span>{" "}
            <em>JENNIFER</em>
          </h1>
        </div>

        <button
          onClick={showMenu}
          className="absolute top-0 my-5 cursor-pointer right-8 md:hidden text-white z-20"
        >
          {toggleMenu ? <MdClose /> : <GiHamburgerMenu />}
        </button>

        <ul
          className={`absolute  md:flex md:items-center md:pb-0 md:static md:z-auto  right-0 top-0 transition-all duration-500 ease-in font-light text-white bg-[#094B72] w-[50%] z-10 items-center ${
            toggleMenu ? "right-0" : "left-[-490px]"
          }`}
        >
          {links.map((item) => (
            <li className="md:my-0 my-7 md:ml-12 ">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

interface LINKS{
  name:string
  link:string
}

let links:LINKS[] = [
  
{ name: "Home", link: "#home" },
{ name: "Projects", link: "#project" },
{ name: "About", link: "#about" },
{ name: "Contact", link: "#contact" },

 
];

export default Navbar;
