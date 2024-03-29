import React from 'react'
import alldata from '../data'
import gmas from '../assets/gmas.jpg'
import ecom from '../assets/ecom.jpg'
import upf from '../assets/upf.jpg'
import calc_sm from '../assets/calc_sm.png'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

function Projects() {

    const handleImg = (data) => {
        if (data.pic === 'gmas') {
            return gmas
        } else if (data.pic === 'upf') {
            return upf
        } else if (data.pic === 'ecom') {
            return ecom
        } else {
            return calc_sm
        }
    }

    return (
        <section id="projects" className="projects d-flex align-items-center brdr-bottom brdr-bottom">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="row row-cols-1 row-cols-lg-3">
                    {alldata.projects.map((data) => (
                        <div  key={data.id}>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src={handleImg(data)} className="p-0 card-img" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.text}</p>

                                        <div className="d-flex justify-content-between text-center">
                                            <a href={data.app_link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><BiLinkExternal /> Demo</a>
                                            <a href={data.git_link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><BsGithub /> Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <h4>Other Projects</h4>
                <hr />
                {
                    alldata.other.map((other) => (
                        <div key={other.id}>
                            <div className="col-3 mb-4">
                                <div className="card">
                                    <img src={handleImg(other)} className="p-0 card-img" alt="..." />
                                    <div className="text-center">{other.title}</div>
                                </div>
                                <div className="other-links">
                                <div><a href="https://dd-calculator-app.netlify.app" target="_blank" rel="noreferrer">Demo</a></div>
                                <div><a href="https://github.com/leviduncan/calculator" target="_blank" rel="noreferrer">Code</a></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
