import me from '../assets/about_full.png'

function About() {
    return (
        <>
            <section id="about" className="about d-flex">
                <div className="container">
                    <div className="row d-flex">
                        <div className="about-img">
                            <img src={ me } alt="" />
                        </div>

                        <div className="content">
                            <h2>About Me</h2>
                            <p>
                            As a Web Developer I often gather, define and interpret business requirements, to design, build, enhance, test and deploy modern web applications. I use code to solve problems. Whether working independently or within a team setting, I am able to juggle multiple projects while managing quality, communication and creativity. I am always available to chat with you about your next project or current. So let's connect! I look forward to speaking with you.
                        </p>
                            <div className="mt-4">
                                <a href="#connect" className="btn btn-primary btn-lg">Let's Connect</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About