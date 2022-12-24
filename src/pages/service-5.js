import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/common/ctaArea";
import Footer from "../components/common/footer";
import Offcanvas from "../components/common/offcanvas";
import SwitcherArea from "../components/common/switcherArea";

export default function Service5() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service V.5 - Axtra</title>

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
                {/* Cursor Animation */}
                <div className="cursor1"></div>
                <div className="cursor2"></div>

                {/* Preloader */}
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

                {/* Switcher Area Start */}
                <SwitcherArea />
                {/* Switcher Area End */}

                {/* Scroll Smoother */}
                <div className="has-smooth" id="has_smooth"></div>

                {/* Go Top Button */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>

                {/* Header area start */}
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
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            <section className="portfolio__service service-v5 pt-140 pb-140">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                            <h2 className="sec-title animation__char_come"> I MAKE THE Service BETTER.</h2>
                                        </div>
                                        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                            <div className="sec-text">
                                                <p>Static and dynamic secure code review can prevent a 0day before your product is even
                                                    released. We
                                                    can integrate with your dev environment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio__service-list">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 className="ps-title">Frontend <br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 className="ps-title">Backend<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 className="ps-title">Android<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 className="ps-title">Frontend <br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 className="ps-title">Backend<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 className="ps-title">Android<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Brand area start */}
                            <section className="brand__area">
                                <div className="container line pt-140 pb-100">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <h2 className="brand__title-3 title-anim">We are happy to work with global
                                                largest brands</h2>
                                            <div className="brand__list brand-gap">
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Brand area end */}

                            {/* CTA area start */}
                            <CtaArea />
                            {/* CTA area end */}
                        </main>
                        {/* Footer area start */}
                        <Footer />
                        {/* Footer area end */}
                    </div>
                </div>
            </main>
        </div>
    )
}