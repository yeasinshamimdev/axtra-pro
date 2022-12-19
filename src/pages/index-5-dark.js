import Head from "next/head";

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
            </Head>
            <body class="dark">

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
                <div class="switcher__area">
                    <div class="switcher__icon">
                        <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
                        <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
                    </div>

                    <div class="switcher__items">
                        <div class="switcher__item">
                            <div class="switch__title-wrap">
                                <h2 class="switcher__title">Cursor</h2>
                            </div>
                            <div class="switcher__btn">
                                <select name="cursor-style" id="cursor_style">
                                    <option value="1">default</option>
                                    <option selected value="2">animated</option>
                                </select>
                            </div>
                        </div>

                        <div class="switcher__item">
                            <div class="switch__title-wrap">
                                <h2 class="switcher__title">mode</h2>
                            </div>
                            <div class="switcher__btn mode-type wc-col-2">
                                <button data-mode="light">light</button>
                                <button class="active" data-mode="dark">dark</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Switcher Area End  */}



                {/* Scroll Smoother  */}
                <div class="has-smooth" id="has_smooth"></div>


                {/* Go Top Button  */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


                {/* Header area start  */}
                <header class="header__area-5">
                    <div class="header__inner-5">
                        <div class="header__logo-5">
                            <a href="/index" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></a>
                            <a href="/index" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></a>
                        </div>
                        <div class="header__nav-icon-5">
                            <button id="open_offcanvas"><span class="menu-text-5">Menu</span><img src="assets/imgs/icon/menu-black.png"
                                alt="Menubar Icon" /></button>
                        </div>
                    </div>
                </header>
                {/* Header area end  */}


                {/* Offcanvas area start  */}
                <div class="offcanvas__area">
                    <div class="offcanvas__body">
                        <div class="offcanvas__left">
                            <div class="offcanvas__logo">
                                <a href="/index"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></a>
                            </div>
                            <div class="offcanvas__social">
                                <h3 class="social-title">Follow Us</h3>
                                <ul>
                                    <li><a href="#">Dribbble</a></li>
                                    <li><a href="#">Behance</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">YouTube</a></li>
                                </ul>
                            </div>
                            <div class="offcanvas__links">
                                <ul>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">contact</a></li>
                                    <li><a href="/career">Career</a></li>
                                    <li><a href="/blog">blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="offcanvas__mid">
                            <div class="offcanvas__menu-wrapper">
                                <nav class="offcanvas__menu">
                                    <ul class="menu-anim">
                                        <li><a>home</a>
                                            <ul>
                                                <li><a href="/index">Digital Maketing</a></li>
                                                <li><a href="/index-dark">Digital Maketing dark</a></li>
                                                <li><a href="/index-2">Design Studio </a></li>
                                                <li><a href="/index-2-dark">Design Studio dark</a></li>
                                                <li><a href="/index-3">Digital Agency</a></li>
                                                <li><a href="/index-3-dark">Digital Agency dark</a></li>
                                                <li><a href="/index-4">personal Portfolio</a></li>
                                                <li><a href="/index-4-dark">personal Portfolio dark</a></li>
                                                <li><a href="/index-5">portfolio showcase</a></li>
                                                <li><a href="/index-5-dark">portfolio showcase dark</a></li>
                                                <li><a href="/index-6">Startup Agency</a></li>
                                                <li><a href="/index-6-dark">Startup Agency dark</a></li>
                                                <li><a href="/index-7">creative Agency</a></li>
                                                <li><a href="/index-7-dark">creative Agency dark</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about">about</a></li>
                                        <li>
                                            <a>Service</a>
                                            <ul>
                                                <li><a href="/service">service</a></li>
                                                <li><a href="/service-dark">service dark</a></li>
                                                <li><a href="/service-2">service V.2</a></li>
                                                <li><a href="/service-2-dark">service V.2 dark</a></li>
                                                <li><a href="/service-3">service V.3</a></li>
                                                <li><a href="/service-3-dark">service V.3 dark</a></li>
                                                <li><a href="/service-4">service V.4</a></li>
                                                <li><a href="/service-4-dark">service V.4 dark</a></li>
                                                <li><a href="/service-5">service V.5</a></li>
                                                <li><a href="/service-5-dark">service V.5 dark</a></li>
                                                <li><a href="service-6.html">service V.6</a></li>
                                                <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                                <li><a href="/service-details">service details</a></li>
                                                <li><a href="/service-details-dark">service details dark</a></li>
                                            </ul>
                                        </li>
                                        <li><a>pages</a>
                                            <ul>
                                                <li>
                                                    <a>Home</a>
                                                    <ul>
                                                        <li><a href="/index">Digital Maketing</a></li>
                                                        <li><a href="/index-dark">Digital Maketing dark</a></li>
                                                        <li><a href="/index-2">Design Studio </a></li>
                                                        <li><a href="/index-2-dark">Design Studio dark</a></li>
                                                        <li><a href="/index-3">Digital Agency</a></li>
                                                        <li><a href="/index-3-dark">Digital Agency dark</a></li>
                                                        <li><a href="/index-4">personal Portfolio</a></li>
                                                        <li><a href="/index-4-dark">personal Portfolio dark</a></li>
                                                        <li><a href="/index-5">portfolio showcase</a></li>
                                                        <li><a href="/index-5-dark">portfolio showcase dark</a></li>
                                                        <li><a href="/index-6">Startup Agency</a></li>
                                                        <li><a href="/index-6-dark">Startup Agency dark</a></li>
                                                        <li><a href="/index-7">creative Agency</a></li>
                                                        <li><a href="/index-7-dark">creative Agency dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Service</a>
                                                    <ul>
                                                        <li><a href="/service">service</a></li>
                                                        <li><a href="/service-dark">service dark</a></li>
                                                        <li><a href="/service-2">service V.2</a></li>
                                                        <li><a href="/service-2-dark">service V.2 dark</a></li>
                                                        <li><a href="/service-3">service V.3</a></li>
                                                        <li><a href="/service-3-dark">service V.3 dark</a></li>
                                                        <li><a href="/service-4">service V.4</a></li>
                                                        <li><a href="/service-4-dark">service V.4 dark</a></li>
                                                        <li><a href="/service-5">service V.5</a></li>
                                                        <li><a href="/service-5-dark">service V.5 dark</a></li>
                                                        <li><a href="service-6.html">service V.6</a></li>
                                                        <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                                        <li><a href="/service-details">service details</a></li>
                                                        <li><a href="/service-details-dark">service details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>portfolio</a>
                                                    <ul>
                                                        <li><a href="/portfolio">portfolio</a></li>
                                                        <li><a href="/portfolio-dark">portfolio dark</a></li>
                                                        <li><a href="/portfolio-2">portfolio v.2</a></li>
                                                        <li><a href="/portfolio-2-dark">portfolio v.2 dark</a></li>
                                                        <li><a href="/portfolio-3">portfolio v.3</a></li>
                                                        <li><a href="/portfolio-3-dark">portfolio v.3 dark</a></li>
                                                        <li><a href="/portfolio-4">portfolio v.4</a></li>
                                                        <li><a href="/portfolio-4-dark">portfolio v.4 dark</a></li>
                                                        <li><a href="/portfolio-5">portfolio v.5</a></li>
                                                        <li><a href="/portfolio-5-dark">portfolio v.5 dark</a></li>
                                                        <li><a href="/portfolio-details">portfolio details</a></li>
                                                        <li><a href="/portfolio-details-dark">portfolio details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>team</a>
                                                    <ul>
                                                        <li><a href="/team">Team</a></li>
                                                        <li><a href="/team-dark">Team dark</a></li>
                                                        <li><a href="/team-details">Team Details</a></li>
                                                        <li><a href="/team-details-dark">Team Details dark</a></li>
                                                        <li><a href="/career">career</a></li>
                                                        <li><a href="/career-dark">career dark</a></li>
                                                        <li><a href="/job-details">job details</a></li>
                                                        <li><a href="/job-details-dark">job details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>blog</a>
                                                    <ul>
                                                        <li><a href="/blog">blog</a></li>
                                                        <li><a href="/blog-dark">blog dark</a></li>
                                                        <li><a href="/blog-2">blog v.2</a></li>
                                                        <li><a href="/blog-2-dark">blog v.2 dark</a></li>
                                                        <li><a href="/category">category</a></li>
                                                        <li><a href="/category-dark">category dark</a></li>
                                                        <li><a href="/blog-details">blog details</a></li>
                                                        <li><a href="/blog-details-dark">blog details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Others</a>
                                                    <ul>
                                                        <li><a href="/faq">FAQs</a></li>
                                                        <li><a href="/faq-dark">FAQs dark</a></li>
                                                        <li><a href="/contact">contact</a></li>
                                                        <li><a href="/contact-dark">contact dark</a></li>
                                                        <li><a href="/404">404</a></li>
                                                        <li><a href="/404-dark">404 dark</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a>blog</a>
                                            <ul>
                                                <li><a href="/blog">blog</a></li>
                                                <li><a href="/blog-dark">blog dark</a></li>
                                                <li><a href="/blog-2">blog v.2</a></li>
                                                <li><a href="/blog-2-dark">blog v.2 dark</a></li>
                                                <li><a href="/category">category</a></li>
                                                <li><a href="/category-dark">category dark</a></li>
                                                <li><a href="/blog-details">blog details</a></li>
                                                <li><a href="/blog-details-dark">blog details dark</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="offcanvas__right">
                            <div class="offcanvas__search">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Search keyword" />
                                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div class="offcanvas__contact">
                                <h3>Get in touch</h3>
                                <ul>
                                    <li><a href="tel:02094980547">+(02) - 094 980 547</a></li>
                                    <li><a href="mailto:info@extradesign.com">info@extradesign.com</a></li>
                                    <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                                </ul>
                            </div>
                            <img src="assets/imgs/shape/11.png" alt="shape" class="shape-1" />
                            <img src="assets/imgs/shape/12.png" alt="shape" class="shape-2" />
                        </div>
                        <div class="offcanvas__close">
                            <button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                </div>
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
                                    <div id="items__border"></div>

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="portfolio__inner-5">
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/1.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/2.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/3.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/4.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/5.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/6.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/1.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio">
                                                        <img src="assets/imgs/portfolio/5/2.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio">
                                                        <img src="assets/imgs/portfolio/5/3.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio">
                                                        <img src="assets/imgs/portfolio/5/4.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/5.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="portfolio__item-5">
                                                    <a href="/portfolio-details">
                                                        <img src="assets/imgs/portfolio/5/6.jpg" alt="Portfolio Image" />
                                                        <div class="portfolio__content-5">
                                                            <h2 class="portfolio__name-5">Design, Illustration</h2>
                                                            <h3 class="portfolio__title-5">Backov Human</h3>
                                                        </div>
                                                    </a>
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
                                                        <a class="btn-together" href="/contact">Let’s work together <span><i
                                                            class="fa-solid fa-arrow-right"></i></span></a>
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
                                        <a href="/index" class="logo-dark"><img src="assets/imgs/icon/5/footer-logo-5-2.png"
                                            alt="Site Logo" /></a>
                                        <a href="/index" class="logo-light"><img src="assets/imgs/icon/5/footer-logo-5.png"
                                            alt="Site Logo" /></a>
                                        <ul class="footer__menu-5 menu-anim">
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">behance</a></li>
                                            <li><a href="#">Dribbble</a></li>
                                        </ul>
                                        <div class="footer__copyright-4">
                                            <p>© 2022 - 2025 | Alrights reserved <br />by <a href="https://themeforest.net/user/crowdyflow/portfolio"
                                                target="_blank" rel="noreferrer">Crowdyflow</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        {/* Footer area end  */}

                    </div>
                </div>
            </body>
        </div>
    )
}