import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Offcanvas from "../components/offcanvas";
import SwitcherArea from "../components/switcherArea";

export default function NotFound() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>404 - Axtra</title>

                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />



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
            <main>
                {/* Cursor Animation  */}
                <div className="cursor1"></div>
                <div className="cursor2"></div>


                {/* Preloader  */}
                <div className="preloader">
                    <div className="loading">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                        <div className="bar bar4"></div>
                        <div className="bar bar5"></div>
                        <div className="bar bar6"></div>
                        <div className="bar bar7"></div>
                        <div className="bar bar8"></div>
                    </div>
                </div>

                {/* Switcher Area Start  */}
                <SwitcherArea />
                {/* Switcher Area End  */}



                {/* Scroll Smoother  */}
                <div className="has-smooth" id="has_smooth"></div>



                {/* Go Top Button  */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>


                {/* Header area start  */}
                <header className="header__area">
                    <div className="header__inner">
                        <div className="header__logo">
                            <Link href="/">
                                <img className="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                                <img className="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                            </Link>
                        </div>
                        <div className="header__nav-icon">
                            <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                        </div>
                        <div className="header__support">
                            <p>Support center <Link href="tel:+9587325902">+9 587 325 902</Link></p>
                        </div>
                    </div>
                </header>
                {/* Header area end  */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Error page start  */}
                            <section className="error__page">
                                <div className="container line">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="error__content">
                                                <img src="assets/imgs/thumb/404.png" alt="Page not found" />
                                                <h2>Sorry! page did not found</h2>
                                                <p>The page you are looking for does not exist or has been moved</p>
                                                <div id="btn_wrapper">
                                                    <Link href="/" className="wc-btn-primary btn-hover btn-item"><span></span> Back to <br />Homepage <i
                                                        className="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Error page end  */}
                        </main>
                    </div>
                </div>
            </main>
        </div>
    )
}