import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const hideMenu = () =>{
    setToggleMenu(false)
  }


  return (
    <>
      <nav className="py-5 px-5   text-2xl  md:justify-between flex   bg-[#094B72] z-10 ">
        <div className="float-start">
          <h1 className="font-bold text-white font-playfair">
            {" "}
            <span className="border border[ #094B72] rounded-[30px] p-2   ">
              J
            </span>{" "}
            <em>JENNIFER</em>
          </h1>
        </div>

        <div>
          <button
            onClick={showMenu}
            className="absolute top-0 right-0 z-20 px-5 my-5 text-white cursor-pointer md:hidden"
          >
            {toggleMenu ? <MdClose /> : <GiHamburgerMenu />}
          </button>

          <ul
            className={`absolute  md:flex md:items-center md:pb-0 md:static md:z-auto my-8 md:my-0 right-0 top-0 transition-all duration-500 ease-in font-light text-white bg-[#094B72] w-[50%] z-10 items-center p-5 ${
              toggleMenu ? "right-0" : "left-[-490px]"
            }`}
          >
            {links.map((item) => (
              <li className="md:my-0 my-7 md:ml-12 " onClick={hideMenu}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
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
