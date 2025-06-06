
import { projects } from '../assets/assets'
import { RiLink } from '@remixicon/react'

const Projects = () => {
  return (
    <div className='px-[10%] mt-8'>
      <h2 className='text-2xl font-bold'>My Projects</h2>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {projects.map((item, index) => (
                  <a href={item.link} target="_blank">
                    <div
                      key={index}
                      className="p-4 border border-white/15 rounded-md bg-[#f2f2f20c] shadow-2xl mb-6 sm:mt-0"
                    >
                      <img className="w-full rounded-md" src={item.image} alt="" />
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
  )
}

export default Projects
