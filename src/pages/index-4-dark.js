import Head from "next/head";
import Link from "next/link";
import Offcanvas from "../components/offcanvas";
import OffcanvasDark from "../components/offcanvasDark";
import SwitcherAreaDark from "../components/switcherAreaDark";

export default function Home4Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio 2</title>

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
                <header class="header__area-2">
                    <div class="header__inner-5">
                        <div class="header__logo-5">
                            <Link href="/" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                            <Link href="/" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                        </div>
                        <div class="header__nav-icon-5">
                            <button id="open_offcanvas"><span class="menu-text-pp">Menu</span><img src="assets/imgs/icon/menu-black.png"
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
                                                                    <Link href="/portfolio" class="wc-btn-dark">View all work</Link>
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
                                                                <Link href="/about" class="wc-btn-dark">Explore Me</Link>
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
                                                                                    alt="Portfolio Thumbnail" /></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg"
                                                                                    alt="Portfolio Thumbnail" /></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg"
                                                                                    alt="Portfolio Thumbnail" /></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="swiper-slide pp-slide">
                                                                            <div class="pp-slide-img">
                                                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg"
                                                                                    alt="Portfolio Thumbnail" /></Link>
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
                                                                    </Link>
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
                                                                    </Link>
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
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xxl-12">
                                                            <div class="ps-btn">
                                                                <Link href="/contact">Call me to get more extra service <strong>call now</strong></Link>
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
                                                {/* Contact area end */}

                                                {/* Footer area start */}
                                                <footer class="portfolio__footer">
                                                    <div class="container">
                                                        <div class="pf-btm">
                                                            <div class="row">
                                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                                                    <div class="footer__copyright-2">
                                                                        <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/"
                                                                            target="_blank" rel="noreferrer">Wealcoder</Link>
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