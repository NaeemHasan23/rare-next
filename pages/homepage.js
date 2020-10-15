import Layout from '../components/Layout'

export default function homepage() {
    return (
        <Layout>
                <div>
                    {/* slider-area start */}
                    <div className="slider-area">
                        <div className="slider-active next-prev-style">
                        <div className="slider-items">
                            <img src="images/slider/banner-03.jpg" alt="" className="slider" />
                        </div>
                        <div className="slider-items">
                            <img src="images/slider/banner-01.jpg" alt="" className="slider" />
                        </div>
                        </div>
                    </div>
                    {/* slider-area end */}
                    {/* ablout-area start */}
                    <div className="about-area ptb-120">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                            <div className="about-wrap">
                                <h1>WELCOME TO <span>RARE COLLECTIONS</span></h1>
                                <p>
                                We consider ourselves as a Garment exporter from Bangladesh. We believe that the business 
                                we are in requires an innovative and efficient approach of garment sourcing to meet the 
                                apparel industry target of Cost, Quality and Lead Time.
                                </p>    
                                <p>
                                Headquartered in the Global second largest apparel producing country in Dhaka, Bangladesh, 
                                we are fast growing and providing outstanding garment sourcing solution to our International 
                                Garments Buyers: Fashion Brand Retailers, Wholesalers, Distributors, Internet Sellers.
                                </p>
                                <div className="row" style={{marginTop: '100px'}}>
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="about-content">
                                    <h4><span className="counter">200</span><span> + </span></h4>
                                    <h5>Employees</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="about-content">
                                    <h4><span className="counter">8</span><span> + </span></h4>
                                    <h5>Experience Years</h5>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 d-none d-lg-block">
                            <div className="about-img">
                                <img src="images/project/g4.png" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* ablout-area end */}
                    {/* spacial-area start */}
                    <div className="spacial-area ptb-120">
                        <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="section-title text-center">
                                <h2>Key Features</h2>
                                <h3>We Offer The Best Services</h3>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 d-lg-block d-none ">
                            <div className="spacial-img">
                                <img src="images/project/d1.jpg" alt="" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-12">
                            <div className="spacial-wrap">
                                <div className="row">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="spacial-item">
                                    <span className="flaticon-house-3" />
                                    <h4>Ready Made Garments</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="spacial-item">
                                    <span className="flaticon-house" />
                                    <h4>Data Entry Services</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="spacial-item">
                                    <span className="flaticon-cityscape" />
                                    <h4>Ready Made Garments</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="spacial-item">
                                    <span className="flaticon-house-1" />
                                    <h4>Data Entry Services</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="spacial-item">
                                    <span className="flaticon-house-4" />
                                    <h4>Ready Made Garments</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="spacial-item">
                                    <span className="flaticon-home" />
                                    <h4>Data Entry Services</h4>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* spacial-area end */}
                    {/* .project-area start */}
                    <div className="project-area bg-papayawhip">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                            <div className="section-title">
                                <h2>Portfolio</h2>
                            </div>
                            </div>
                            <div className="col-lg-8 col-12">
                            <div className="project-menu text-right">
                                <button className="active" data-filter="*">View All</button>
                                <button data-filter=".cat1">Germents</button>
                                <button data-filter=".cat2">Data Entry</button>
                                <button data-filter=".cat3">Others</button>
                            </div>
                            </div>
                        </div>
                        <div className="row grid">
                            <div className="col-lg-4 col-sm-6 col-12 project cat1">
                            <div className="project-wrap">
                                <img src="images/project/g1.jpg" alt="" />
                                <div className="project-content">
                                <a href="assets/images/project/g1.jpg" className="popup"><i className="fa fa-search" /></a>
                                <h3>Germents</h3>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 project cat1">
                            <div className="project-wrap">
                                <img src="images/project/g2.jpg" alt="" />
                                <div className="project-content">
                                <a href="assets/images/project/g2.jpg" className="popup"><i className="fa fa-search" /></a>
                                <h3>Germents</h3>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 project cat2">
                            <div className="project-wrap">
                                <img src="images/project/d1.jpg" alt="" />
                                <div className="project-content">
                                <a href="assets/images/project/d1.jpg" className="popup"><i className="fa fa-search" /></a>
                                <h3>Data Entry</h3>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 project cat2 ">
                            <div className="project-wrap">
                                <img src="images/project/d2.jpg" alt="" />
                                <div className="project-content">
                                <a href="assets/images/project/d2.jpg" className="popup"><i className="fa fa-search" /></a>
                                <h3>Data Entry</h3>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 project cat3 cat1">
                            <div className="project-wrap">
                                <img src="images/project/g5.png" alt="" />
                                <div className="project-content">
                                <a href="assets/images/project/g5.png" className="popup"><i className="fa fa-search" /></a>
                                <h3>Germents</h3>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 project cat1 cat4">
                            <div className="project-wrap">
                                <img src="images/project/g4.png" alt="" />
                                <div className="project-content">
                                <a href="assets/images/project/g4.png" className="popup"><i className="fa fa-search" /></a>
                                <h3>Others</h3>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* .project-area end */}
                    {/* service-area start */}
                    <div className="service-area">
                        <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="section-title text-center">
                                <h2>Service We Do</h2>
                                <h3>A wall for our project glory and a place to find more</h3>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-12 col-lg-4">
                            <div className="service-wrap">
                                <div className="service-img">
                                <img src="images/service/1.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                <h4>Residential Design</h4>
                                <p>It has survived not only five centui but the leap into electronic typesetting remain essentially unchanged.</p>
                                <a href="servic-details.html">Read More</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-12 col-lg-4">
                            <div className="service-wrap">
                                <div className="service-img">
                                <img src="images/service/2.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                <h4>corporate Design</h4>
                                <p>It has survived not only five centui but the leap into electronic typesetting remain essentially unchanged.</p>
                                <a href="servic-details.html">Read More</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-12 col-lg-4">
                            <div className="service-wrap">
                                <div className="service-img">
                                <img src="images/service/3.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                <h4>Commercial design</h4>
                                <p>It has survived not only five centui but the leap into electronic typesetting remain essentially unchanged.</p>
                                <a href="servic-details.html">Read More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* service-area end */}
                    {/* fanfact-area start */}
                    <div className="fanfact-area bg-img-1 black-opacity">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-6">
                            <div className="funfact-wrap">
                                <h2 className="counter">16</h2>
                                <p>Years</p>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-6">
                            <div className="funfact-wrap">
                                <h2 className="counter">75</h2>
                                <p>Projects</p>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-6">
                            <div className="funfact-wrap">
                                <h2 className="counter">18</h2>
                                <p>Members</p>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-6">
                            <div className="funfact-wrap">
                                <h2 className="counter">20</h2>
                                <p>Awards</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* fanfact-area end */}
                    {/* testmonial-area start */}
                    <div className="testmonial-area testmonial-area2 ptb-120">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">
                            <div className="test-active">
                                <div className="test-wrap2 text-center">
                                <div className="test-img2">
                                    <img src="images/test/1.png" alt="" />
                                </div>
                                <i className="fa fa-quote-left" />
                                <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer.</p>
                                <h4>Landy Drammer</h4>
                                <span>Newyork City</span>
                                </div>
                                <div className="test-wrap2 text-center">
                                <div className="test-img2">
                                    <img src="images/test/2.png" alt="" />
                                </div>
                                <i className="fa fa-quote-left" />
                                <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer.</p>
                                <h4>Alex Andarson</h4>
                                <span>Newyork</span>
                                </div>
                                <div className="test-wrap2 text-center">
                                <div className="test-img2">
                                    <img src="images/test/1.png" alt="" />
                                </div>
                                <i className="fa fa-quote-left" />
                                <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer.</p>
                                <h4>Pol Biz</h4>
                                <span>USA</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* testmonial-area end */}
                    {/*brand logo showcase*/}
                    <div className="brand-area bg-1">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-3">
                            <div className="brand-wrap text-center">
                                <img src="images/brand/1.png" alt="" />
                            </div>
                            </div>
                            <div className="col-sm-3 col-3">
                            <div className="brand-wrap text-center">
                                <img src="images/brand/2.png" alt="" />
                            </div>
                            </div>
                            <div className="col-sm-3 col-3">
                            <div className="brand-wrap text-center">
                                <img src="images/brand/3.png" alt="" />
                            </div>
                            </div>
                            <div className="col-sm-3 col-3">
                            <div className="brand-wrap text-center">
                                <img src="images/brand/4.png" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* .brand-area end */}
                    {/* google map area start */}
                    {/* <div id="googleMap"></div> */}
                    {/* google map area end */}
                    </div>

        </Layout>
    )
}
