import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer';
import Offcanvas from '../components/offcanvas';
import SwitcherArea from '../components/switcherArea';

const PortfolioThree = () => {
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
            <main>
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
                <SwitcherArea />
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
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Portfolio area start   */}
                            <section class="portfolio__area-2 portfolio-v3">
                                <div class="container g-0 line pt-100 pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper text-anim">
                                                <h2 class="sec-title-3 title-anim">Selected <span>Projects</span></h2>
                                                <p class="sec-text">Worked with global brands & agency at the
                                                    intersection of flat design and digital
                                                    technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper portfolio__slider-2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"><Link href="/portfolio-details">crodyflw <span>Website</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">developers
                                                        <span>digital</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">Lionpro
                                                        <span>marketeers</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="portfolio__slider-2-pagination--">
                                        <div class="swiper-pagination circle-pagination right"></div>
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

export default PortfolioThree;