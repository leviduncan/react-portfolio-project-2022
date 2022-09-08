import React from 'react'
import alldata from '../data'
import gmas from '../assets/gmas.jpg'
import armony from '../assets/armony.jpg'
import fpantry from '../assets/fpantry.jpg'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

function Projects() {

    const handleImg = (data) => {
        if (data.pic === 'gmas') {
            return gmas
        } else if (data.pic === 'armony') {
            return armony
        } else {
            return fpantry
        }
    }

    return (
        <section id="projects" className="projects d-flex align-items-center brdr-bottom brdr-bottom">
            <div className="container-fluid">
                <h2>Personal Projects</h2>
                <div className="row row-cols-1 row-cols-lg-3">
                    {alldata.projects.map((data) => (
                        <>
                            <div className="col mb-4" key={data.id}>
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
                        </>
                    )
                    )}
                </div>

            </div>
        </section>
    )
}

export default Projects
