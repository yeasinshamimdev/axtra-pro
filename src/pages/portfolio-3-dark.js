import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer';
import OffcanvasDark from '../components/common/offcanvasDark';
import SwitcherAreaDark from '../components/common/switcherAreaDark';

const PortfolioThirdDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.3 - Axtra</title>

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

                            {/* Portfolio area start   */}
                            <section className="portfolio__area-2 portfolio-v3">
                                <div className="container g-0 line pt-100 pb-140">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper text-anim">
                                                <h2 className="sec-title-3 title-anim">Selected <span>Projects</span></h2>
                                                <p className="sec-text">Worked with global brands & agency at the
                                                    intersection of flat design and digital
                                                    technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper portfolio__slider-2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-2">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content text-anim">
                                                    <h2 className="sec-title title-anim"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div className="btn-common-wrap">
                                                        <Link href="/portfolio-details" className="btn-common">View details <i
                                                            className="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-2">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content text-anim">
                                                    <h2 className="sec-title title-anim"><Link href="/portfolio-details">crodyflw <span>Website</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div className="btn-common-wrap">
                                                        <Link href="/portfolio-details" className="btn-common">View details <i
                                                            className="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-2">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content text-anim">
                                                    <h2 className="sec-title title-anim"> <Link href="/portfolio-details">developers
                                                        <span>digital</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div className="btn-common-wrap">
                                                        <Link href="/portfolio-details" className="btn-common">View details <i
                                                            className="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-2">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content text-anim">
                                                    <h2 className="sec-title title-anim"> <Link href="/portfolio-details">Lionpro
                                                        <span>marketeers</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div className="btn-common-wrap">
                                                        <Link href="/portfolio-details" className="btn-common">View details <i
                                                            className="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-2">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content text-anim">
                                                    <h2 className="sec-title title-anim"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div className="btn-common-wrap">
                                                        <Link href="/portfolio-details" className="btn-common">View details <i
                                                            className="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio__slider-2-pagination--">
                                        <div className="swiper-pagination circle-pagination right"></div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end   */}

                            {/* CTA area start  */}
                            <CtaArea />
                            {/* CTA area end   */}
                        </main>
                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end   */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioThirdDark;