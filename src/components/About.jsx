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
          <div className="lg:text-4xl text-3xl font-bold sm:text-right">
            <p>Hi. I'm Rizki Bimo Wijaya.</p>
          </div>
          <div>
            <p  className="max-w-[700px]">
            Bachelor of Applied Science (D4) graduate in Informatics Engineering with hands-on experience in web and mobile application development through academic and personal projects. Knowledgeable in the Software Development Life Cycle (SDLC), Manual Testing, Functional Testing, Test Case Creation, Bug Reporting, and User Acceptance Testing (UAT). Strong attention to detail, analytical problem-solving, and effective teamwork skills, with a commitment to ensuring software quality and delivering reliable user experiences. Eager to begin a career as a Quality Assurance Engineer or Software Tester.
            </p>
          </div><br/>
        </div>
      </div>
    </div>
  )
}

export default About
