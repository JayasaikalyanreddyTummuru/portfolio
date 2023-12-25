import React from 'react'
import contra from "../assets/portfolio/contracode.png";
import network from "../assets/portfolio/network.jpeg";
import soccer from "../assets/portfolio/soccer.jpg";
import social from "../assets/portfolio/social.jpeg";

const Portfolio = () => {

    const project = [
        {
          id: 1,
          src: soccer,
          title: "Soccer Tournament Website"
        },
        {
          id: 2,
          src: social,
          title: "PostStash"
        },
        {
          id: 3,
          src: network,
          title: "Network Intrusion Detection System"
        },
        {
          id: 4,
          src: contra,
          title: "Contra Code"
        }    
      ];
  return (
    <div
        name="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Projects
                </p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {project.map(({ id, src,title }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            {title}
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
