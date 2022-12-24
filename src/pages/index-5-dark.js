import Head from "next/head";
import Link from "next/link";
import Offcanvas from "../components/common/offcanvas";
import OffcanvasDark from "../components/common/offcanvasDark";
import SwitcherAreaDark from "../components/common/switcherAreaDark";

export default function Home5Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Agency Portfolio</title>

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
                <header className="header__area-5">
                    <div className="header__inner-5">
                        <div className="header__logo-5">
                            <Link href="/" className="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                            <Link href="/" className="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                        </div>
                        <div className="header__nav-icon-5">
                            <button id="open_offcanvas"><span className="menu-text-5">Menu</span><img src="assets/imgs/icon/menu-black.png"
                                alt="Menubar Icon" /></button>
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

                            <div className="home-wrapper-5">
                                {/* Hero area start  */}
                                <section className="hero__area-5">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="hero__content-5">
                                                    <h1 className="hero__title-5 animation__word_come">We work with top brands <br /> and industry &
                                                        We share <br /> our best works.</h1>
                                                    <div className="hero__text-5 text-anim">
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
                                <section className="portfolio__area-5">
                                    <div id="items__border"></div>

                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="portfolio__inner-5">
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/1.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/2.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/3.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/4.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/5.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/6.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/1.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio">
                                                        <img src="assets/imgs/portfolio/5/2.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio">
                                                        <img src="assets/imgs/portfolio/5/3.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio">
                                                        <img src="assets/imgs/portfolio/5/4.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/5.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="portfolio__item-5">
                                                    <Link href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/6.jpg" alt="Portfolio Image" />
                                                        <div className="portfolio__content-5">
                                                            <h2 className="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 className="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Portfolio area end  */}

                                {/* CTA area start  */}
                                <section className="cta__area-5 pt-130 pb-140">
                                    <div className="container-fluid">
                                        <div className="cta__inner-5">
                                            <div className="row">
                                                <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                                                    <div className="cta__content-5">
                                                        <h2 className="cta__title-5 title-anim">what we do for your <br /> brands</h2>
                                                        <div className="cta__list-wrapper">
                                                            <div className="cta__item-5">
                                                                <h3>Services</h3>
                                                                <ul className="cta__list-left">
                                                                    <li>User experience</li>
                                                                    <li>User interface</li>
                                                                    <li>CMS-System</li>
                                                                    <li>Webshop-System</li>
                                                                    <li>Native-Apps</li>
                                                                </ul>
                                                            </div>
                                                            <div className="cta__item-5">
                                                                <h3>Awards</h3>
                                                                <ul className="cta__list-right">
                                                                    <li> Awwwards - 2019</li>
                                                                    <li>Dribbble Winner - 2020</li>
                                                                    <li>Behance - 2021</li>
                                                                    <li>Ziber award - 2012</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                                                    <div className="cta__btn-5">
                                                        <Link className="btn-together" href="/contact">Let’s work together <span><i
                                                            className="fa-solid fa-arrow-right"></i></span></Link>
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
                        <footer className="footer__area-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <Link href="/" className="logo-dark"><img src="assets/imgs/icon/5/footer-logo-5-2.png"
                                            alt="Site Logo" /></Link>
                                        <Link href="/" className="logo-light"><img src="assets/imgs/icon/5/footer-logo-5.png"
                                            alt="Site Logo" /></Link>
                                        <ul className="footer__menu-5 menu-anim">
                                            <li><Link href="#">Facebook</Link></li>
                                            <li><Link href="#">Twitter</Link></li>
                                            <li><Link href="#">behance</Link></li>
                                            <li><Link href="#">Dribbble</Link></li>
                                        </ul>
                                        <div className="footer__copyright-4">
                                            <p>© 2022 - 2025 | Alrights reserved <br />by <Link href="https://themeforest.net/user/crowdyflow/portfolio"
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