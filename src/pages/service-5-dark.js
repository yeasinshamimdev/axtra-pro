import Head from "next/head";
import Link from "next/link";
import OffcanvasDark from "../components/offcanvasDark";
import SwitcherAreaDark from "../components/switcherAreaDark";
import Footer from "../components/footer";
import CtaArea from "../components/ctaArea";

export default function Service5Dark() {
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

                {/* Offcanvas area start  */}
                <OffcanvasDark />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            <section class="portfolio__service service-v5 pt-140 pb-140 blog__animation">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                            <h2 class="sec-title animation__char_come"> I MAKE
                                                THE Service
                                                BETTER.</h2>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                            <div class="sec-text">
                                                <p>Static and dynamic secure code review can prevent a 0day before your product is even
                                                    released. We
                                                    can integrate with your dev environment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio__service-list">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 class="ps-title">Frontend <br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 class="ps-title">Backend<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 class="ps-title">Android<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 class="ps-title">Frontend <br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 class="ps-title">Backend<br /> Developemnt</h3>
                                                        <ul>
                                                            <li>+ WordPress</li>
                                                            <li>+ Python</li>
                                                            <li>+ PHP & Laravel</li>
                                                        </ul>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__service-item">
                                                    <Link href="/service-details">
                                                        <h3 class="ps-title">Android<br /> Developemnt</h3>
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

                            {/* Brand area start  */}
                            <section class="brand__area">
                                <div class="container line pt-140 pb-100">
                                    <span class="line-3"></span>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <h2 class="brand__title-3 title-anim">We are happy to work with global largest brands</h2>
                                            <div class="brand__list brand-gap">
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Brand area end  */}

                            {/* CTA area start  */}
                            <CtaArea />
                            {/* CTA area end  */}

                        </main>

                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div>
            </main>
        </div>
    )
}