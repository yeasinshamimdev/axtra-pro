import Head from "next/head";

export default function Home4() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio 2</title>

                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
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
                                <button class="active" data-mode="light">light</button>
                                <button data-mode="dark">dark</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <div class="has-smooth" id="has_smooth"></div>

                {/* Go Top Button  */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


                {/* Porfolio Cursor  */}
                <div class="cursor large" id="portf_cursor_6">View <br />Project</div>
                {/* Header area start  */}


                <header class="header__area-2">
                    <div class="header__inner-5">
                        <div class="header__logo-5">
                            <Link href="/" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></a>
                            <Link href="/" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></a>
                        </div>
                        <div class="header__nav-icon-5">
                            <button id="open_offcanvas"><span class="menu-text-pp">Menu</span><img src="assets/imgs/icon/menu-black.png"
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
                                <Link href="/"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></a>
                            </div>
                            <div class="offcanvas__social">
                                <h3 class="social-title">Follow Us</h3>
                                <ul>
                                    <li><Link href="#">Dribbble</Link></li>
                                    <li><Link href="#">Behance</Link></li>
                                    <li><Link href="#">Instagram</Link></li>
                                    <li><Link href="#">Facebook</Link></li>
                                    <li><Link href="#">Twitter</Link></li>
                                    <li><Link href="#">YouTube</Link></li>
                                </ul>
                            </div>
                            <div class="offcanvas__links">
                                <ul>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/contact">contact</Link></li>
                                    <li><Link href="/career">Career</Link></li>
                                    <li><Link href="/blog">blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="offcanvas__mid">
                            <div class="offcanvas__menu-wrapper">
                                <nav class="offcanvas__menu">
                                    <ul class="menu-anim">
                                        <li><a>home</a>
                                            <ul>
                                                <li><Link href="/">Digital Maketing</Link></li>
                                                <li><Link href="/index-dark">Digital Maketing dark</Link></li>
                                                <li><Link href="/index-2">Design Studio </Link></li>
                                                <li><Link href="/index-2-dark">Design Studio dark</Link></li>
                                                <li><Link href="/index-3">Digital Agency</Link></li>
                                                <li><Link href="/index-3-dark">Digital Agency dark</Link></li>
                                                <li><Link href="/index-4">personal Portfolio</Link></li>
                                                <li><Link href="/index-4-dark">personal Portfolio dark</Link></li>
                                                <li><Link href="/index-5">portfolio showcase</Link></li>
                                                <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                                <li><Link href="/index-6">Startup Agency</Link></li>
                                                <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                                <li><Link href="/index-7">creative Agency</Link></li>
                                                <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/about">about</Link></li>
                                        <li>
                                            <a>Service</a>
                                            <ul>
                                                <li><Link href="/service">service</Link></li>
                                                <li><Link href="/service-dark">service dark</Link></li>
                                                <li><Link href="/service-2">service V.2</Link></li>
                                                <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                                <li><Link href="/service-3">service V.3</Link></li>
                                                <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                                <li><Link href="/service-4">service V.4</Link></li>
                                                <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                                <li><Link href="/service-5">service V.5</Link></li>
                                                <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                                <li><Link href="service-6.html">service V.6</Link></li>
                                                <li><Link href="service-6-dark.html">service V.6 dark</Link></li>
                                                <li><Link href="/service-details">service details</Link></li>
                                                <li><Link href="/service-details-dark">service details dark</Link></li>
                                            </ul>
                                        </li>
                                        <li><a>pages</a>
                                            <ul>
                                                <li>
                                                    <a>Home</a>
                                                    <ul>
                                                        <li><Link href="/">Digital Maketing</Link></li>
                                                        <li><Link href="/index-dark">Digital Maketing dark</Link></li>
                                                        <li><Link href="/index-2">Design Studio </Link></li>
                                                        <li><Link href="/index-2-dark">Design Studio dark</Link></li>
                                                        <li><Link href="/index-3">Digital Agency</Link></li>
                                                        <li><Link href="/index-3-dark">Digital Agency dark</Link></li>
                                                        <li><Link href="/index-4">personal Portfolio</Link></li>
                                                        <li><Link href="/index-4-dark">personal Portfolio dark</Link></li>
                                                        <li><Link href="/index-5">portfolio showcase</Link></li>
                                                        <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                                        <li><Link href="/index-6">Startup Agency</Link></li>
                                                        <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                                        <li><Link href="/index-7">creative Agency</Link></li>
                                                        <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Service</a>
                                                    <ul>
                                                        <li><Link href="/service">service</Link></li>
                                                        <li><Link href="/service-dark">service dark</Link></li>
                                                        <li><Link href="/service-2">service V.2</Link></li>
                                                        <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                                        <li><Link href="/service-3">service V.3</Link></li>
                                                        <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                                        <li><Link href="/service-4">service V.4</Link></li>
                                                        <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                                        <li><Link href="/service-5">service V.5</Link></li>
                                                        <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                                        <li><Link href="service-6.html">service V.6</Link></li>
                                                        <li><Link href="service-6-dark.html">service V.6 dark</Link></li>
                                                        <li><Link href="/service-details">service details</Link></li>
                                                        <li><Link href="/service-details-dark">service details dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>portfolio</a>
                                                    <ul>
                                                        <li><Link href="/portfolio">portfolio</Link></li>
                                                        <li><Link href="/portfolio-dark">portfolio dark</Link></li>
                                                        <li><Link href="/portfolio-2">portfolio v.2</Link></li>
                                                        <li><Link href="/portfolio-2-dark">portfolio v.2 dark</Link></li>
                                                        <li><Link href="/portfolio-3">portfolio v.3</Link></li>
                                                        <li><Link href="/portfolio-3-dark">portfolio v.3 dark</Link></li>
                                                        <li><Link href="/portfolio-4">portfolio v.4</Link></li>
                                                        <li><Link href="/portfolio-4-dark">portfolio v.4 dark</Link></li>
                                                        <li><Link href="/portfolio-5">portfolio v.5</Link></li>
                                                        <li><Link href="/portfolio-5-dark">portfolio v.5 dark</Link></li>
                                                        <li><Link href="/portfolio-details">portfolio details</Link></li>
                                                        <li><Link href="/portfolio-details-dark">portfolio details dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>team</a>
                                                    <ul>
                                                        <li><Link href="/team">Team</Link></li>
                                                        <li><Link href="/team-dark">Team dark</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                        <li><Link href="/team-details-dark">Team Details dark</Link></li>
                                                        <li><Link href="/career">career</Link></li>
                                                        <li><Link href="/career-dark">career dark</Link></li>
                                                        <li><Link href="/job-details">job details</Link></li>
                                                        <li><Link href="/job-details-dark">job details dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>blog</a>
                                                    <ul>
                                                        <li><Link href="/blog">blog</Link></li>
                                                        <li><Link href="/blog-dark">blog dark</Link></li>
                                                        <li><Link href="/blog-2">blog v.2</Link></li>
                                                        <li><Link href="/blog-2-dark">blog v.2 dark</Link></li>
                                                        <li><Link href="/category">category</Link></li>
                                                        <li><Link href="/category-dark">category dark</Link></li>
                                                        <li><Link href="/blog-details">blog details</Link></li>
                                                        <li><Link href="/blog-details-dark">blog details dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Others</a>
                                                    <ul>
                                                        <li><Link href="/faq">FAQs</Link></li>
                                                        <li><Link href="/faq-dark">FAQs dark</Link></li>
                                                        <li><Link href="/contact">contact</Link></li>
                                                        <li><Link href="/contact-dark">contact dark</Link></li>
                                                        <li><Link href="/404">404</Link></li>
                                                        <li><Link href="/404-dark">404 dark</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a>blog</a>
                                            <ul>
                                                <li><Link href="/blog">blog</Link></li>
                                                <li><Link href="/blog-dark">blog dark</Link></li>
                                                <li><Link href="/blog-2">blog v.2</Link></li>
                                                <li><Link href="/blog-2-dark">blog v.2 dark</Link></li>
                                                <li><Link href="/category">category</Link></li>
                                                <li><Link href="/category-dark">category dark</Link></li>
                                                <li><Link href="/blog-details">blog details</Link></li>
                                                <li><Link href="/blog-details-dark">blog details dark</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">contact</Link></li>
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
                                    <li><Link href="tel:02094980547">+(02) - 094 980 547</Link></li>
                                    <li><Link href="mailto:info@extradesign.com">info@extradesign.com</Link></li>
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

                            <div class="portfolio__page">
                                <div class="swiper portfolio__main-slider">
                                    <div class="swiper-wrapper portfolio__main-wrapper">
                                        <div class="swiper-slide">
                                            <section class="portfolio__hero-area portfolio-section">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-xxl-12">
                                                            <div class="portfolio__hero">
                                                                <h1 class="title shape-circle">Full stack</h1>
                                                                <h2 class="title text-stroke">Web & Mobile</h2>
                                                                <h2 class="title">developer</h2>
                                                                <div class="btn-wrapper">
                                                                    <Link href="/portfolio" class="wc-btn-dark">View all work</a>
                                                                </div>
                                                                <img src="assets/imgs/portfolio/1.png" alt="Personal Portfolio" class="pp-thumb" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>

                                        <div class="swiper-slide">
                                            <section class="portfolio-section portfolio__about pt-140 pb-150">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-xxl-8 col-xxl-8 col-lg-8">
                                                            <div class="portfolio__about-left">
                                                                <h2 class="sec-title">
                                                                    I craft wonderful <span>digital experiences</span> for brands
                                                                </h2>
                                                                <img src="assets/imgs/shape/16.png" alt="Shape" />
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-4 col-xl-4 col-lg-4">
                                                            <div class="sec-text">
                                                                <p>Based in Washington, DC, I work with experts from the Center for Strategic and
                                                                    International
                                                                    Studies (CSIS) to help them communicate their research more effectively on the web.
                                                                    Together we
                                                                    make websites, data visualizations, and long-forms that strengthen their networks and
                                                                    engage new
                                                                    audiences with thoughtful content and design strategies.</p>
                                                                <Link href="/about" class="wc-btn-dark">Explore Me</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="about-row">
                                                        <div class="row">
                                                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                                                                <div class="brand-title-wrap">
                                                                    <h3 class="brand-title">worked with global largest brands</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                                                                <div class="brand-list">
                                                                    <div class="brand-logo">
                                                                        <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                                    </div>
                                                                    <div class="brand-logo">
                                                                        <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                                    </div>
                                                                    <div class="brand-logo">
                                                                        <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                                    </div>
                                                                    <div class="brand-logo">
                                                                        <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>

                                        <div class="swiper-slide">
                                            <section class="portfolio-section portfolio__project">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-xxl-12">
                                                            <div class="pp-title-wrap">
                                                                <h2 class="pp-title">Selected <br /> Work</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                                                            <div class="pp-slider-wrapper">
                                                                <div class="swiper portfolio__project-slider">
                                                                    <div class="swiper-wrapper">
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/1.jpg"
                                                                                    alt="Portfolio Thumbnail" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg"
                                                                                    alt="Portfolio Thumbnail" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg"
                                                                                    alt="Portfolio Thumbnail" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg"
                                                                                    alt="Portfolio Thumbnail" /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="pp-next swipper-btn">prev</div>
                                                                <div class="pp-prev swipper-btn">Next</div>
                                                            </div>
                                                        </div>

                                                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                                                            <div class="swiper portfolio__project-thumbs">
                                                                <div class="swiper-wrapper">
                                                                    <div class="swiper-slide">
                                                                        <div class="pp-slide-thumb">
                                                                            <h3 class="pp-slide-title">Apple book cover</h3>
                                                                            <p>March 2021</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="swiper-slide">
                                                                        <div class="pp-slide-thumb">
                                                                            <h3 class="pp-slide-title">Apple book cover</h3>
                                                                            <p>March 2021</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="swiper-slide">
                                                                        <div class="pp-slide-thumb">
                                                                            <h3 class="pp-slide-title">Apple book cover</h3>
                                                                            <p>March 2021</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="swiper-slide">
                                                                        <div class="pp-slide-thumb">
                                                                            <h3 class="pp-slide-title">Apple book cover</h3>
                                                                            <p>March 2021</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section>
                                        </div>

                                        <div class="swiper-slide">
                                            <section class="portfolio-section portfolio__service pt-140 pb-140">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                                            <h2 class="sec-title"> I MAKE
                                                                THE Service
                                                                BETTER.</h2>
                                                        </div>
                                                        <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                                            <div class="sec-text">
                                                                <p>Static and dynamic secure code review can prevent a 0day before your product is even
                                                                    released. We
                                                                    can integrate with your dev environment</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="portfolio__service-list">
                                                        <div class="row">
                                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                                <div class="portfolio__service-item">
                                                                    <Link href="/service-details">
                                                                        <h3 class="ps-title">Frontend <br /> Developemnt</h3>
                                                                        <ul>
                                                                            <li>+ WordPress</li>
                                                                            <li>+ Python</li>
                                                                            <li>+ PHP & Laravel</li>
                                                                        </ul>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                                <div class="portfolio__service-item">
                                                                    <Link href="/service-details">
                                                                        <h3 class="ps-title">Backend<br /> Developemnt</h3>
                                                                        <ul>
                                                                            <li>+ WordPress</li>
                                                                            <li>+ Python</li>
                                                                            <li>+ PHP & Laravel</li>
                                                                        </ul>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                                <div class="portfolio__service-item">
                                                                    <Link href="/service-details">
                                                                        <h3 class="ps-title">Android<br /> Developemnt</h3>
                                                                        <ul>
                                                                            <li>+ WordPress</li>
                                                                            <li>+ Python</li>
                                                                            <li>+ PHP & Laravel</li>
                                                                        </ul>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xxl-12">
                                                            <div class="ps-btn">
                                                                <Link href="/contact">Call me to get more extra service <strong>call now</strong></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>

                                        <div class="swiper-slide">
                                            <section class="portfolio-section portfolio__footer-area  pt-130">

                                                {/* Contact area start  */}
                                                <div class="">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                                <div class="sec-title-wrapper">
                                                                    <h2 class="pf-title">Let’s get in touch 🤟</h2>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                                <div class="contact__text">
                                                                    <p>Great! We’re excited to hear from you and let’s start
                                                                        something special togerter. call us for any inquery.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                                                <div class="pf-contact">
                                                                    <h3>Don’t be afraid man ! <br />say hello
                                                                    </h3>
                                                                    <ul>
                                                                        <li><Link href="tel:+(2)578365379">+(2) 578 - 365 - 379</Link></li>
                                                                        <li><Link href="mailto:hello@example.com">hello@example.com</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="pf-social">
                                                                    <h3>follow </h3>
                                                                    <ul>
                                                                        <li><Link href="#">Behance</Link></li>
                                                                        <li><Link href="#">Dribble</Link></li>
                                                                        <li><Link href="#">Meduim</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                                                <div class="contact__form">
                                                                    <form action="#">
                                                                        <div class="row g-3">
                                                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                                                <input type="text" name="name" placeholder="Name *" />
                                                                            </div>
                                                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                                                <input type="email" name="email" placeholder="Email *" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="row g-3">
                                                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                                                <input type="tel" name="phone" placeholder="Phone" />
                                                                            </div>
                                                                            <div class="col-xxl-6 col-xl-6 col-12">
                                                                                <input type="text" name="subject" placeholder="Subject *" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="row g-3">
                                                                            <div class="col-12">
                                                                                <textarea name="message" placeholder="Messages *"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row g-3">
                                                                            <div class="col-12">
                                                                                <div class="pc-btn">
                                                                                    <button class="wc-btn-dark">Send Me Quotes</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Contact area end  */}

                                                {/* Footer area start  */}
                                                <footer class="portfolio__footer">
                                                    <div class="container">
                                                        <div class="pf-btm">
                                                            <div class="row">
                                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                                                    <div class="footer__copyright-2">
                                                                        <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/"
                                                                            target="_blank" rel="noreferrer">Wealcoder</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                                                    <div class="footer__nav">
                                                                        <ul class="footer-menu menu-anim">
                                                                            <li><Link href="/about">about us</Link></li>
                                                                            <li><Link href="/contact">contact</Link></li>
                                                                            <li><Link href="/career">Career</Link></li>
                                                                            <li><Link href="/faq">FAQs</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </footer>
                                                {/* Footer area end */}
                                            </section>
                                        </div>

                                    </div>
                                    <div class="swiper-pagination circle-pagination-2"></div>
                                </div>
                            </div>

                        </main>

                    </div>
                </div>

            </main>
        </div>
    )
}