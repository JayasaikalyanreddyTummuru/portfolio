import React from 'react'
import dp from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
    name="home"
    className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full mx-8">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have over 3 years of professional experience in designing and developing software. 
            I recently graudated with a Masters in Computer Software Engineering from Arizona State University 
            and am actively looking for full-time Software Engineering opportunities in the US.
          </p>

          <div>
            <Link  to="experience"
              smooth
              duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Experience
              <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1" /></span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={dp}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

      </div>
    </div>
  )
}

export default Home