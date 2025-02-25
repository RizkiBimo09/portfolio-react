import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi. I'm Rizki Bimo Wijaya.</p>
          </div>
          <div>
            <p>
            Recent Informatic Engineering graduate with practical experience in developing web and mobile applications using frameworks like Vue.js, Laravel, Bootstrap, Tailwind CSS, Flask, and Flutter. I have led projects integrating AI, robust database management, performance testing, and strong data security measures. Known for analytical and problem-solving skills, I deliver innovative tech solutions that boost efficiency and user experience, and I am eager to contribute my expertise across various industries.
            </p>
          </div><br/>
        </div>
      </div>
    </div>
  )
}

export default About
