import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">

      {/* Logo */}
      <div className="group cursor-pointer">
        <p className="text-xl font-bold text-[#ccd6f6] transition duration-300 group-hover:text-pink-600">
          RBW
        </p>
        <div className="w-0 h-[2px] bg-pink-600 transition-all duration-300 group-hover:w-full"></div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex items-center gap-2">
    {["home", "about", "skills", "work", "contact"].map((item) => (
      <li key={item} className="relative group">
        <Link
          to={item}
          smooth={true}
          duration={500}
          className="block px-4 py-2 capitalize cursor-pointer transition duration-300
          hover:text-pink-600"
        >
          {item}
        </Link>

        {/* Hover underline */}
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-pink-600
          transition-all duration-300 -translate-x-1/2 group-hover:w-2/3">
        </span>
      </li>
    ))}
  </ul>

      {/* Hamburger */}
      <div
          onClick={handleClick}
          className="z-50 md:hidden cursor-pointer text-2xl text-[#ccd6f6]
          hover:text-pink-600 transition duration-300"
        >
          {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
      className={`
        md:hidden absolute top-0 left-0 w-full h-screen
        bg-[#0a192f]/95 backdrop-blur-lg
        flex flex-col justify-center items-center
        transition-all duration-500
        ${nav ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      {["home", "about", "skills", "work", "contact"].map((item) => (
        <li
          key={item}
          className="my-4 text-4xl font-semibold
          transition duration-300 hover:text-pink-600 hover:scale-110"
        >
          <Link
            onClick={handleClick}
            to={item}
            smooth={true}
            duration={500}
            className="capitalize cursor-pointer"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

      {/* Social icons */}
{/* DESKTOP - JANGAN DIUBAH */}
<div className="hidden lg:flex lg:top-[35%] lg:left-0 lg:bottom-auto fixed flex-col">
  <ul>
    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
      <a
        className="flex items-center justify-between w-full text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rizki-bimo-wijaya/"
      >
        Linkedin <FaLinkedin size={30} />
      </a>
    </li>

    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full text-gray-300"
        href="https://github.com/RizkiBimo09"
      >
        Github <FaGithub size={30} />
      </a>
    </li>

    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full text-gray-300"
        href="mailto:rizkibimo09@gmail.com"
      >
        Email <HiOutlineMail size={30} />
      </a>
    </li>

    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full text-gray-300"
        href="https://drive.google.com/file/d/1AwfW72hJPpauS4mmINaCv-4mL6RRae1p/view?usp=sharing"
      >
        Resume <BsFillPersonLinesFill size={30} />
      </a>
    </li>
  </ul>
</div>

{/* MOBILE */}
<div className="fixed z-40 bottom-4 left-1/2 -translate-x-1/2 flex lg:hidden">
  <ul className="flex items-center gap-2">
    {/* LinkedIn */}
    <li
      className="
        w-[50px] h-[50px]
        flex items-center justify-center
        bg-blue-600 rounded-lg
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-xl
      "
    >
      <a
        className="flex items-center justify-center w-full h-full text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rizki-bimo-wijaya/"
      >
        <FaLinkedin
          size={25}
          className="transition-transform duration-300 hover:scale-110"
        />
      </a>
    </li>

    {/* Github */}
    <li
      className="
        w-[50px] h-[50px]
        flex items-center justify-center
        bg-[#333333] rounded-lg
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-xl
      "
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full text-gray-300"
        href="https://github.com/RizkiBimo09"
      >
        <FaGithub
          size={25}
          className="transition-transform duration-300 hover:scale-110"
        />
      </a>
    </li>

    {/* Email */}
    <li
      className="
        w-[50px] h-[50px]
        flex items-center justify-center
        bg-[#6fc2b0] rounded-lg
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-xl
      "
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full text-gray-300"
        href="mailto:rizkibimo09@gmail.com"
      >
        <HiOutlineMail
          size={25}
          className="transition-transform duration-300 hover:scale-110"
        />
      </a>
    </li>

    {/* Resume */}
    <li
      className="
        w-[50px] h-[50px]
        flex items-center justify-center
        bg-[#565f69] rounded-lg
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-xl
      "
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full text-gray-300"
        href="https://drive.google.com/file/d/1AwfW72hJPpauS4mmINaCv-4mL6RRae1p/view?usp=sharing"
      >
        <BsFillPersonLinesFill
          size={25}
          className="transition-transform duration-300 hover:scale-110"
        />
      </a>
    </li>
  </ul>
</div>
    </div>
  );
};

export default Navbar;
