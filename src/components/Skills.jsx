import React from "react";

import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import JavaScriptImg from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NodeJsImg from "../assets/node.png";
import TailwindImg from "../assets/tailwind.png";
import PHPImg from "../assets/php.png";
import LaravelImg from "../assets/laravel.png";
import PythonImg from "../assets/python.png";
import BootstrapImg from "../assets/bootstrap.png";
import VuejsImg from "../assets/vuejs.png";
import MySQLImg from "../assets/mysql.png";
import JiraImg from "../assets/jira.png";
import FigmaImg from "../assets/figma.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300 my-8 sm:my-0">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={HTMLImg} alt="HTML icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">HTML</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={CSSImg} alt="HTML icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">CSS</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={JavaScriptImg} alt="JavaScript icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">JAVASCRIPT</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={PythonImg} alt="Python icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">PYTHON</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={PHPImg} alt="PHP icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">PHP</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={TailwindImg} alt="Tailwind icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">TAILWIND</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={ReactImg} alt="React icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">REACT</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={VuejsImg} alt="VueJs icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">VUE JS</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={NodeJsImg} alt="NodeJs icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">NODE JS</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={BootstrapImg} alt="Bootstrap icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">BOOTSTRAP</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={LaravelImg} alt="Laravel icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">Laravel</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={MySQLImg} alt="MySQL icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">MYSQL</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={JiraImg} alt="Jira icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">JIRA</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src={FigmaImg} alt="Figma icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">FIGMA</p>
          </div>
          <div className="h-[140px] flex flex-col items-center justify-between py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 object-contain mx-auto" src="https://voyager.postman.com/logo/postman-logo-orange-stacked.svg" alt="Postman icon" />
            <p className="h-6 flex items-center justify-center text-sm sm:text-base">POSTMAN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
