import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { FaCode } from 'react-icons/fa'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex justify-center items-center h-full">

        {/* Text */}
        <div className="flex-1">
          <p className="text-pink-600">Hi, my name is</p>

          <h1 className="text-3xl sm:text-6xl font-bold text-[#ccd6f6]">
            Rizki Bimo Wijaya
          </h1>

          <h2 className="text-1xl sm:text-3xl font-bold text-[#8892b0]">
            Software Developer || Manual Quality Assurance (Software Tester).
          </h2>

          <p className="text-[#ffff] py-4 max-w-[700px]">
          I'm a Software Developer and Manual Quality Assurance enthusiast passionate
          about building reliable software and ensuring a great user experience.
          I enjoy developing, testing, solving problems, and continuously learning new
          technologies. Let's connect, share ideas, and build something meaningful together.
          </p>

          <div>
            <Link
              type="button"
              to="work"
              smooth={true}
              duration={500}
              className="inline-flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600"
            >
              View Work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Animated Icon - Desktop Only */}
        <div className="hidden md:flex w-[250px] justify-center items-center">
          <FaCode
            size={180}
            className="text-pink-600 animate-bounce"
          />
        </div>

      </div>
    </div>
  )
}

export default Home
