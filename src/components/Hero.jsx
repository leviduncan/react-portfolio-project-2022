import rez from '../assets/DARRIN-DUNCAN-FED-REZ.pdf'

function Hero() {
    return (
        <header id="top" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <h3>My Name is Darrin</h3>
                        <h1>I love building software</h1>
                        <h2 className="my-3">that help businesses solve problems</h2>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="">
                                <a href={rez} className="btn btn-primary btn-lg btn-block" target="_blank">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
