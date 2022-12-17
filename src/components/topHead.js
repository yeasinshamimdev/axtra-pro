import Link from "next/link";

export default function TopHead() {
    return (
        <div>
            {/* Cursor Animation   */}
            <div class="cursor1"></div>
            <div class="cursor2"></div>


            {/* Preloader   */}
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


            {/* Switcher Area Start   */}
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
                        <a href="index.html">
                            <img class="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                            <img class="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                        </a>
                    </div>
                    <div class="header__nav-icon">
                        <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                    </div>
                    <div class="header__support">
                        <p>Support center <a href="tel:+9587325902">+9 587 325 902</a></p>
                    </div>
                </div>
            </header>
            {/* Header area end   */}


            {/* Offcanvas area start --> */}
            <div class="offcanvas__area">
                <div class="offcanvas__body">
                    <div class="offcanvas__left">
                        <div class="offcanvas__logo">
                            <a href="index.html"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></a>
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
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">contact</a></li>
                                <li><a href="career.html">Career</a></li>
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
                                            <li><a href="index.html">Digital Maketing</a></li>
                                            <li><a href="index-dark.html">Digital Maketing dark</a></li>
                                            <li><a href="index-2.html">Design Studio </a></li>
                                            <li><a href="index-2-dark.html">Design Studio dark</a></li>
                                            <li><a href="index-3.html">Digital Agency</a></li>
                                            <li><a href="index-3-dark.html">Digital Agency dark</a></li>
                                            <li><a href="index-4.html">personal Portfolio</a></li>
                                            <li><a href="index-4-dark.html">personal Portfolio dark</a></li>
                                            <li><a href="index-5.html">portfolio showcase</a></li>
                                            <li><a href="index-5-dark.html">portfolio showcase dark</a></li>
                                            <li><a href="index-6.html">Startup Agency</a></li>
                                            <li><a href="index-6-dark.html">Startup Agency dark</a></li>
                                            <li><a href="index-7.html">creative Agency</a></li>
                                            <li><a href="index-7-dark.html">creative Agency dark</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">about</a></li>
                                    <li>
                                        <a>Service</a>
                                        <ul>
                                            <li><Link href="service.html">service</Link></li>
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
                                                    <li><a href="index.html">Digital Maketing</a></li>
                                                    <li><a href="index-dark.html">Digital Maketing dark</a></li>
                                                    <li><a href="index-2.html">Design Studio </a></li>
                                                    <li><a href="index-2-dark.html">Design Studio dark</a></li>
                                                    <li><a href="index-3.html">Digital Agency</a></li>
                                                    <li><a href="index-3-dark.html">Digital Agency dark</a></li>
                                                    <li><a href="index-4.html">personal Portfolio</a></li>
                                                    <li><a href="index-4-dark.html">personal Portfolio dark</a></li>
                                                    <li><a href="index-5.html">portfolio showcase</a></li>
                                                    <li><a href="index-5-dark.html">portfolio showcase dark</a></li>
                                                    <li><a href="index-6.html">Startup Agency</a></li>
                                                    <li><a href="index-6-dark.html">Startup Agency dark</a></li>
                                                    <li><a href="index-7.html">creative Agency</a></li>
                                                    <li><a href="index-7-dark.html">creative Agency dark</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>Service</a>
                                                <ul>
                                                    <li><Link href="service.html">service</Link></li>
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
                                                    <li><a href="portfolio.html">portfolio</a></li>
                                                    <li><a href="portfolio-dark.html">portfolio dark</a></li>
                                                    <li><a href="portfolio-2.html">portfolio v.2</a></li>
                                                    <li><a href="portfolio-2-dark.html">portfolio v.2 dark</a></li>
                                                    <li><a href="portfolio-3.html">portfolio v.3</a></li>
                                                    <li><a href="portfolio-3-dark.html">portfolio v.3 dark</a></li>
                                                    <li><a href="portfolio-4.html">portfolio v.4</a></li>
                                                    <li><a href="portfolio-4-dark.html">portfolio v.4 dark</a></li>
                                                    <li><a href="portfolio-5.html">portfolio v.5</a></li>
                                                    <li><a href="portfolio-5-dark.html">portfolio v.5 dark</a></li>
                                                    <li><a href="portfolio-details.html">portfolio details</a></li>
                                                    <li><a href="portfolio-details-dark.html">portfolio details dark</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>team</a>
                                                <ul>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-dark.html">Team dark</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="team-details-dark.html">Team Details dark</a></li>
                                                    <li><a href="career.html">career</a></li>
                                                    <li><a href="career-dark.html">career dark</a></li>
                                                    <li><a href="job-details.html">job details</a></li>
                                                    <li><a href="job-details-dark.html">job details dark</a></li>
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
                                                    <li><Link href="category-dark">category dark</Link></li>
                                                    <li><Link href="/blog-details">blog details</Link></li>
                                                    <li><Link href="blog-details-dark">blog details dark</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>Others</a>
                                                <ul>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                    <li><a href="faq-dark.html">FAQs dark</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="contact-dark.html">contact dark</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                    <li><a href="404-dark.html">404 dark</a></li>
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
                                            <li><Link href="category-dark">category dark</Link></li>
                                            <li><Link href="/blog-details">blog details</Link></li>
                                            <li><Link href="blog-details-dark">blog details dark</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
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
        </div>
    )
}