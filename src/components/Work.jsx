import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-28 md:mt-0">
        <div className="sm:pb-8 my-10 sm:my-0">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl tracking-wider text-white font bold ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
