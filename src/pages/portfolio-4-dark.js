import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer';
import OffcanvasDark from '../components/offcanvasDark';
import SwitcherAreaDark from '../components/switcherAreaDark';

const PortfolioFourDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.4 - Axtra</title>

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
                            <section class="portfolio__area-3 portfolio-v4">
                                <div class="container pt-100 pb-150">
                                    <div class="row pb-150">
                                        <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title-2 animation__char_come">Awesome <br />Projects</h2>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                            <div class="blog__text">
                                                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                                    original collabs. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-sub-title title-anim">Featured <br />Work</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="swiper portfolio__slider-3">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="swiper-pagination"></div>
                                                <div class="swiper-btn">
                                                    <div class="pp-prev"><i class="fa-solid fa-arrow-left"></i></div>
                                                    <div class="pp-next"><i class="fa-solid fa-arrow-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}

                            {/* CTA area start  */}
                            <CtaArea />
                            {/*  CTA area end  */}

                        </main>

                        {/* Footer area start  */}
                        <Footer />
                        {/*  Footer area end  */}

                    </div>
                </div>
            </main>

        </div>
    );
};

export default PortfolioFourDark;