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

                {/* Offcanvas area start  */}
                <Offcanvas />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Service area start  */}
                            <section className="service__area-3 service-v4 pb-150">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper pt-130 text-anim">
                                                <h2 className="sec-sub-title title-anim">Services</h2>
                                                <h3 className="sec-title title-anim">Our marketing <br /> Services</h3>
                                                <p>Consumers today rely heavily on digital means to research products.
                                                    We
                                                    research a brand of bldend
                                                    engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                                                    products before buying.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xx-12">
                                            <div className="service__list-3">
                                                <div className="service__item-3 service_animation">
                                                    <h3><Link href="/service-details" className="service__title-3">Search Engine <br />Optimization</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" style="background-image: url(assets/imgs/service/3/1.jpg);"></div>
                                                </div>

                                                <div className="service__item-3 service_animation">
                                                    <h3><Link href="/service-details" className="service__title-3 ">Email <br />Marketing</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" style="background-image: url(assets/imgs/service/3/2.png);"></div>
                                                </div>

                                                <div className="service__item-3 service_animation">
                                                    <h3 className=""><Link href="/service-details" className="service__title-3">COntent
                                                        <br />Marketing</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3 ">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" style="background-image: url(assets/imgs/service/3/3.png);"></div>
                                                </div>

                                                <div className="service__item-3 service_animation">
                                                    <h3 className=""><Link href="/service-details" className="service__title-3">Social
                                                        <br />Marketing</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" style="background-image: url(assets/imgs/service/3/4.png);"></div>
                                                </div>

                                                <div className="service3__img-wrap">
                                                    <div className="service3__img"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                            {/* Service area end  */}

                            {/* Brand area start  */}
                            <section className="brand__area">
                                <div className="container line pt-140 pb-100">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <h2 className="brand__title-3 title-anim">We are happy to work with global
                                                largest brands</h2>
                                            <div className="brand__list brand-gap">
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item-2 fade_bottom">
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