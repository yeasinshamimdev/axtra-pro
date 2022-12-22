import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer';
import OffcanvasDark from '../components/offcanvasDark';
import SwitcherAreaDark from '../components/switcherAreaDark';

const PortfolioSecondDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.2 - Axtra</title>

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

                            <section className="pt-150 pb-130 portfolio-v2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title-2 animation__char_come">Selected <br /> Projects</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                            <div className="blog__text">
                                                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                                    original collabs. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Portfolio area start  */}
                            <section className="portfolio__area pb-140">
                                <div className="container">
                                    <div className="row top_row">

                                        <h2 className="portfolio__text">work</h2>
                                        <div className="portfolio__list-1">
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img className="mover" src="assets/imgs/portfolio/1/1.jpg"
                                                    alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/1.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row row_bottom">
                                        <div className="col-xxl-12">
                                            <div className="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                                                <Link className="wc-btn-secondary btn-hover btn-item" href="/portfolio"><span></span>Load More</Link>
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

                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioSecondDark;