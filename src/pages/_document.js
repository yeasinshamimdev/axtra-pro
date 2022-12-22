import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    {/* Google Fonts  */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

                    <script type="text/javascript" src="assets/js/jquery-3.6.0.min.js" async />
                    <script type="text/javascript" src="assets/js/bootstrap.bundle.min.js" async />
                    <script type="text/javascript" src="assets/js/swiper-bundle.min.js" async />
                    <script type="text/javascript" src="assets/js/counter.js" async />
                    <script type="text/javascript" src="assets/js/gsap.min.js" async />
                    <script type="text/javascript" src="assets/js/ScrollTrigger.min.js" async />
                    <script type="text/javascript" src="assets/js/ScrollToPlugin.min.js" async />
                    <script type="text/javascript" src="assets/js/ScrollSmoother.min.js" async />
                    <script type="text/javascript" src="assets/js/SplitText.min.js" async />
                    <script type="text/javascript" src="assets/js/chroma.min.js" async />
                    <script type="text/javascript" src="assets/js/jquery.meanmenu.min.js" async />
                    <script type="text/javascript" src="assets/js/main.js" async />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;  