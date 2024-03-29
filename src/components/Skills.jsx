import React from 'react'
import alldata from '../data'

function Skills() {

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="col-12">
          <h2>My Skills</h2>
          <p className="para">As a problem solver I build fullstack web applications using technology like HTML, CSS, JavaScript, React JS and MongoDB. I have highlighted some of the key technical skills that I will bring to your project.</p>
        </div>
        <div className="col-lg-12 grid">
          {alldata.skills.map(data => {
            return (
              <div key={data.id}>
                <div className="text-center skill-card">
                  <h4 key={data.title}>{data.title}</h4>
                </div>
              </div>
            )
          })}


        </div>
      </div>
    </section>
  )
}

export default Skills
