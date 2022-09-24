import { FaHamburger } from 'react-icons/fa'

function Menu() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/"><div className="logo">D</div></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FaHamburger />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link" href="#top">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#connect">Connect</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#coding">Code Challenge</a>
                        </li> */}
                    </ul> 
                </div>
            </div>
        </nav>

    )
}

export default Menu
