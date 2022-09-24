import rez from '../assets/DARRIN-DUNCAN-FED-REZ.pdf'

function Hero() {
    return (
        <header id="top" className="hero">
            <div className="container d-flex  flex-column flex-lg-row">
                <div class="col-lg-7 col-sm-12 left-content d-flex align-items-center">
                    <div className="">
                        <h3>My Name is Darrin,</h3>
                        <h1>I build engaging front-end experiences</h1>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="">
                                <a href={rez} className="btn btn-primary btn-lg btn-block" target="_blank" rel="noreferrer">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="right-content">
                        <h2 className="sub">I use code to help solve business challenges</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
