import Head from 'next/head'
import Footer from './Footer.js'
import Navbar from './Navbar.js'


export default function Layout(props) {
    return (
        <div>
            
            <Navbar/>
            <div className="container-fluid">
                {props.children}
            </div>

            <Footer/>
        </div>
    )
}

