import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer';
import Offcanvas from '../components/common/offcanvas';
import SwitcherArea from '../components/common/switcherArea';

const PortfolioFour = () => {
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
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start  */}
                            <section className="portfolio__area-3 portfolio-v4">
                                <div className="container pt-100 pb-150">
                                    <div className="row pb-150">
                                        <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title-2 animation__char_come">Awesome <br />Projects</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                            <div className="blog__text">
                                                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                                    original collabs. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title title-anim">Featured <br />Work</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="swiper portfolio__slider-3">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-pagination"></div>
                                                <div className="swiper-btn">
                                                    <div className="pp-prev"><i className="fa-solid fa-arrow-left"></i></div>
                                                    <div className="pp-next"><i className="fa-solid fa-arrow-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}

                            {/* CTA area start   */}
                            <CtaArea />
                            {/* CTA area end   */}

                        </main>
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioFour;