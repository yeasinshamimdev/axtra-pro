import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/common/ctaArea";

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
                <div className="switcher__area">
                    <div className="switcher__icon">
                        <button id="switcher_open"><i className="fa-solid fa-gear"></i></button>
                        <button id="switcher_close"><i className="fa-solid fa-xmark"></i></button>
                    </div>

                    <div className="switcher__items">
                        <div className="switcher__item">
                            <div className="switch__title-wrap">
                                <h2 className="switcher__title">Cursor</h2>
                            </div>
                            <div className="switcher__btn">
                                <select name="cursor-style" id="cursor_style">
                                    <option value="1">default</option>
                                    <option defaultValue value="2">animated</option>
                                </select>
                            </div>
                        </div>

                        <div className="switcher__item">
                            <div className="switch__title-wrap">
                                <h2 className="switcher__title">mode</h2>
                            </div>
                            <div className="switcher__btn mode-type wc-col-2">
                                <button className="active" data-mode="light">light</button>
                                <button data-mode="dark">dark</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <div className="has-smooth" id="has_smooth"></div>


                {/* Go Top Button  */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>


                {/* Header area start  */}
                <header className="header__area-7">
                    <div className="header__inner-2">
                        <div className="header__logo-2">
                            <Link href="/" className="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                            <Link href="/" className="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                        </div>
                        <div className="header__nav-2">
                            <ul className="main-menu-4 menu-anim">
                                <li><Link href="#">home</Link>
                                    <ul className="mega-menu-2">
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
                                <li className="has-megamenu"><Link href="/about">Pages</Link>
                                    <ul className="mega-menu">
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
                                    <ul className="main-dropdown">
                                        <li><Link href="/service">service</Link>
                                            <ul className="sub-dropdown">
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
                                    <ul className="main-dropdown">
                                        <li><Link href="/team">team</Link></li>
                                        <li><Link href="/team-details">team details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/blog">Blog</Link>
                                    <ul className="main-dropdown">
                                        <li><Link href="/blog">blog</Link></li>
                                        <li><Link href="/blog-2">blog v.2</Link></li>
                                        <li><Link href="/category">category</Link></li>
                                        <li><Link href="/blog-details">blog details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="header__nav-icon-7">
                            <button className="menu-icon-2" id="open_offcanvas"><img src="assets/imgs/icon/menu-dark.png"
                                alt="Menubar Icon" /></button>
                        </div>
                    </div>
                </header>
                {/* Header area end  */}


                {/* Offcanvas area start  */}
                <div className="offcanvas__area">
                    <div className="offcanvas__body">
                        <div className="offcanvas__left">
                            <div className="offcanvas__logo">
                                <Link href="/"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></Link>
                            </div>
                            <div className="offcanvas__social">
                                <h3 className="social-title">Follow Us</h3>
                                <ul>
                                    <li><Link href="#">Dribbble</Link></li>
                                    <li><Link href="#">Behance</Link></li>
                                    <li><Link href="#">Instagram</Link></li>
                                    <li><Link href="#">Facebook</Link></li>
                                    <li><Link href="#">Twitter</Link></li>
                                    <li><Link href="#">YouTube</Link></li>
                                </ul>
                            </div>
                            <div className="offcanvas__links">
                                <ul>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/contact">contact</Link></li>
                                    <li><Link href="/career">Career</Link></li>
                                    <li><Link href="/blog">blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="offcanvas__mid">
                            <div className="offcanvas__menu-wrapper">
                                <nav className="offcanvas__menu">
                                    <ul className="menu-anim">
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
                        <div className="offcanvas__right">
                            <div className="offcanvas__search">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Search keyword" />
                                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="offcanvas__contact">
                                <h3>Get in touch</h3>
                                <ul>
                                    <li><Link href="tel:02094980547">+(02) - 094 980 547</Link></li>
                                    <li><Link href="mailto:info@extradesign.com">info@extradesign.com</Link></li>
                                    <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                                </ul>
                            </div>
                            <img src="assets/imgs/shape/11.png" alt="shape" className="shape-1" />
                            <img src="assets/imgs/shape/12.png" alt="shape" className="shape-2" />
                        </div>
                        <div className="offcanvas__close">
                            <button type="button" id="close_offcanvas"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                </div>
                {/* Offcanvas area end  */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start  */}
                            <section className="service__hero-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="service__hero-inner-2">
                                                <div className="service__hero-left-2">
                                                    <img src="assets/imgs/home-7/sh-1.jpg" alt="Image" className="image-1" />
                                                    <img src="assets/imgs/home-7/sh-2.jpg" alt="Image" className="image-2" />
                                                    <img src="assets/imgs/home-7/sh-3.jpg" alt="Image" className="image-3" />
                                                    <img src="assets/imgs/home-7/sh-4.jpg" alt="Image" className="image-4" />
                                                </div>
                                                <div className="service__hero-right-2 hero7__thum-anim">
                                                    <h1 className="title creative">Creative <span className="solution">Solution</span> </h1>
                                                    <p className="animate_content"> We take a similar approach to design commercial we do impactfully
                                                        approches over the flowchart
                                                        of
                                                        user friendly wireframe.</p>
                                                    <img src="assets/imgs/home-7/scroll.png" alt="scroll Image" className="scroll" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/home-7/shape-6.png" alt="Shape Image" className="shape-1" />
                            </section>
                            {/* Hero area end  */}


                            <div className="video__area about__img-2">
                                <img src="assets/imgs/home-7/video.jpg" alt="Video Image" data-speed="0.2" />
                            </div>


                            {/* About area start  */}
                            <section className="about__area-7">
                                <div className="container pt-130 pb-110">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title title-anim">We want to bring <br /> business and the digital <br /> world together
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="about__left-7">
                                                <img src="assets/imgs/home-7/a1.jpg" alt="Image" data-speed="auto" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div className="about__mid-7 text-anim">
                                                <p>We believe that we’ve managed to achieve what we set out to do. Today, we’re proud to bring
                                                    together people who share our passion for change. This is how Outcrowd began. We were just a bunch
                                                    of talented Ukrainians united by a common vision: creating a synergy of business and the digital
                                                    world.
                                                </p>
                                                <p>We were tired of stale design solutions. We felt strongly that design was more than pretty
                                                    pictures: it was a powerful tool that could really transform business.</p>
                                                <img src="assets/imgs/home-7/shape-5.png" alt="Shape" className="signature" />
                                                <img src="assets/imgs/home-7/a2.jpg" alt="Image" className="image-1" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                            <div className="about__right-7">
                                                <img src="assets/imgs/home-7/a3.jpg" alt="Image" data-speed="0.7" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/home-7/shape-4.png" alt="Shape" className="shape-1" />
                            </section>
                            {/* About area end  */}


                            {/* Service area start  */}
                            <section className="service__area-7 pt-130">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="service__items-7 animation_service_7">
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Branding <span>design</span></h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Interactive <span>Design</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Web & Mobile <span>Development</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Digital <span> Marketing</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Business <span>Strategy</span></h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Illustration <span>Modelling</span> </h3>
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
                            <section className="award__area-7 pb-140">
                                <div className="container">
                                    <div className="row inherit_row">
                                        <div className="col-xxl-12">
                                            <div className="award__top-7">
                                                <div className="award__counter fade_bottom_2">
                                                    <h2 className="counter__number">25k</h2>
                                                    <p>Project completed</p>
                                                </div>
                                                <div className="award-video-7">
                                                    <video loop muted autoPlay playsInline>
                                                        <source src="assets/video/video.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="award__btm-7">
                                        <div className="row">
                                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                                                <div className="award__left-7">
                                                    <h2 className="sec-title title-anim">Projects <br /> awards</h2>
                                                </div>
                                            </div>
                                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-8">
                                                <div className="award__mid-7 text-anim">
                                                    <p>Holisticly actualize magnetic testing procedures for high-quality initiatives for ompellingly
                                                        enhance users whereas.</p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                                <div className="award__right-7">
                                                    <div className="award__list-7">
                                                        <div className="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/m.png" alt="Image" />
                                                            <h3 className="title">1x Mobile Award</h3>
                                                        </div>
                                                        <div className="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/w.png" alt="Image" />
                                                            <h3 className="title">2x Best Website</h3>
                                                        </div>
                                                        <div className="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/fwa.png" alt="Image" />
                                                            <h3 className="title">2x Web the Day</h3>
                                                        </div>
                                                        <div className="award__item-7 zoom_in">
                                                            <img src="assets/imgs/home-7/webby.png" alt="Image" />
                                                            <h3 className="title">3x Web Animation</h3>
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
                            <section className="portfolio__area-7">
                                <div className="container pt-100 pb-140">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper text-anim">
                                                <h2 className="sec-title title-anim">work</h2>
                                                <p className="sec-text">Worked with global brands & agency at the
                                                    intersection of flat design and digital
                                                    technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper portfolio__slider-7">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-7">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 className="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-7">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 className="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-7">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 className="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-7">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 className="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-7">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 className="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="portfolio__slide-7">
                                                <div className="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/home-7/p2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div className="slide-content">
                                                    <Link href="/portfolio-details">
                                                        <h2 className="title"> Lionpro <span>Agency</span> </h2>
                                                    </Link>
                                                    <h4 className="date">02 May 2021</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}


                            {/* Team area start  */}
                            <section className="team__area-7">
                                <h2 className="team__title-7 title-anim">Team</h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-text pb-140 text-anim">
                                                <p>We are here to help you achieve your business goals and the team create an amazing outstanding
                                                    product for your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="team__items-7">
                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">01</p>

                                                            <h3 className="tm-name">Saymon D. Halk</h3>
                                                        </div>
                                                        <h4 className="tm-role">Web <br /> Developer</h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/1.jpg);"></div>
                                                    </div>
                                                </Link>

                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">02</p>

                                                            <h3 className="tm-name">Aliya D. Albert</h3>
                                                        </div>
                                                        <h4 className="tm-role">Founder <br /> CEO</h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/2.jpg);"></div>
                                                    </div>
                                                </Link>

                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">03</p>
                                                            <h3 className="tm-name">Jassica Oliver</h3>
                                                        </div>
                                                        <h4 className="tm-role">Creative <br /> Content Writer </h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/3.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">04</p>
                                                            <h3 className="tm-name">Daniyel Adamson</h3>
                                                        </div>
                                                        <h4 className="tm-role">Head of <br /> Researcher</h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/4.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">05</p>
                                                            <h3 className="tm-name">Hardiya Kethrine</h3>
                                                        </div>
                                                        <h4 className="tm-role">Digital <br /> Marketer</h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/5.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">06</p>
                                                            <h3 className="tm-name">Julian B. Folder</h3>
                                                        </div>
                                                        <h4 className="tm-role">Creative <br /> Designer</h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/6.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <Link href="/team-details">
                                                    <div className="team__item-7 fade_bottom_3">
                                                        <div className="team__name-wrap-7">
                                                            <p className="tm-serial">07</p>
                                                            <h3 className="tm-name">Denial Karlos</h3>
                                                        </div>
                                                        <h4 className="tm-role">Backend <br /> Developer</h4>
                                                        <div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
                                                        <div className="team__hover-7" style="background-image: url(assets/imgs/team/7.jpg);"></div>
                                                    </div>
                                                </Link>
                                                <div className="team7__img-wrap">
                                                    <div className="team7__img"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Team area end  */}


                            {/* Brand area start  */}
                            <section className="brand__area">
                                <div className="container pt-140 pb-140">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <h2 className="brand__title-3 title-anim">We worked with global largest brands
                                            </h2>
                                            <div className="brand__list-3">
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


                            {/* Blog area start  */}
                            <section className="blog__area-7 blog__animation">
                                <div className="container g-0 pb-140">
                                    <div className="row">
                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                            <div className="sec-title-wrapper">
                                                <h3 className="sec-title title-anim">News insignt</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="" />
                                                            <img className="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">Ways of lying to yourself about your new
                                                    relationship.</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                                            <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to manage a talented and successful de sign
                                                    team</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to bring fold to your startup company with
                                                    Axtra</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
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
                        <footer className="footer__area-2 pt-130">
                            <div className="container">
                                <div className="footer__top-2 text-anim">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <h2 className="sec-title-3 title-anim">Get started <br /> now</h2>
                                            <p className="footer__sub-title">If you would like to work with us or
                                                just want to get in touch, we’d love
                                                to hear from you!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer__middle-2">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="footer__location-2">
                                                <div className="location">
                                                    <h3>London</h3>
                                                    <p>Baltia Squar, Mark Street, <br />
                                                        London</p>
                                                </div>
                                                <div className="location">
                                                    <h3>New York</h3>
                                                    <p>Nenuya Centre, Elia Street <br />
                                                        New York, USA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="footer__subscribe-2">
                                                <form action="#">
                                                    <input type="text" name="email" placeholder="Enter your email" />
                                                    <button type="submit" className="submit"><img src="assets/imgs/icon/arrow-black.png"
                                                        alt="Arrow Icon" /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer__btm-2">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                            <div className="footer__copyright-2">
                                                <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                            <div className="footer__nav">
                                                <ul className="footer-menu menu-anim">
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