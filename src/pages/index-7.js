import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/ctaArea";

export default function Home7() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Home - Creative Agency</title>

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


                {/* Header area start  */}
                <header class="header__area-7">
                    <div class="header__inner-2">
                        <div class="header__logo-2">
                            <Link href="/" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                            <Link href="/" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                        </div>
                        <div class="header__nav-2">
                            <ul class="main-menu-4 menu-anim">
                                <li><Link href="#">home</Link>
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
                                <li class="has-megamenu"><Link href="/about">Pages</Link>
                                    <ul class="mega-menu">
                                        <li>
                                            <a>Home</a>
                                            <ul>
                                                <li><Link href="/">Digital Maketing</Link></li>
                                                <li><Link href="/index-dark">Digital Maketing Dark</Link></li>
                                                <li><Link href="/index-2">Design Studio </Link></li>
                                                <li><Link href="/index-2-dark">Design Studio Dark</Link></li>
                                                <li><Link href="/index-3">Digital Agency</Link></li>
                                                <li><Link href="/index-3-dark">Digital Agency Dark</Link></li>
                                                <li><Link href="/index-4">Personal Portfolio</Link></li>
                                                <li><Link href="/index-4-dark">Personal Portfolio Dark</Link></li>
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
                                <li><Link href="/portfolio">services</Link>
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
                                <li><Link href="/team">team</Link>
                                    <ul class="main-dropdown">
                                        <li><Link href="/team">team</Link></li>
                                        <li><Link href="/team-details">team details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/blog">Blog</Link>
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
                                <Link href="/"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></Link>
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
                            <section class="service__hero-2">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="service__hero-inner-2">
                                                <div class="service__hero-left-2">
                                                    <img src="assets/imgs/home-7/sh-1.jpg" alt="Image" class="image-1" />
                                                    <img src="assets/imgs/home-7/sh-2.jpg" alt="Image" class="image-2" />
                                                    <img src="assets/imgs/home-7/sh-3.jpg" alt="Image" class="image-3" />
                                                    <img src="assets/imgs/home-7/sh-4.jpg" alt="Image" class="image-4" />
                                                </div>
                                                <div class="service__hero-right-2 hero7__thum-anim">
                                                    <h1 class="title creative">Creative <span class="solution">Solution</span> </h1>
                                                    <p class="animate_content"> We take a similar approach to design commercial we do impactfully
                                                        approches over the flowchart
                                                        of
                                                        user friendly wireframe.</p>
                                                    <img src="assets/imgs/home-7/scroll.png" alt="scroll Image" class="scroll" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/home-7/shape-6.png" alt="Shape Image" class="shape-1" />
                            </section>
                            {/* Hero area end  */}


                            <div class="video__area about__img-2">
                                <img src="assets/imgs/home-7/video.jpg" alt="Video Image" data-speed="0.2" />
                            </div>


                            {/* About area start  */}
                            <section class="about__area-7">
                                <div class="container pt-130 pb-110">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">We want to bring <br /> business and the digital <br /> world together
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div class="about__left-7">
                                                <img src="assets/imgs/home-7/a1.jpg" alt="Image" data-speed="auto" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div class="about__mid-7 text-anim">
                                                <p>We believe that we’ve managed to achieve what we set out to do. Today, we’re proud to bring
                                                    together people who share our passion for change. This is how Outcrowd began. We were just a bunch
                                                    of talented Ukrainians united by a common vision: creating a synergy of business and the digital
                                                    world.
                                                </p>
                                                <p>We were tired of stale design solutions. We felt strongly that design was more than pretty
                                                    pictures: it was a powerful tool that could really transform business.</p>
                                                <img src="assets/imgs/home-7/shape-5.png" alt="Shape" class="signature" />
                                                <img src="assets/imgs/home-7/a2.jpg" alt="Image" class="image-1" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                            <div class="about__right-7">
                                                <img src="assets/imgs/home-7/a3.jpg" alt="Image" data-speed="0.7" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/home-7/shape-4.png" alt="Shape" class="shape-1" />
                            </section>
                            {/* About area end  */}


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


                            {/* Award area start  */}
                            <section class="award__area-7 pb-140">
                                <div class="container">
                                    <div class="row inherit_row">
                                        <div class="col-xxl-12">
                                            <div class="award__top-7">
                                                <div class="award__counter fade_bottom_2">
                                                    <h2 class="counter__number">25k</h2>
                                                    <p>Project completed</p>
                                                </div>
                                                <div class="award-video-7">
                                                    <video loop muted autoplay playsinline>
                                                        <source src="assets/video/video.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="award__btm-7">
                                        <div class="row">
                                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                                                <div class="award__left-7">
                                                    <h2 class="sec-title title-anim">Projects <br /> awards</h2>
                                                </div>
                                            </div>
                                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-8">
                                                <div class="award__mid-7 text-anim">
                                                    <p>Holisticly actualize magnetic testing procedures for high-quality initiatives for ompellingly
                                                        enhance users whereas.</p>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4">
                                                <div class="award__right-7">
                                                    <div class="award__list-7">
                                                        <div class="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/m.png" alt="Image" />
                                                            <h3 class="title">1x Mobile Award</h3>
                                                        </div>
                                                        <div class="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/w.png" alt="Image" />
                                                            <h3 class="title">2x Best Website</h3>
                                                        </div>
                                                        <div class="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/fwa.png" alt="Image" />
                                                            <h3 class="title">2x Web the Day</h3>
                                                        </div>
                                                        <div class="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/webby.png" alt="Image" />
                                                            <h3 class="title">3x Web Animation</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Award area end  */}


                            {/* Portfolio area start  */}
                            <section class="portfolio__area-7">
                                <div class="container pt-100 pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper text-anim">
                                                <h2 class="sec-title title-anim">work</h2>
                                                <p class="sec-text">Worked with global brands & agency at the
                                                    intersection of flat design and digital
                                                    technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper portfolio__slider-7">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-7">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 class="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 class="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-7">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 class="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 class="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-7">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 class="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 class="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-7">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 class="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 class="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-7">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 class="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 class="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-7">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 class="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 class="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}


                            {/* Team area start  */}
                            <section class="team__area-7">
                                <h2 class="team__title-7 title-anim">Team</h2>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-text pb-140 text-anim">
                                                <p>We are here to help you achieve your business goals and the team create an amazing outstanding
                                                    product for your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="team__items-7">
                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">01</p>

                                                            <h3 class="tm-name">Saymon D. Halk</h3>
                                                        </div>
                                                        <h4 class="tm-role">Web <br /> Developer</h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/1.jpg);"></div>
                                                    </div>
                                                </Link>

                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">02</p>

                                                            <h3 class="tm-name">Aliya D. Albert</h3>
                                                        </div>
                                                        <h4 class="tm-role">Founder <br /> CEO</h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/2.jpg);"></div>
                                                    </div>
                                                </Link>

                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">03</p>
                                                            <h3 class="tm-name">Jassica Oliver</h3>
                                                        </div>
                                                        <h4 class="tm-role">Creative <br /> Content Writer </h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/3.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">04</p>
                                                            <h3 class="tm-name">Daniyel Adamson</h3>
                                                        </div>
                                                        <h4 class="tm-role">Head of <br /> Researcher</h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/4.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">05</p>
                                                            <h3 class="tm-name">Hardiya Kethrine</h3>
                                                        </div>
                                                        <h4 class="tm-role">Digital <br /> Marketer</h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/5.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">06</p>
                                                            <h3 class="tm-name">Julian B. Folder</h3>
                                                        </div>
                                                        <h4 class="tm-role">Creative <br /> Designer</h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/6.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div class="team__item-7 fade_bottom_3">
                                                        <div class="team__name-wrap-7">
                                                            <p class="tm-serial">07</p>
                                                            <h3 class="tm-name">Denial Karlos</h3>
                                                        </div>
                                                        <h4 class="tm-role">Backend <br /> Developer</h4>
                                                        <div class="tm-link"><i class="fa-solid fa-arrow-right"></i></div>
                                                        <div class="team__hover-7" style="background-image: url(assets/imgs/team/7.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <div class="team7__img-wrap">
                                                    <div class="team7__img"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Team area end  */}


                            {/* Brand area start  */}
                            <section class="brand__area">
                                <div class="container pt-140 pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <h2 class="brand__title-3 title-anim">We worked with global largest brands
                                            </h2>
                                            <div class="brand__list-3">
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


                            {/* Blog area start  */}
                            <section class="blog__area-7 blog__animation">
                                <div class="container g-0 pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                            <div class="sec-title-wrapper">
                                                <h3 class="sec-title title-anim">News insignt</h3>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item">
                                                <div class="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 class="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" class="blog__title">Ways of lying to yourself about your new
                                                    relationship.</Link></h5>
                                                <Link href="/blog-details" class="blog__btn">Read More <span><i
                                                    class="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item">
                                                <div class="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 class="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" class="blog__title">How to manage a talented and successful de sign
                                                    team</Link></h5>
                                                <Link href="/blog-details" class="blog__btn">Read More <span><i
                                                    class="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item">
                                                <div class="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 class="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" class="blog__title">How to bring fold to your startup company with
                                                    Axtra</Link></h5>
                                                <Link href="/blog-details" class="blog__btn">Read More <span><i
                                                    class="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Blog area end  */}


                            {/* CTA area start  */}
                            <CtaArea />
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
                                                <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</Link>
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