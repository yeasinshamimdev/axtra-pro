import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/ctaArea";
import Footer from "../components/footer";
import OffcanvasDark from "../components/offcanvasDark";
import SwitcherAreaDark from "../components/switcherAreaDark";

export default function Service3Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service V.3 - Axtra</title>

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

                            {/* Service area start  */}
                            <section class="service__area-2 service-v3 pt-130 pb-140">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="sec-text text-anim">
                                                <p>We are passionate to create connected brands and services, and campaigns to enable stable and
                                                    successful relationships between businesses and customers.</p>
                                            </div>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">We grow your brands through
                                                    bold service
                                                    we’re providing</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row pt-140">
                                        <div class="col-xxl-12">
                                            <div class="service__list-2 animation__service-2">
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/1.png" alt="Service Icon" />
                                                        <h3 class="service__title-2">Branding <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/2.png" alt="Service Icon" />
                                                        <h3 class="service__title-2 ">Digital Product <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/3.png" alt="Service Icon" />
                                                        <h3 class="service__title-2">Architectural <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/1.png" alt="Service Icon" />
                                                        <h3 class="service__title-2">Branding <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/2.png" alt="Service Icon" />
                                                        <h3 class="service__title-2 ">Digital Product <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/3.png" alt="Service Icon" />
                                                        <h3 class="service__title-2">Architectural <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Service area end  */}


                            {/* Brand area start  */}
                            <section class="brand__area">
                                <div class="container line pt-140 pb-100">
                                    <span class="line-3"></span>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <h2 class="brand__title-3 title-anim">We are happy to work with global
                                                largest brands</h2>
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