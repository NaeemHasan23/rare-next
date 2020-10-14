import Link from 'next/link' 


export default function Navbar() {
    return (
        <div>
            <nav className="header-area bg-1" id="sticky-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-9 col-sm-8 col-6">
                            <div className="logo">
                                <a href="index.html">
                                    <img src='../assets/images/rare-logo-txt.png' alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="mainmenu">
                                <ul id="navigation">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about3.html">About</a></li>
                                    <li><a href="service.html">Services</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>    
                        <div className="col-md-1 col-sm-1 col-2 d-lg-none d-sm-block">
                            <div className="responsive-menu-wrap floatright"></div>
                        </div>
                    </div>
                </div>
            </nav>

            <style jsx>{`
            
                ul{
                    
                }
            `}</style>
        </div>
    )
}
