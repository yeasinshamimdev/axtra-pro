import Head from "next/head";
import Link from "next/link";

export default function Service6Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service - V.6</title>

                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
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
                <header class="header__area-7">
                    <div class="header__inner-2">
                        <div class="header__logo-2">
                            <Link href="/" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></a>
                            <Link href="/" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></a>
                        </div>
                        <div class="header__nav-2">
                            <ul class="main-menu-4 menu-anim">
                                <li><Link href="#">home</a>
                                    <ul class="mega-menu-2">
                                        <li>
                                            <ul>
                                                <li><Link href="/">Digital Maketing</Link></li>
                                                <li><Link href="/index-dark">Digital Maketing dark</Link></li>
                                                <li><Link href="/index-2">Design Studio </Link></li>
                                                <li><Link href="/index-2-dark">Design Studio dark</Link></li>
                                                <li><Link href="/index-3">Digital Agency</Link></li>
                                                <li><Link href="/index-3-dark">Digital Agency dark</Link></li>
                                                <li><Link href="/index-4">personal Portfolio</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>

                                                <li><Link href="/index-4-dark">personal Portfolio dark</Link></li>
                                                <li><Link href="/index-5">portfolio showcase</Link></li>
                                                <li><Link href="/index-5-dark">portfolio showcase dark</Link></li>
                                                <li><Link href="/index-6">Startup Agency</Link></li>
                                                <li><Link href="/index-6-dark">Startup Agency dark</Link></li>
                                                <li><Link href="/index-7">creative Agency</Link></li>
                                                <li><Link href="/index-7-dark">creative Agency dark</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link href="/about">About</Link></li>
                                <li class="has-megamenu"><Link href="/about">Pages</a>
                                    <ul class="mega-menu">
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
                                                <li><Link href="/service-6">service V.6</Link></li>
                                                <li><Link href="/service-6-dark">service V.6 dark</Link></li>
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
                                <li><Link href="/service">services</Link>
                                    <ul class="main-dropdown">
                                        <li><Link href="/service">service</Link>
                                            <ul class="sub-dropdown">
                                                <li><Link href="/service-dark">service dark</Link></li>
                                                <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                                <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                                <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                                <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                                <li><Link href="/service-6-dark">service V.6 dark</Link></li>
                                                <li><Link href="/service-details-dark">service details dark</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/service-2">service V.2</Link></li>
                                        <li><Link href="/service-3">service V.3</Link></li>
                                        <li><Link href="/service-4">service V.4</Link></li>
                                        <li><Link href="/service-5">service V.5</Link></li>
                                        <li><Link href="/service-6">service V.6</Link></li>
                                        <li><Link href="/service-details">service details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/team">team</a>
                                    <ul class="main-dropdown">
                                        <li><Link href="/team">team</Link></li>
                                        <li><Link href="/team-details">team details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/blog">Blog</a>
                                    <ul class="main-dropdown">
                                        <li><Link href="/blog">blog</Link></li>
                                        <li><Link href="/blog-2">blog v.2</Link></li>
                                        <li><Link href="/category">category</Link></li>
                                        <li><Link href="/blog-details">blog details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div class="header__nav-icon-7">
                            <button class="menu-icon-2" id="open_offcanvas"><img src="assets/imgs/icon/menu-dark.png"
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
                                                <li><Link href="/service-6">service V.6</Link></li>
                                                <li><Link href="/service-6-dark">service V.6 dark</Link></li>
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
                                                        <li><Link href="/service-6">service V.6</Link></li>
                                                        <li><Link href="/service-6-dark">service V.6 dark</Link></li>
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

                            {/* Hero area start  */}
                            <section class="hero__area-7">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="hero__title-wrap-7">
                                                <h1 class="hero__title-7">Award-winning <img src="assets/imgs/home-7/shape-1.png" alt="shape" />
                                                    digital solution
                                                    agency <img src="assets/imgs/home-7/shape-2.png" alt="" /></h1>
                                            </div>
                                            <div class="hero__text-7">
                                                <h2 class="about">service</h2>
                                                <p>We question and try to see everything from every perspective. Our passion lies in making everything
                                                    universal human values, to expand the possibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/home-7/shape-3.png" alt="Shape" class="shape-1" />
                            </section>
                            {/* Hero area end  */}


                            {/* Service area start  */}
                            <section class="service__area-7 pt-130">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="service__items-7 animation_service_7">
                                                <div class="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 class="service__title-7">Branding <span>design</span></h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div class="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 class="service__title-7">Interactive <span>Design</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div class="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 class="service__title-7">Web & Mobile <span>Development</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div class="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 class="service__title-7">Digital <span> Marketing</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div class="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 class="service__title-7">Business <span>Strategy</span></h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div class="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 class="service__title-7">Illustration <span>Modelling</span> </h3>
                                                    </Link>
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
                                </div>
                            </section>
                            {/* Service area end  */}


                            {/* CTA area start  */}
                            <section class="cta__area cta__area-7 pt-130">
                                <div class="container pb-110">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="cta__content">
                                                <p class="cta__sub-title">Work with us</p>
                                                <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                                                <div id="btn_wrapper">
                                                    <Link href="/contact" class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us <i
                                                        class="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* CTA area end  */}


                        </main>



                        {/* Footer area start  */}
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
                                                <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</a>
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
                        {/* Footer area end  */}


                    </div>
                </div>
            </main>
        </div>
    )
}