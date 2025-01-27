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
              I am a fresh graduate in Informatics Engineering from Politeknik
              Harapan Bersama with experience in full-stack development using
              modern frameworks like Bootstrap, Tailwind CSS, Vue.js, Laravel,
              Flask, and Flutter. Skilled in building AI-based web and mobile
              applications with responsive UI/UX designs. Proven leadership and
              teamwork abilities, including leading projects that improved data
              management efficiency by 30%. Highly motivated to contribute to
              innovative technology-driven teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
