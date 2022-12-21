import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/ctaArea";
import Footer from "../components/footer";
import OffcanvasDark from "../components/offcanvasDark";
import SwitcherAreaDark from "../components/switcherAreaDark";

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

                            {/* Hero area start  */}
                            <section class="solution__area">
                                <div class="solution__wrapper">
                                    <div class="solution__left">
                                        <div class="solution__img-1">
                                            <img src="assets/imgs/thumb/solution.png" alt="Solution Image" />
                                        </div>
                                        <div class="solution__img-2">
                                            <img src="assets/imgs/thumb/solution-2.png" alt="Solution Image" />
                                        </div>
                                    </div>

                                    <div class="solution__mid">
                                        <h1 class="solution__title animation__char_come">Digital Solution</h1>
                                        <p>We’re designing digital experiences that enrich human lives and it helps to grow your business
                                            globally trends.</p>
                                    </div>

                                    <div class="solution__right">
                                        <div class="solution__img-3">
                                            <img src="assets/imgs/thumb/solution-3.png" alt="Solution Image" />
                                        </div>
                                    </div>
                                </div>

                                <div class="container pb-130">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="solution__btm">
                                                <ul>
                                                    <li>Approch</li>
                                                    <li>Creativity</li>
                                                    <li>Experienced</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="solution__shape">
                                    <img src="assets/imgs/icon/1.png" alt="Shape Image" class="shape-1" />
                                    <img src="assets/imgs/icon/2.png" alt="Shape Image" class="shape-2" />
                                    <img src="assets/imgs/icon/3.png" alt="Shape Image" class="shape-3" />
                                    <img src="assets/imgs/icon/4.png" alt="Shape Image" class="shape-4" />
                                    <img src="assets/imgs/icon/5.png" alt="Shape Image" class="shape-5" />
                                </div>
                            </section>
                            {/* Hero area end  */}


                            {/* Service area start  */}
                            <section class="service__area-6">
                                <div class="container">
                                    <div class="row inherit-row">
                                        <div class="col-xxl-12">
                                            <div class="content-wrapper">
                                                <div class="left-content">
                                                    <ul class="service__list-6">
                                                        <li class="active"><Link href="#service_1">Interaction <br />Design</Link></li>
                                                        <li><Link href="#service_2">Web & Mobile <br />Development</Link></li>
                                                        <li><Link href="#service_3">Motion & Branding <br />Design</Link></li>
                                                        <li><Link href="#service_4">Digital <br /> Maketing</Link></li>
                                                        <li><Link href="#service_5">Concept and <br />Strategy</Link></li>
                                                        <li><Link href="#service_6">Illustrations & <br /> Prototype</Link></li>
                                                    </ul>
                                                </div>

                                                <div class="mid-content">
                                                    <div class="service__image">
                                                        <img src="assets/imgs/service/1.jpg" alt="Service Image" />
                                                    </div>
                                                    <div class="service__image">
                                                        <img src="assets/imgs/service/2.jpg" alt="Service Image" />
                                                    </div>
                                                    <div class="service__image">
                                                        <img src="assets/imgs/service/3.jpg" alt="Service Image" />
                                                    </div>
                                                    <div class="service__image">
                                                        <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                    </div>
                                                    <div class="service__image">
                                                        <img src="assets/imgs/service/5.jpg" alt="Service Image" />
                                                    </div>
                                                    <div class="service__image">
                                                        <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                    </div>
                                                </div>

                                                <div class="right-content">
                                                    <div class="service__items-6">

                                                        <div class="service__item-6" id="service_1" data-secid="1">
                                                            <div class="image-tab">
                                                                <img src="assets/imgs/service/1.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 class="service__title-6 title-anim">User paths or user flows functional models</h2>
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
                                                                    <Link href="/service-details" class="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i class="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="service__item-6" id="service_2" data-secid="2">
                                                            <div class="image-tab">
                                                                <img src="assets/imgs/service/2.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 class="service__title-6 title-anim">Web & Mobile Development</h2>
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
                                                                    <Link href="/service-details" class="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i class="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="service__item-6" id="service_3" data-secid="3">

                                                            <div class="image-tab">
                                                                <img src="assets/imgs/service/3.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 class="service__title-6 title-anim">UMotion & Branding Design</h2>
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
                                                                    <Link href="/service-details" class="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i class="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="s/ervice__item-6" id="service_4" data-secid="4">
                                                            <div class="image-tab">
                                                                <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 class="service__title-6 title-anim">User paths or user flows functional models</h2>
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
                                                                    <Link href="/service-details" class="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i class="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="service__item-6" id="service_5" data-secid="5">
                                                            <div class="image-tab">
                                                                <img src="assets/imgs/service/5.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 class="service__title-6 title-anim">User paths or user flows functional models</h2>
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
                                                                    <Link href="/service-details" class="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i class="fa-solid fa-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="service__item-6" id="service_6" data-secid="6">
                                                            <div class="image-tab">
                                                                <img src="assets/imgs/service/4.jpg" alt="Service Image" />
                                                            </div>

                                                            <div>
                                                                <h2 class="service__title-6 title-anim">Illustrations & Prototype</h2>
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
                                                                    <Link href="/service-details" class="wc-btn-secondary btn-item btn-hover"><span></span>Get
                                                                        free
                                                                        <br />qoutes <i class="fa-solid fa-arrow-right"></i></Link>
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