import React from 'react'
import alldata from '../data'
import { GiReactor } from 'react-icons/gi'
import { AiFillApi } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiPhp, SiWebpack } from 'react-icons/si'

function Skills() {

  const handleIcons = (data) => {
    const skill = data.ico

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
      <div className="container-fluid">
        <div className="col-12">
          <h2>My Skills</h2>
          <p className="para">As a problem solver I build fullstack web applications using technology like HTML, CSS, JavaScript, React JS and MongoDB. I have highlighted some of the key technical skills that I will bring to your project.</p>
        </div>
        <div className="col-lg-12 d-lg-flex flex-sm-wrap justify-content-center">
          {alldata.skills.map(data => {
            return (
              <>
                <div key={data.id} className="text-center skill-card">
                  <h4 key={data.title}>{data.title}</h4>
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
