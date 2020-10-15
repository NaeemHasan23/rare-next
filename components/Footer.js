import Link from 'next/link' 

export default function Footer() {
    return (
        <footer className="footer-area">
            <div className="footer-top bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="footer-widget footer-logo">
                                <img src="images/rare-logo-txt.png" alt=""/>
                                <p>Lorem Ipsum available but the arran majority have suffered alteration in some form by injected humour.</p>
                                <h4>Working Hours: </h4>
                                <span>Sat - Thu 8:00 - 18:00 (Friday off)</span>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer-widget footer-contact">
                                <h4 className="widget-title">GET IN TOUCH</h4>
                                <ul>
                                    <li><i className="fa fa-home"></i>Dhaka, Bangladesh</li>
                                    <li><i className="fa fa-phone"></i> +017101234567</li>
                                    <li><i className="fa fa-envelope"></i> support@email.com</li>
                                    <li><i className="fa fa-globe"></i> www.rarecollection.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-6">
                            <div className="footer-widget footer-menu" style={{textAlign: "left"}}>
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="service.html">Our Works</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                            <div className="footer-widget footer-logo" style={{textAlign: "right"}}>
                                <h4 className="widget-title">Social Links</h4>
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bootem">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 bottom-copyright">
                            <p>
                                Copyright &copy; <script>document.write(new Date().getFullYear());</script> | Rare Collection Industry LTD.
                            </p>
                        </div>
                        <div className="col-md-6 col-12 bottom-develop">
                            <p>
                                Developed by <a href="https://everexpert.com" target="_blank">EverExpert</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
