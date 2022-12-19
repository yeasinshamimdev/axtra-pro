import Head from "next/head";

export default function Home2Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Home - Design Studio</title>

                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>

            <main class="dark">

                {/* Cursor Animation */}
                <div class="cursor1"></div>
                <div class="cursor2"></div>


                {/* Preloader */}
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



                {/* Switcher Area Start */}
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
                {/* Switcher Area End */}



                {/* Scroll Smoother */}
                <div class="has-smooth" id="has_smooth"></div>


                {/* Go Top Button */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


                {/* Header area start */}
                <header class="header__area-2">
                    <div class="header__inner-2">
                        <div class="header__logo-2">
                            <a href="/index"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></a>
                        </div>
                        <div class="header__nav-2">
                            <ul class="main-menu menu-anim">
                                <li><a href="#">home</a>
                                    <ul class="mega-menu-2">
                                        <li>
                                            <ul>
                                                <li><a href="/index">Digital Maketing</a></li>
                                                <li><a href="/index-dark">Digital Maketing dark</a></li>
                                                <li><a href="/index-2">Design Studio </a></li>
                                                <li><a href="/index-2-dark">Design Studio dark</a></li>
                                                <li><a href="/index-3">Digital Agency</a></li>
                                                <li><a href="/index-3-dark">Digital Agency dark</a></li>
                                                <li><a href="/index-4">personal Portfolio</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="/index-4-dark">personal Portfolio dark</a></li>
                                                <li><a href="/index-5">portfolio showcase</a></li>
                                                <li><a href="/index-5-dark">portfolio showcase dark</a></li>
                                                <li><a href="/index-6">Startup Agency</a></li>
                                                <li><a href="/index-6-dark">Startup Agency dark</a></li>
                                                <li><a href="/index-7">creative Agency</a></li>
                                                <li><a href="/index-7-dark">creative Agency dark</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/about">About</a></li>
                                <li class="has-megamenu"><a href="/about">Pages</a>
                                    <ul class="mega-menu">
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
                                <li><a href="/portfolio">services</a>
                                    <ul class="main-dropdown">
                                        <li><a href="/service">service</a>
                                            <ul class="sub-dropdown">
                                                <li><a href="/service-dark">service dark</a></li>
                                                <li><a href="/service-2-dark">service V.2 dark</a></li>
                                                <li><a href="/service-3-dark">service V.3 dark</a></li>
                                                <li><a href="/service-4-dark">service V.4 dark</a></li>
                                                <li><a href="/service-5-dark">service V.5 dark</a></li>
                                                <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                                <li><a href="/service-details-dark">service details dark</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/service-2">service V.2</a></li>
                                        <li><a href="/service-3">service V.3</a></li>
                                        <li><a href="/service-4">service V.4</a></li>
                                        <li><a href="/service-5">service V.5</a></li>
                                        <li><a href="service-6.html">service V.6</a></li>
                                        <li><a href="/service-details">service details</a></li>
                                    </ul>
                                </li>
                                <li><a href="/team">team</a>
                                    <ul class="main-dropdown">
                                        <li><a href="/team">team</a></li>
                                        <li><a href="/team-details">team details</a></li>
                                    </ul>
                                </li>
                                <li><a href="/blog">Blog</a>
                                    <ul class="main-dropdown">
                                        <li><a href="/blog">blog</a></li>
                                        <li><a href="/blog-2">blog v.2</a></li>
                                        <li><a href="/category">category</a></li>
                                        <li><a href="/blog-details">blog details</a></li>
                                    </ul>
                                </li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="header__nav-icon-2">
                            <button class="menu-icon-2" id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                        </div>
                    </div>
                </header>
                {/* Header area end */}


                {/* Offcanvas area start */}
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
                {/* Offcanvas area end */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start */}
                            <section class="hero__area-2">
                                <div class="hero__inner-2">
                                    <div class="sec-title-wrapper">
                                        <h2 class="sec-title-3 bg-shape">We Design <br />Unique</h2>
                                        <h2 class="sec-title-3">Digital <br />Experience</h2>
                                    </div>
                                    <div class="hero__text-2">
                                        <p>Thinking, writing and planning with brand are just a of what we do. For
                                            more than 10 years, It’s more
                                            competitive space for agency.</p>
                                        <div id="btn_wrapper" class="hero__button">
                                            <a href="/service" class="wc-btn-pink btn-hover btn-item"><span></span>
                                                Explore <br />our services <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero2-shape">
                                    <img src="assets/imgs/bg/arrow-long.png" alt="BG Shape" />
                                </div>
                            </section>
                            {/* Hero area end */}


                            {/* Feature area start */}
                            <section class="feature__area-2 pt-130">
                                <div class="feature__top">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                                <div class="sec-title-wrapper">
                                                    <h2 class="sec-title title-anim">Features are more helpful to create creative shapes as well.</h2>
                                                </div>
                                            </div>
                                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                                <div class="feature__text text-anim">
                                                    <p>We are constantly rethinking the future by creating the next generation of products, brands and
                                                        services from a hybrid perspective. The unthinkable today becomes inevitable.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="feature__btm">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xxl-12">
                                                <div class="feature__list animation__feature2">
                                                    <div class="feature__item">
                                                        <img src="assets/imgs/feature/icon/1.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Branding</h3>
                                                        <p>Having these marketplace to your branded skilled team of designers and developers who
                                                            embracement
                                                            perfection.</p>
                                                    </div>
                                                    <div class="feature__item">
                                                        <img src="assets/imgs/feature/icon/2.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Optimum</h3>
                                                        <p>Brand identity design a the key to success whether you breath rebranding an existing business
                                                            or
                                                            creating a business</p>
                                                    </div>
                                                    <div class="feature__item">
                                                        <img class="" src="assets/imgs/feature/icon/3.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Thinking</h3>
                                                        <p>Creative typography plays the big role to pull off this trending more effectively with the
                                                            thinking use a thicker point</p>
                                                    </div>
                                                    <div class="feature__item">
                                                        <img src="assets/imgs/feature/icon/4.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Execution</h3>
                                                        <p>Stricky with multiple shades of the colours. However, this type of alone can look awesome
                                                            forever
                                                            an online business</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Feature area end */}


                            {/* Roll area start */}
                            <section class="roll__area-2">
                                <div class="swiper roll__slider">
                                    <div class="swiper-wrapper roll__wrapper">
                                        <div class="swiper-slide roll__slide">
                                            <h2>Development</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Studio</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>typhography</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Design</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Element</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Roll area end */}


                            {/* Roll area start */}
                            <section class="roll__area-3">
                                <div dir="rtl" class="swiper roll__slider">
                                    <div class="swiper-wrapper roll__wrapper">
                                        <div class="swiper-slide roll__slide ">
                                            <h2>Development</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Studio</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>typhography</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Design</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Element</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Roll area end */}


                            {/* Portfolio area start */}
                            <section class="portfolio__area-2">
                                <div class="container g-0 line pt-100 pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper text-anim">
                                                <h2 class="sec-title-3 title-anim">Selected <span>Projects</span></h2>
                                                <p class="sec-text">Worked with global brands & agency at the
                                                    intersection of flat design and digital
                                                    technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper portfolio__slider-2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <a href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <a href="/portfolio-details">Lionpro <span>Agency</span></a>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <a href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <a href="/portfolio-details"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"><a href="/portfolio-details">crodyflw <span>Website</span></a>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <a href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <a href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <a href="/portfolio-details">developers
                                                        <span>digital</span></a></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <a href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <a href="/portfolio-details"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <a href="/portfolio-details">Lionpro
                                                        <span>marketeers</span></a></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <a href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <a href="/portfolio-details"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <a href="/portfolio-details">Lionpro <span>Agency</span></a>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <a href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="portfolio__slider-2-pagination--">
                                        <div class="swiper-pagination circle-pagination right"></div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end */}


                            {/* About area start */}
                            <section class="about__area-2">
                                <div class="container pt-130 pb-110">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">We design and develop
                                                    outstanding Digital <br /> Products
                                                    and digital-first Brands.</h2>
                                            </div>
                                            <div class="sec-text-wrapper">
                                                <div class="sec-text text-anim">
                                                    <p>We help brands stand out through powerful, elegant visual design. Our design philosophy is shaped
                                                        by our experience growing up at our father’s bookbindery. Surrounded by the highest-quality
                                                        materials and turn-of-the-century machines, we observed the art of true craftsmanship firsthand.
                                                    </p>
                                                </div>
                                                <div id="btn_wrapper" class="sec-btn">
                                                    <a class="wc-btn-pink btn-hover btn-item" href="/about"><span></span> Explore Us <i
                                                        class="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="about__img-2 pb-130">
                                    <img src="assets/imgs/about/2/1.jpg" alt="About Image" data-speed="0.2" />
                                </div>

                                <div class="container pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <h2 class="brand__title-2 title-anim">We worked with global largest brands
                                            </h2>
                                            <div class="brand__list-2">
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
                            {/* About area end */}


                            {/* Service area start */}
                            <section class="service__area-2 pt-130 pb-110">
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
                                            </div>
                                        </div>
                                        <div class="col-xxl-12">
                                            <div id="btn_wrapper" class="service__btn-2">
                                                <a href="/service" class="wc-btn-pink btn-hover btn-item"><span></span> View <br />all services
                                                    <i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Service area end */}


                            {/* Award area start */}
                            <section class="award__area pt-130 pb-140">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper pb-140">
                                                <h2 class="sec-title title-anim">We’re nominated as Agency of
                                                    the Year amongst best
                                                    Digital Agencies
                                                    Worldwide.</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="award__left">
                                                <h4 class="award__text-2">award</h4>
                                                <h3 class="award__text">award</h3>
                                                <img src="assets/imgs/shape/3.png" alt="Shape Image" data-speed="1" data-lag="0.2" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="award__right">
                                                <p>We’re passionate about doing the best digital
                                                    innovation we can and pushing new
                                                    technology
                                                    to its limits. And we achieve
                                                    results we’re proud of beyond the realm.</p>
                                                <div class="award__list">
                                                    <div class="award__item">
                                                        <p>Dribbble</p>
                                                        <p>Nominee</p>
                                                        <p>2021</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Behance</p>
                                                        <p>Winner</p>
                                                        <p>2020</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Template UI</p>
                                                        <p>Nominee</p>
                                                        <p>2018</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Awwwards</p>
                                                        <p>Winner</p>
                                                        <p>2016</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Themeforest</p>
                                                        <p>Winner</p>
                                                        <p>2012</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Award area end */}


                            {/* CTA area start */}
                            <section class="cta__area-2">
                                <div class="container line pt-130 pb-120">
                                    <div class="line-3"></div>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="cta__content-2">
                                                <p class="cta__sub-title-2 title-anim">Have you project in mind?</p>
                                                <h2 class="cta__title-2 title-anim">Let’s make something
                                                    great together!</h2>
                                                <div id="btn_wrapper">
                                                    <a href="/contact" class="wc-btn-pink btn-hover btn-item"><span></span>Contact <br />with us <i
                                                        class="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* CTA area end */}


                            {/* Blog area start */}
                            <section class="blog__area-2 blog__animation">
                                <div class="container g-0 pt-150 pb-110">
                                    <div class="row ">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">Updated Journal</h2>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-4">
                                            <div class="sec-text text-anim">
                                                <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-3 col-md-4">
                                            <div id="btn_wrapper" class="sec-btn">
                                                <a href="/blog" class="wc-btn-pink btn-hover btn-item"><span></span> Read <br />all journal <i
                                                    class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item-2">
                                                <div class="blog__img-wrapper">
                                                    <a href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <h4 class="blog__meta-2"><a href="/category">UI Design</a> . 02 May 2019</h4>
                                                <h5><a href="/blog-details" class="blog__title-2">Ways of lying to yourself about your
                                                    new relationship.</a></h5>
                                            </article>
                                        </div>

                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item-2">
                                                <div class="blog__img-wrapper">
                                                    <a href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <h4 class="blog__meta-2"><a href="/category">UI Design</a> . 02 May 2019</h4>
                                                <h5><a href="/blog-details" class="blog__title-2">How to manage a talented and
                                                    successful de sign team</a></h5>
                                            </article>
                                        </div>

                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item-2">
                                                <div class="blog__img-wrapper">
                                                    <a href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <h4 class="blog__meta-2"><a href="/category">UI Design</a> . 02 May 2019</h4>
                                                <h5><a href="/blog-details" class="blog__title-2">How to bring fold to your startup
                                                    company with Axtra</a></h5>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Blog area end */}

                        </main>



                        {/* Footer area start */}
                        <footer class="footer__area-2 pt-130">
                            <div class="container">
                                <div class="footer__top-2 text-anim">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <h2 class="sec-title-3 title-anim">Get started <br /> now</h2>
                                            <p class="footer__sub-title">If you would like to work with us or
                                                just want to get in touch, we’d love
                                                to hear from you!</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="footer__middle-2">
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="footer__location-2">
                                                <div class="location">
                                                    <h3>London</h3>
                                                    <p>Baltia Squar, Mark Street, <br />
                                                        London</p>
                                                </div>
                                                <div class="location">
                                                    <h3>New York</h3>
                                                    <p>Nenuya Centre, Elia Street <br />
                                                        New York, USA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="footer__subscribe-2">
                                                <form action="#">
                                                    <input type="text" name="email" placeholder="Enter your email" />
                                                    <button type="submit" class="submit"><img src="assets/imgs/icon/arrow-black.png"
                                                        alt="Arrow Icon" /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="footer__btm-2">
                                    <div class="row">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                            <div class="footer__copyright-2">
                                                <p>© 2022 - 2025 | Alrights reserved by <a href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                            <div class="footer__nav">
                                                <ul class="footer-menu menu-anim">
                                                    <li><a href="/about">about us</a></li>
                                                    <li><a href="/contact">contact</a></li>
                                                    <li><a href="/career">Career</a></li>
                                                    <li><a href="/faq">FAQs</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        {/* Footer area end */}


                    </div>
                </div>
            </main>
        </div>
    )
}