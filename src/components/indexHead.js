import Link from "next/link";

export default function TopHead() {
    return (
        <>
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
                            <button class="active" data-mode="light">light</button>
                            <button data-mode="dark">dark</button>
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
            <header class="header__area-3">
                <div class="header__inner-3">
                    <div class="header__logo-2">
                        <Link href="/" class="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" /></Link>
                        <Link href="/" class="logo-light"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Site Logo" /></Link>
                    </div>
                    <div class="header__nav-2">
                        <ul class="main-menu-3 menu-anim">
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
                                            <li><Link href="/team-details-dark">Team Details dark</Link ></li>
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
                                            <li><Link href="category-dark">category dark</Link></li>
                                            <li><Link href="/blog-details">blog details</Link></li>
                                            <li><Link href="blog-details-dark">blog details dark</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>Others</a>
                                        <ul>
                                            <li><Link href="/faq">FAQs</Link></li>
                                            <li><Link href="/faq-dark">FAQs dark</Link></li>
                                            <li><Link href="/contact">contact</Link></li>
                                            <li><Link href="/contact-dark">contact dark</Link ></li>
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
                            <li><Link href="/team">team</Link>
                                <ul class="main-dropdown">
                                    <li><Link href="/team">Team</Link></li>
                                    <li><Link href="/team-details">Team Details</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/blog">Blog</Link>
                                <ul class="main-dropdown">
                                    <li><Link href="/blog"> blog </Link></li>
                                    <li><Link href="/blog-2">blog v.2</Link></li>
                                    <li><Link href="/category">category</Link></li>
                                    <li><Link href="/blog-details">blog details</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                    <div class="header__nav-icon-3">
                        <button class="search-icon" id="search_icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button class="search-icon" id="search_close"><i class="fa-solid fa-xmark"></i></button>
                        <button id="open_offcanvas"><img src="assets/imgs/icon/menu-black.png" alt="Menubar Icon" /></button>
                    </div>
                </div>
            </header>
            <div class="header__search">
                <form action="#">
                    <input type="text" name="s" id="s" placeholder="Search.." />
                </form>
            </div>
            {/* Header area end */}


            {/* Offcanvas area start */}
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
                                                    <li><Link href="/team-details-dark">Team Details dark</Link ></li>

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
                                                    <li><Link href="category-dark">category dark</Link></li>
                                                    <li><Link href="/blog-details">blog details</Link></li>
                                                    <li><Link href="blog-details-dark">blog details dark</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a>Others</a>
                                                <ul>
                                                    <li><Link href="/faq">FAQs</Link></li>
                                                    <li><Link href="/faq-dark">FAQs dark</Link></li>
                                                    <li><Link href="/contact">contact</Link></li>
                                                    <li><Link href="/contact-dark">contact dark</Link ></li>
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
                                            <li><Link href="category-dark">category dark</Link></li>
                                            <li><Link href="/blog-details">blog details</Link></li>
                                            <li><Link href="blog-details-dark">blog details dark</Link></li>
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
            {/* Offcanvas area end */}
        </>
    )
}