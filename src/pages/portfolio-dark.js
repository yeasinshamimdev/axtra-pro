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
            <main class="dark">
                {/* Cursor Animation  */}
                <div class="cursor1"></div>
                <div class="cursor2"></div>

                {/* Preloader  */}
                <div class="preloader">
                    <div class="loading">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                        <div class="bar bar3"></div>
                        <div class="bar bar4"></div>
                        <div class="bar bar5"></div>
                        <div class="bar bar6"></div>
                        <div class="bar bar7"></div>
                        <div class="bar bar8"></div>
                    </div>
                </div>

                {/* Switcher Area Start  */}
                <SwitcherAreaDark />
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <div class="has-smooth" id="has_smooth"></div>

                {/* Go Top Button  */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>

                {/* Porfolio Cursor  */}
                <div class="cursor" id="portf_cursor_6">View <br />Project</div>

                {/* Header area start  */}
                <header class="header__area">
                    <div class="header__inner">
                        <div class="header__logo">
                            <Link href="/">
                                <img class="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                                <img class="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                            </Link>
                        </div>
                        <div class="header__nav-icon">
                            <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                        </div>
                        <div class="header__support">
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
                            <section class="portfolio__area-6">
                                <div class="container line pt-100 pb-140">
                                    <span class="line-3"></span>
                                    <div class="zi-9">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                                                <div class="sec-title-wrapper portfolio__title-wrap-6">
                                                    <div class="">
                                                        <h2 class="sec-sub-title animation__char_come">Featured</h2>
                                                        <h3 class="sec-title animation__char_come_long">Work</h3>
                                                        <p>View the full case study of our recent featured and awesome works that we created for our
                                                            clients.
                                                        </p>
                                                    </div>
                                                    <div class="portfolio__pagination-6">
                                                        <span class="portfolio__current">01</span> / 0<span class="portfolio__total"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                                                <div class="portfolio__wrapper-6">
                                                    <div class="portfolio__list-6">
                                                        <div class="portfolio__item-6" data-portfitem="1">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/1.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="2">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/2.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="3">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/3.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="4">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/4.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="5">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/5.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="6">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/6.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="7">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/7.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
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