import React from 'react'
import alldata from '../data'
import gmas from '../assets/gmas.jpg'
import armony from '../assets/armony.jpg'
import fpantry from '../assets/fpantry.jpg'

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
            <div className="container">
                <h2>Projects</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {alldata.projects.map((data) => (
                        <>
                            <div className="col mb-4">
                                <div className="card">
                                    <img src={handleImg(data)} className="p-0 card-img" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.text}</p>
                                    
                                    <div className="d-flex justify-content-between text-center">
                                        <a href="" className="btn btn-primary btn-sm">Demo</a>
                                        <a href="" className="btn btn-primary btn-sm">Code</a>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div key={data.id} className="col-sm-6 col-lg-4 p-2">
                                <div className="card">
                                <img src={handleImg(data)} className="card-img" alt="..." />
                                   
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.text}</p>
                                        <a href="#projects" className="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div> */}
                        </>
                    )
                    )}
                </div>

            </div>
        </section>
    )
}

export default Projects
