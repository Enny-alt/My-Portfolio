import {
  RiGitRepositoryLine,
  RiLink,
  RiLinkedinLine,
  RiServiceLine,
  RiToolsFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Among_Us from "../assets/Among_Us.webp";
import { backend, frameworks, projects } from "../assets/assets";
import lagos from "../assets/Lagos.jpeg";
import skydive from "../assets/Sky-diving.jpeg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col mb-6 lg:grid grid-cols-7 grid-rows-2 gap-4 px-6 lg:px-16">
      <div className="flex flex-col items-center justify-center p-6 col-span-5 custom-shadow rounded-lg">
        <img src={Among_Us} className="w-30 rounded-full" alt="" />
        <p className="mt-4 text-white/30 flex">
          Collaboration <RiServiceLine />
        </p>
        <p className="text-xl text-center font-semibold mt-2">
          I am a frontend web developer, looking to collaborate <br /> with
          other Tech Enthusiasts.
        </p>
        <p className="text-sm text-center mt-4">
          Hi, I’m Enny, a passionate and detail-oriented frontend developer with
          a strong foundation in HTML, CSS, JavaScript, and modern frameworks. I
          thrive in collaborative environments and enjoy turning design ideas
          into seamless, responsive user interfaces. With a commitment to clean
          code, effective communication, and continuous learning, I’m excited to
          bring my skills to a dynamic team and contribute to real-world
          projects.
        </p>
      </div>
      <div className="custom-shadow col-span-2 rounded-lg p-6">
        <div>
          <h2 className="font-playfair text-center text-xl leading-6 sm:text-[1.5rem]  flex  text-balance italic bg-gradient-to-b from-white to-pink-300 bg-clip-text text-transparent font-extrabold">
            Passionate about cutting-edge technologies
          </h2>
        </div>
        <div className="overflow-hidden flex mt-12">
          <div className="flex gap-8 text-nowrap mt-8 animate-infinite-scroll">
            {[...frameworks, ...frameworks].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center border border-white/40 px-6 py-[2px] rounded-md bg-neutral-900"
              >
                <img src={item.image} className="w-6 mr-2" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden flex">
          <div className="flex gap-8 text-nowrap mt-8 animate-2">
            {[...backend, ...backend].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center border border-white/40 px-6 py-[2px] rounded-md bg-neutral-900"
              >
                <img className="w-6 mr-2" src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="custom-shadow col-span-7 rounded-lg p-6 overflow-hidden"
      >
        <p className="text-center text-3xl text-transparent text-colorfull font-playfair italic font-bold">
          Featured Projects
        </p>
        <div className="lg:flex items-center gap-4 mt-6">
          {projects.map((item, index) => (
            <a href={item.link} target="_blank">
              <div
                key={index}
                className="p-4 border border-white/15 rounded-md bg-[#f2f2f20c] shadow-2xl mb-6 sm:mt-0"
              >
                <img className="rounded-md" src={item.image} alt="" />
                <p className="flex items-center text-xl font-bold my-4">
                  {item.name}
                  <RiLink />
                </p>
                <p className="text-sm">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="md:flex justify-center align-center col-span-7 p-3 gap-20">
        <Link to={"/links"}>
          <div className="custom-shadow bg-neutral-900 text-colorfull border border-white/40 px-3 py-3 my-8 rounded-md flex gap-4">
            <div>
              <RiLink className="fill-white"/>
            </div>
            <div className="text-nowrap cursor-pointer">
            
              <p className="text-sm">All My Social Media Links</p>
            </div>
          </div>
        </Link>
      {/* <a href="https://medium.com/@davidyvng13" target="_blank">
        <div className="custom-shadow bg-neutral-900 border border-white/40 px-3 py-3 my-8 rounded-md flex gap-4">
          <div>
            <RiGitRepositoryLine />
          </div>
          <div className="text-nowrap cursor-pointer">
            <p className="text-sm">My blog posts</p>
          </div>
        </div>
      </a> */}

        <a href="https://www.youtube.com/@Enny_alt" target="_blank">
          <div className="custom-shadow bg-white border border-white/40 px-3 py-3 my-8 rounded-md flex gap-4">
            <div>
              <RiYoutubeFill className="text-red-500"/>
            </div>
            <div className="text-nowrap cursor-pointer">

              <p className="text-sm text-black">My Youtube Channel</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
