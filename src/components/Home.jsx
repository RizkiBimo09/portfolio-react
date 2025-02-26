import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rizki Bimo Wijaya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Fullstack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm thrilled to connect with you and discuss various fascinating
          topics, such as technology, software development, and more. Let's
          share ideas, learn together, and build valuable connections! I look
          forward to hearing from you soon.
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
    </div>
  )
}

export default Home
