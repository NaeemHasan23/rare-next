import Head from 'next/head'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>Rare Collections</title>

                <link rel="shortcut icon" type="image/png" href="../assets/images/rare-favicon.png"/>

                <link rel="stylesheet" href="../assets/css/bootstrap.min.css"/>

                <link rel="stylesheet" href="../assets/css/animate.css"/>

                <link rel="stylesheet" href="../assets/css/owl.carousel.css"/>

                <link rel="stylesheet" href="../assets/css/font-awesome.min.css"/>

                <link rel="stylesheet" href="../assets/css/flaticon.css"/>

                <link rel="stylesheet" href="../assets/css/magnific-popup.css"/>

                <link rel="stylesheet" href="../assets/css/slicknav.min.css"/>

                <link rel="stylesheet" href="../assets/css/slick.css"/>

                <link rel="stylesheet" href="../assets/css/styles.css"/>

                <link rel="stylesheet" href="../assets/css/responsive.css"/>

                <script src="../assets/js/vendor/modernizr-2.8.3.min.js"></script>
    
                
            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}

