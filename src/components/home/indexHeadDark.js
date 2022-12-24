import Link from "next/link";

export default function TopHeadDark() {
    return (
        <>
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
                            <button data-mode="light">light</button>
                            <button className="active" data-mode="dark">dark</button>
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
        </>
    )
}