import React from 'react'
import alldata from '../data'
import { GiReactor } from 'react-icons/gi'
import { AiFillApi } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiPhp, SiWebpack } from 'react-icons/si'

function Skills() {

  const handleIcons = (data) => {
    const skill = data.ico

    console.log(data.title);
    if (skill === 'HTML') {
      return <SiWebpack />
    } else if (skill === 'React') {
      return <FaReact />
    } else if (skill === 'API') {
      return <AiFillApi />
    } else if (skill === 'DB') {
      return <SiMongodb />
    } else if (skill === 'Node') {
      return <FaNodeJs />
    } else if (skill === 'PHP') {
      return <SiPhp />
    } else {
      return <GiReactor />
    }
  }
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="col-12 col-lg-10">
          <h2>My Skills</h2>
          <p>As a problem solver I build fullstack web applications using technology like HTML, CSS, JavaScript, React JS and MongoDB. I have highlighted some of the key technical skills that I will bring to your project.</p>
        </div>
        <div className="col-lg-12 d-lg-flex flex-lg-wrap justify-content-lg-space">
          {alldata.skills.map(data => {
            return (
              <>
                <div key={data.id} className="col-12 col-lg-3 text-center skill-card">
                  {handleIcons(data)}
                  <h4>{data.title}</h4>
                  <p>{data.text}</p>
                </div>
              </>
            )
          })}


        </div>
      </div>
    </section>
  )
}

export default Skills
