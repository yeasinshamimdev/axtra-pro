import Head from "next/head";
import Link from "next/link";

export default function Service2() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service V.2 - Axtra</title>

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


                {/* Header area start  */}
                <header class="header__area">
                    <div class="header__inner">
                        <div class="header__logo">
                            <Link href="/">
                                <img class="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                                <img class="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                            </a>
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

                            {/* Service area start  */}
                            <section class="service__area service-v2 pt-110 pb-150">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div class="sec-title-wrapper wrap">
                                                <h2 class="sec-sub-title title-anim">service</h2>
                                                <h3 class="sec-title title-anim">Solution we <br />provide</h3>
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div class="service__top-text text-anim">
                                                <p>With every single one of our clients we bring forth a deep passion
                                                    for <span>creative problem solving
                                                        innovations</span> forward thinking
                                                    brands boundaries</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="service__list-wrapper">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                                                <div class="service__img-wrapper">
                                                    <img src="assets/imgs/service/1/1.jpg" alt="Service Image" class="service__img img-1 active" />
                                                    <img src="assets/imgs/service/1/2.png" alt="Service Image" class="service__img img-2" />
                                                    <img src="assets/imgs/service/1/3.png" alt="Service Image" class="service__img img-3" />
                                                    <img src="assets/imgs/service/1/4.png" alt="Service Image" class="service__img img-4" />

                                                    <span class="shape-box-1 current"></span>
                                                    <span class="shape-box-2"></span>
                                                    <span class="shape-box-3"></span>
                                                    <span class="shape-box-4"></span>
                                                </div>
                                            </div>
                                            <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                                                <div class="service__list">
                                                    <Link href="/service-details">
                                                        <div class="service__item animation_home1_service" data-service="1">
                                                            <div class="service__number"><span>01</span></div>
                                                            <div class="service__title-wrapper">
                                                                <h4 class="service__title">Web & Mobile
                                                                    Development</h4>
                                                            </div>
                                                            <div class="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div class="service__link">
                                                                <p><i class="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div class="service__item  animation_home1_service" data-service="2">
                                                            <div class="service__number"><span>02</span></div>
                                                            <div class="service__title-wrapper">
                                                                <h4 class="service__title">Interaction <br />Design</h4>
                                                            </div>
                                                            <div class="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div class="service__link">
                                                                <p><i class="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div class="service__item  animation_home1_service" data-service="3">
                                                            <div class="service__number"><span>03</span></div>
                                                            <div class="service__title-wrapper">
                                                                <h4 class="service__title">Digital <br />Maketing</h4>
                                                            </div>
                                                            <div class="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div class="service__link">
                                                                <p><i class="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div class="service__item  animation_home1_service" data-service="4">
                                                            <div class="service__number"><span>04</span></div>
                                                            <div class="service__title-wrapper">
                                                                <h4 class="service__title">Branding and Strategy</h4>
                                                            </div>
                                                            <div class="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div class="service__link">
                                                                <p><i class="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>
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
                            <section class="cta__area">
                                <div class="container line pt-100 pb-110 no-p">
                                    <div class="line-3"></div>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="cta__content">
                                                <p class="cta__sub-title">Work with us</p>
                                                <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                                                <div id="btn_wrapper">
                                                    <Link href="/contact" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
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
                        <footer class="footer__area">
                            <div class="footer__top">
                                <div class="container footer-line"></div>
                                <img src="assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5" />
                            </div>

                            <div class="footer__btm">
                                <div class="container">
                                    <div class="row footer__row">
                                        <div class="col-xxl-12">
                                            <div class="footer__inner">
                                                <div class="footer__widget">
                                                    <img class="footer__logo" src="assets/imgs/logo/footer-logo-white.png" alt="Footer Logo" />
                                                    <p>When do they work well, and when do they on us and finally, when do we actually need how can we
                                                        avoid
                                                        them.</p>
                                                    <ul class="footer__social">
                                                        <li><Link href="#"><span><i class="fa-brands fa-facebook-f"></i></span></Link></li>
                                                        <li><Link href="#"><span><i class="fa-brands fa-twitter"></i></span></Link></li>
                                                        <li><Link href="#"><span><i class="fa-brands fa-instagram"></i></span></Link></li>
                                                        <li><Link href="#"><span><i class="fa-brands fa-linkedin"></i></span></Link></li>
                                                    </ul>
                                                </div>

                                                <div class="footer__widget-2">
                                                    <h2 class="footer__widget-title">Information</h2>
                                                    <ul class="footer__link">
                                                        <li><Link href="/about">About Company</Link></li>
                                                        <li><Link href="/portfolio">Case Study</Link></li>
                                                        <li><Link href="/career">Career</Link></li>
                                                        <li><Link href="/blog">blog</Link></li>
                                                        <li><Link href="/contact">contact</Link></li>
                                                    </ul>
                                                </div>

                                                <div class="footer__widget-3">
                                                    <h2 class="footer__widget-title">Contact Us</h2>
                                                    <ul class="footer__contact">
                                                        <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                                        <li><Link href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </Link></li>
                                                        <li><Link href="mailto:info@buildyexample.com">info@buildyexample.com</Link></li>
                                                    </ul>
                                                </div>

                                                <div class="footer__widget-4">
                                                    <h2 class="project-title">Have a project in your mind?</h2>
                                                    <div id="btn_wrapper">
                                                        <Link href="/contact" class="wc-btn-primary btn-hover btn-item"><span></span> contact us <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                    <h3 class="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                                                    <h4 class="contact-day">Saturday - Thursday</h4>
                                                </div>

                                                <div class="footer__copyright">
                                                    <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/"
                                                        target="_blank" rel="noreferrer">Wealcoder</a>
                                                    </p>
                                                </div>

                                                <div class="footer__subscribe">
                                                    <form action="#">
                                                        <input type="email" name="email" placeholder="Enter your email" />
                                                        <button type="submit" class="subs-btn"><i class="fa-solid fa-paper-plane"></i></button>
                                                    </form>
                                                </div>
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