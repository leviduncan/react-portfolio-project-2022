import rez from '../assets/DARRIN-DUNCAN-FED-REZ.pdf'
import ButtonLink from './ButtonLink'

function Hero() {
    return (
        <header id="top" className="hero">
            <div className="container">
                <div className="content">
                    <div className="">
                        <h3>Hi, my name is <strong>Darrin Duncan</strong>,</h3>
                        <h1>I build engaging front-end experiences with code.</h1>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="btn-grp">
                                <ButtonLink href={rez} text="Resume" blank="_blank"/>
                                <ButtonLink href="#connect" text="Let's Connect" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
