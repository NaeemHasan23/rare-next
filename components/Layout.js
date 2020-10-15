import Head from 'next/head'
import Footer from './Footer.js'
import Navbar from './Navbar.js'


export default function Layout(props) {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" type="image/png" href="images/rare-favicon.png"/>
            </Head>
            <Navbar/>
            <div className="container-fluid">
                {props.children}
            </div>

            <Footer/>
        </div>
    )
}

