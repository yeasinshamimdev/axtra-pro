import Head from "next/head";
import Link from "next/link";
import Offcanvas from "../components/offcanvas";
import SwitcherArea from "../components/switcherArea";

export default function Home5() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Agency Portfolio</title>

                {/* Fav Icon */}
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

                {/* Featured Work  */}
                <div class="cursor" id="portfolio4_cursor">View</div>

                {/* Header area start  */}
                <header class="header__area-5">
                    <div class="header__inner-5">
                        <div class="header__logo-5">
                            <Link href="/" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                            <Link href="/" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                        </div>
                        <div class="header__nav-icon-5">
                            <button id="open_offcanvas"><span class="menu-text-5">Menu</span><img src="assets/imgs/icon/menu-black.png"
                                alt="Menubar Icon" /></button>
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

                            <div class="home-wrapper-5">
                                {/* Hero area start  */}
                                <section class="hero__area-5">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-xxl-12">
                                                <div class="hero__content-5">
                                                    <h1 class="hero__title-5 animation__word_come">We work with top brands <br /> and industry &
                                                        We share <br /> our best works.</h1>
                                                    <div class="hero__text-5 text-anim">
                                                        <p>Leading creative agency with over years driving growth, brining
                                                            digital arts and engaging growing brands through bold something with us that matters the how to
                                                            best works.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <img src="assets/imgs/hero/5/hero-bg-5.png" alt="Shape Image" />
                                </section>
                                {/* Hero area end  */}

                                {/* Portfolio area start  */}
                                <section class="portfolio__area-5">
                                    <div id="items__border"> </div>

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="portfolio__inner-5">
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/1.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/2.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/3.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/4.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/5.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/6.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/7.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/8.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/9.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/1.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/2.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/3.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Portfolio area end  */}

                                {/* CTA area start  */}
                                <section class="cta__area-5 pt-130 pb-140">
                                    <div class="container-fluid">
                                        <div class="cta__inner-5">
                                            <div class="row">
                                                <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                                                    <div class="cta__content-5">
                                                        <h2 class="cta__title-5 title-anim">what we do for your <br /> brands</h2>
                                                        <div class="cta__list-wrapper">
                                                            <div class="cta__item-5">
                                                                <h3>Services</h3>
                                                                <ul class="cta__list-left">
                                                                    <li>User experience</li>
                                                                    <li>User interface</li>
                                                                    <li>CMS-System</li>
                                                                    <li>Webshop-System</li>
                                                                    <li>Native-Apps</li>
                                                                </ul>
                                                            </div>
                                                            <div class="cta__item-5">
                                                                <h3>Awards</h3>
                                                                <ul class="cta__list-right">
                                                                    <li> Awwwards - 2019</li>
                                                                    <li>Dribbble Winner - 2020</li>
                                                                    <li>Behance - 2021</li>
                                                                    <li>Ziber award - 2012</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                                                    <div class="cta__btn-5">
                                                        <Link class="btn-together" href="/contact">Let’s work together <span><i
                                                            class="fa-solid fa-arrow-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* CTA area end  */}


                            </div>
                        </main>


                        {/* Footer area start  */}
                        <footer class="footer__area-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xxl-12">
                                        <Link href="/" class="logo-dark"><img src="assets/imgs/icon/5/footer-logo-5-2.png"
                                            alt="Site Logo" /></Link>
                                        <Link href="/" class="logo-light"><img src="assets/imgs/icon/5/footer-logo-5.png"
                                            alt="Site Logo" /></Link>
                                        <ul class="footer__menu-5 menu-anim">
                                            <li><Link href="#">Facebook</Link></li>
                                            <li><Link href="#">Twitter</Link></li>
                                            <li><Link href="#">behance</Link></li>
                                            <li><Link href="#">Dribbble</Link></li>
                                        </ul>
                                        <div class="footer__copyright-4">
                                            <p>© 2022 - 2025 | Alrights reserved<br /> by <Link href="https://themeforest.net/user/crowdyflow/portfolio"
                                                target="_blank" rel="noreferrer">Crowdyflow</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        {/* Footer area end  */}

                    </div>
                </div>
            </main>
        </div>
    )
}