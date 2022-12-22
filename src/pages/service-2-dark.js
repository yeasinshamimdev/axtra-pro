import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/ctaArea";
import Footer from "../components/footer";
import OffcanvasDark from "../components/offcanvasDark";
import SwitcherAreaDark from "../components/switcherAreaDark";

export default function Service2Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service V.2 - Axtra</title>

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
                <OffcanvasDark />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Service area start  */}
                            <section className="service__area service-v2 pt-110 pb-150">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div className="sec-title-wrapper wrap">
                                                <h2 className="sec-sub-title title-anim">service</h2>
                                                <h3 className="sec-title title-anim">Solution we <br />provide</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div className="service__top-text text-anim">
                                                <p>With every single one of our clients we bring forth a deep passion for <span>creative problem solving innovations</span> forward thinking brands boundaries</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service__list-wrapper">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                                                <div className="service__img-wrapper">
                                                    <img src="assets/imgs/service/1/1.jpg" alt="Service Image" className="service__img img-1 active" />
                                                    <img src="assets/imgs/service/1/2.png" alt="Service Image" className="service__img img-2" />
                                                    <img src="assets/imgs/service/1/3.png" alt="Service Image" className="service__img img-3" />
                                                    <img src="assets/imgs/service/1/4.png" alt="Service Image" className="service__img img-4" />

                                                    <span className="shape-box-1 current"></span>
                                                    <span className="shape-box-2"></span>
                                                    <span className="shape-box-3"></span>
                                                    <span className="shape-box-4"></span>
                                                </div>
                                            </div>
                                            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                                                <div className="service__list">
                                                    <Link href="/service-details">
                                                        <div className="service__item animation_home1_service" data-service="1">
                                                            <div className="service__number"><span>01</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Web & Mobile
                                                                    Development</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div className="service__item  animation_home1_service" data-service="2">
                                                            <div className="service__number"><span>02</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Interaction <br />Design</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div className="service__item  animation_home1_service" data-service="3">
                                                            <div className="service__number"><span>03</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Digital <br />Maketing</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div className="service__item  animation_home1_service" data-service="4">
                                                            <div className="service__number"><span>04</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Branding and Strategy</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>
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