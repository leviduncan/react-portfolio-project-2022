import mug from '../assets/about_photo.png'
import rez from '../assets/DARRIN-DUNCAN-FED-REZ.pdf'

function Hero() {
    return (
        <header id="top" className="hero d-flex align-items-center flex-lg-row flex-column">
            <div class="col-lg-7 col-sm-12 left-content">
                <div class="container-fluid">
                    <h3>My Name is Darrin,</h3>
                    <h1>I am a Front-End Web Developer</h1>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="">
                            <a href={rez} className="btn btn-primary btn-lg btn-block" target="_blank" rel="noreferrer">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-sm-12 right-content">
                <h2 className="">I use code to help solve business challenges</h2>
            </div>
        </header>
    )
}

export default Hero
