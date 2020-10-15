import React from 'react'
import Layout from "../components/Layout";


export default function contact() {
    return (
        <Layout>
            <div>
                    {/* breadcumb-area start */}
                    <div className="breadcumb-area black-opacity bg-img-6">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <div className="breadcumb-wrap">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>/</li>
                                <li>Contact</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* breadcumb-area end */}
                    {/* contact-area start */}
                    <div className="contact-area pt-120">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="contact-form">
                            <div className="cf-msg" />
                            <form action="mail.php" method="post" id="cf">
                                <div className="row">
                                <div className="col-md-6 col-12">
                                    <input type="text" placeholder="Name" id="fname" name="fname" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" placeholder="Email" id="email" name="email" />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder="Subject" id="subject" name="subject" />
                                </div>
                                <div className="col-12">
                                    <textarea className="contact-textarea" placeholder="Message" id="msg" name="msg" defaultValue={""} />
                                </div>
                                <div className="col-12">
                                    <button id="submit" className="cont-submit btn-contact btn-style" name="submit">SEND MESSAGE</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-wrap">
                            <ul>
                                <li style={{background: '#903921'}}>
                                <i className="fa fa-phone" /> Phone number
                                <p>
                                    <span>+ 880 17100123456</span>
                                    <span>+ 880 17100123456</span>
                                </p>
                                </li>
                                <li style={{background: '#bf601c'}}>
                                <i className="fa fa-envelope" /> Email Id
                                <p>
                                    <span style={{textTransform: 'lowercase'}}>rarecollection@gmail.com</span>
                                    <span style={{textTransform: 'lowercase'}}>admin@rarecollection.com</span>
                                </p>
                                </li>
                                <li style={{background: '#e78318'}}>
                                <i className="fa fa-location-arrow" /> Location
                                <p>
                                    <span>House# 24, Mohammadpur, Dhaka, Bangladesh</span>
                                </p>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="googleMap" />
                    </div>
                </div>
        </Layout>
    )
}
