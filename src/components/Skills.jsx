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
    } else if (skill === 'React'){
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
        <div className="row d-flex">
          <div className="col-lg-4">
            <h2>My Skills</h2>
            <p>Vanilla JavaScript based weather app driven by Openweather API</p>
          </div>
          <div className="col d-lg-flex flex-lg-wrap justify-content-lg-space">
            {alldata.skills.map(data => {
              return(
                <>
                <div key={data.id} className="col-12 col-lg-5 text-center skill-card">
                {handleIcons(data)}
                <h4>{data.title}</h4>
                <p>{data.text}</p>
              </div>
                </>
              )
            })}
            

          </div>

        </div>


      </div>
    </section>
  )
}

export default Skills
