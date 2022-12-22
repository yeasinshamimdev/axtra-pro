import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer';
import CtaArea from '../components/ctaArea';
import OffcanvasDark from '../components/offcanvasDark';
import SwitcherAreaDark from '../components/switcherAreaDark';
import Link from 'next/link';

const PortfolioDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio - Axtra</title>

                {/* Fav Icon   */}
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
            <main className="dark">
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
                <SwitcherAreaDark />
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <div className="has-smooth" id="has_smooth"></div>

                {/* Go Top Button  */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>

                {/* Porfolio Cursor  */}
                <div className="cursor" id="portf_cursor_6">View <br />Project</div>

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
                <OffcanvasDark />
                {/* Offcanvas area end */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start  */}
                            <section className="portfolio__area-6">
                                <div className="container line pt-100 pb-140">
                                    <span className="line-3"></span>
                                    <div className="zi-9">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                                                <div className="sec-title-wrapper portfolio__title-wrap-6">
                                                    <div className="">
                                                        <h2 className="sec-sub-title animation__char_come">Featured</h2>
                                                        <h3 className="sec-title animation__char_come_long">Work</h3>
                                                        <p>View the full case study of our recent featured and awesome works that we created for our
                                                            clients.
                                                        </p>
                                                    </div>
                                                    <div className="portfolio__pagination-6">
                                                        <span className="portfolio__current">01</span> / 0<span className="portfolio__total"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                                                <div className="portfolio__wrapper-6">
                                                    <div className="portfolio__list-6">
                                                        <div className="portfolio__item-6" data-portfitem="1">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/1.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="portfolio__item-6" data-portfitem="2">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/2.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="portfolio__item-6" data-portfitem="3">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/3.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="portfolio__item-6" data-portfitem="4">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/4.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="portfolio__item-6" data-portfitem="5">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/5.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="portfolio__item-6" data-portfitem="6">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/6.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div className="portfolio__item-6" data-portfitem="7">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/7.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div className="portfolio__content-6">
                                                                    <h4 className="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 className="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end   */}

                            {/* CTA area start   */}
                            <CtaArea />
                            {/* CTA area end   */}

                        </main>
                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioDark;