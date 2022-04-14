function Menu() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Darrin Duncan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           
                            <a className="nav-link" href="#about">About<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#coding">Code Challenge</a>
                        </li>
                        <li className="nav-item">
                            <a href="#connect" className="btn btn-org btn-sm" href="#connect">Connect</a>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>

    )
}

export default Menu
