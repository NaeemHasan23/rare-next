import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            {/* <title>Rare Collections</title> */}
            <meta name="description" content=""/>
            


            <link rel="shortcut icon" type="image/png" href="images/rare-favicon.png"/>

            <link rel="stylesheet" href="css/bootstrap.min.css"/>

            <link rel="stylesheet" href="css/animate.css"/>

            <link rel="stylesheet" href="css/owl.carousel.css"/>

            <link rel="stylesheet" href="css/font-awesome.min.css"/>

            <link rel="stylesheet" href="css/flaticon.css"/>

            <link rel="stylesheet" href="css/magnific-popup.css"/>

            <link rel="stylesheet" href="css/slicknav.min.css"/>

            <link rel="stylesheet" href="css/slick.css"/>

            <link rel="stylesheet" href="css/styles.css"/>

            <link rel="stylesheet" href="css/responsive.css"/>

            <script src="js/vendor/modernizr-2.8.3.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="js/vendor/jquery-2.2.4.min.js"></script>
    
          <script src="js/vendor/popper.min.js"></script>
        
          <script src="js/bootstrap.min.js"></script>
        
          <script src="js/owl.carousel.min.js"></script>
        
          <script src="js/slick.min.js"></script>
        
          <script src="js/plugins.js"></script>
        
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbeBYsZSDkbIyfUkoIw1Rt38eRQOQQU0o"></script>
          {/* put google map script here */}
          <script src="js/scripts.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
