import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/common/ctaArea";
import Footer from "../components/common/footer";
import OffcanvasDark from "../components/common/offcanvasDark";
import SwitcherAreaDark from "../components/common/switcherAreaDark";

export default function ServiceDark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service - Axtra</title>

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

                            {/* Hero area start  */}
                            <section className="solution__area">
                                <div className="solution__wrapper">
                                    <div className="solution__left">
                                        <div className="solution__img-1">
                                            <img src="assets/imgs/thumb/solution.png" alt="Solution Image" />
                                        </div>
                                        <div className="solution__img-2">
                                            <img src="assets/imgs/thumb/solution-2.png" alt="Solution Image" />
                                        </div>
                                    </div>

                                    <div className="solution__mid">
                                        <h1 className="solution__title animation__char_come">Digital Solution</h1>
                                        <p>We’re designing digital experiences that enrich human lives and it helps to grow your business
                                            globally trends.</p>
                                    </div>

                                    <div className="solution__right">
                                        <div className="solution__img-3">
                                            <img src="assets/imgs/thumb/solution-3.png" alt="Solution Image" />
                                        </div>
                                    </div>
                                </div>

                                <div className="container pb-130">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="solution__btm">
                                                <ul>
                                                    <li>Approch</li>
                                                    <li>Creativity</li>
                                                    <li>Experienced</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="solution__shape">
                                    <img src="assets/imgs/icon/1.png" alt="Shape Image" className="shape-1" />
                                    <img src="assets/imgs/icon/2.png" alt="Shape Image" className="shape-2" />
                                    <img src="assets/imgs/icon/3.png" alt="Shape Image" className="shape-3" />
                                    <img src="assets/imgs/icon/4.png" alt="Shape Image" className="shape-4" />
                                    <img src="assets/imgs/icon/5.png" alt="Shape Image" className="shape-5" />
                                </div>
                            </section>
                            {/* Hero area end  */}


                            {/* Service area start  */}
                            <section className="service__area-6">
                                <div className="container">
                                    <div className="row inherit-row">
                                        <div className="col-xxl-12">
                                            <div className="content-wrapper">
                                                <div className="left-content">
                                                    <ul className="service__list-6">
                                                        <li className="active"><Link href="#service_1">Interaction <br />Design</Link></li>
                                                        <li><Link href="#service_2">Web & Mobile <br />Development</Link></li>
                                                        <li><Link href="#service_3">Motion & Branding <br />Design</Link></li>
                                                        <li><Link href="#service_4">Digital <br /> Maketing</Link></li>
                                                        <li><Link href="#service_5">Concept and <br />Strategy</Link></li>
                                                        <li><Link href="#service_6">Illustrations & <br /> Prototype</Link></li>
                                                    </ul>
                                                </div>

                                                <div className="mid-content">
                                                    <div className="service__image">
                                                        <img src="assets/imgs/service/1.jpg" alt="Service Image" />
                                                    </div>
                                                    <div className="service__image">
                                                        <img src="assets/imgs/service/2.jpg" alt="Service Image" />
                                                    </div>
                                                    <div className="service__image">
                                                        <img src="assets/imgs/service/3.jpg" alt="Service Image" />
                                                    </div>
                                                    <div className="service__image">
                                                        <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                    </div>
                                                    <div className="service__image">
                                                        <img src="assets/imgs/service/5.jpg" alt="Service Image" />
                                                    </div>
                                                    <div className="service__image">
                                                        <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="service__items-6">

                                                        <div className="service__item-6" id="service_1" data-secid="1">
                                                            <div className="image-tab">
                                                                <img src="assets/imgs/service/1.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 className="service__title-6 title-anim">User paths or user flows functional models</h2>
                                                                <p>This is the second workshop of the UX design methodology. Given all the conclusions drawn
                                                                    in
                                                                    the
                                                                    personae workshop, we will project ourselves towards the production of ideal user journeys.
                                                                    In
                                                                    other
                                                                    words: how each persona can achieve their goal.</p>
                                                                <ul>
                                                                    <li>+ API Development</li>
                                                                    <li>+ WordPress</li>
                                                                    <li>+ Cloud Migration</li>
                                                                    <li>+ Front End Development</li>
                                                                    <li>+ JavaScript</li>
                                                                    <li>+ Fluter Framework</li>
                                                                </ul>
                                                                <div id="btn_wrapper">
                                                                    <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="service__item-6" id="service_2" data-secid="2">
                                                            <div className="image-tab">
                                                                <img src="assets/imgs/service/2.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 className="service__title-6 title-anim">Web & Mobile Development</h2>
                                                                <p>This is the second workshop of the UX design methodology. Given all the conclusions drawn
                                                                    in
                                                                    the
                                                                    personae workshop, we will project ourselves towards the production of ideal user journeys.
                                                                    In
                                                                    other
                                                                    words: how each persona can achieve their goal.</p>
                                                                <ul>
                                                                    <li>+ API Development</li>
                                                                    <li>+ WordPress</li>
                                                                    <li>+ Cloud Migration</li>
                                                                    <li>+ Front End Development</li>
                                                                    <li>+ JavaScript</li>
                                                                    <li>+ Fluter Framework</li>
                                                                </ul>
                                                                <div id="btn_wrapper">
                                                                    <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="service__item-6" id="service_3" data-secid="3">

                                                            <div className="image-tab">
                                                                <img src="assets/imgs/service/3.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 className="service__title-6 title-anim">UMotion & Branding Design</h2>
                                                                <p>This is the second workshop of the UX design methodology. Given all the conclusions drawn
                                                                    in
                                                                    the
                                                                    personae workshop, we will project ourselves towards the production of ideal user journeys.
                                                                    In
                                                                    other
                                                                    words: how each persona can achieve their goal.</p>
                                                                <ul>
                                                                    <li>+ API Development</li>
                                                                    <li>+ WordPress</li>
                                                                    <li>+ Cloud Migration</li>
                                                                    <li>+ Front End Development</li>
                                                                    <li>+ JavaScript</li>
                                                                    <li>+ Fluter Framework</li>
                                                                </ul>
                                                                <div id="btn_wrapper">
                                                                    <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="s/ervice__item-6" id="service_4" data-secid="4">
                                                            <div className="image-tab">
                                                                <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 className="service__title-6 title-anim">User paths or user flows functional models</h2>
                                                                <p>This is the second workshop of the UX design methodology. Given all the conclusions drawn
                                                                    in
                                                                    the
                                                                    personae workshop, we will project ourselves towards the production of ideal user journeys.
                                                                    In
                                                                    other
                                                                    words: how each persona can achieve their goal.</p>
                                                                <ul>
                                                                    <li>+ API Development</li>
                                                                    <li>+ WordPress</li>
                                                                    <li>+ Cloud Migration</li>
                                                                    <li>+ Front End Development</li>
                                                                    <li>+ JavaScript</li>
                                                                    <li>+ Fluter Framework</li>
                                                                </ul>
                                                                <div id="btn_wrapper">
                                                                    <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="service__item-6" id="service_5" data-secid="5">
                                                            <div className="image-tab">
                                                                <img src="assets/imgs/service/5.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 className="service__title-6 title-anim">User paths or user flows functional models</h2>
                                                                <p>This is the second workshop of the UX design methodology. Given all the conclusions drawn
                                                                    in
                                                                    the
                                                                    personae workshop, we will project ourselves towards the production of ideal user journeys.
                                                                    In
                                                                    other
                                                                    words: how each persona can achieve their goal.</p>
                                                                <ul>
                                                                    <li>+ API Development</li>
                                                                    <li>+ WordPress</li>
                                                                    <li>+ Cloud Migration</li>
                                                                    <li>+ Front End Development</li>
                                                                    <li>+ JavaScript</li>
                                                                    <li>+ Fluter Framework</li>
                                                                </ul>
                                                                <div id="btn_wrapper">
                                                                    <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="service__item-6" id="service_6" data-secid="6">
                                                            <div className="image-tab">
                                                                <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 className="service__title-6 title-anim">Illustrations & Prototype</h2>
                                                                <p>This is the second workshop of the UX design methodology. Given all the conclusions drawn
                                                                    in
                                                                    the
                                                                    personae workshop, we will project ourselves towards the production of ideal user journeys.
                                                                    In
                                                                    other
                                                                    words: how each persona can achieve their goal.</p>
                                                                <ul>
                                                                    <li>+ API Development</li>
                                                                    <li>+ WordPress</li>
                                                                    <li>+ Cloud Migration</li>
                                                                    <li>+ Front End Development</li>
                                                                    <li>+ JavaScript</li>
                                                                    <li>+ Fluter Framework</li>
                                                                </ul>
                                                                <div id="btn_wrapper">
                                                                    <Link href="/service-details" className="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i className="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

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