import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/ctaArea";
import Footer from "../components/footer";
import Offcanvas from "../components/offcanvas";
import SwitcherArea from '../components/switcherArea';

export default function Service4() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service V.4 - Axtra</title>

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
                <Offcanvas />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Service area start  */}
                            <section class="service__area-3 service-v4 pb-150">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper pt-130 text-anim">
                                                <h2 class="sec-sub-title title-anim">Services</h2>
                                                <h3 class="sec-title title-anim">Our marketing <br /> Services</h3>
                                                <p>Consumers today rely heavily on digital means to research products.
                                                    We
                                                    research a brand of bldend
                                                    engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                                                    products before buying.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xx-12">
                                            <div class="service__list-3">
                                                <div class="service__item-3 service_animation">
                                                    <h3><Link href="/service-details" class="service__title-3">Search Engine <br />Optimization</Link></h3>
                                                    <div class="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul class="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div class="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i class="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div class="service__hover-3" style="background-image: url(assets/imgs/service/3/1.jpg);"></div>
                                                </div>

                                                <div class="service__item-3 service_animation">
                                                    <h3><Link href="/service-details" class="service__title-3 ">Email <br />Marketing</Link></h3>
                                                    <div class="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul class="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div class="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i class="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div class="service__hover-3" style="background-image: url(assets/imgs/service/3/2.png);"></div>
                                                </div>

                                                <div class="service__item-3 service_animation">
                                                    <h3 class=""><Link href="/service-details" class="service__title-3">COntent
                                                        <br />Marketing</Link></h3>
                                                    <div class="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul class="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div class="service__btn-3 ">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i class="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div class="service__hover-3" style="background-image: url(assets/imgs/service/3/3.png);"></div>
                                                </div>

                                                <div class="service__item-3 service_animation">
                                                    <h3 class=""><Link href="/service-details" class="service__title-3">Social
                                                        <br />Marketing</Link></h3>
                                                    <div class="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul class="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div class="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i class="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div class="service__hover-3" style="background-image: url(assets/imgs/service/3/4.png);"></div>
                                                </div>

                                                <div class="service3__img-wrap">
                                                    <div class="service3__img"></div>
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