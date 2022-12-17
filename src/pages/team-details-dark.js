import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Footer from '../Components/Footer'
const TeamDetailsDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Team Details - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <body class="dark">
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
                {/* Header area end */}



                {/* Offcanvas area start */}
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
                                    <li><a href="blog.html">blog</a></li>
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
                                                <li><a href="service.html">service</a></li>
                                                <li><a href="service-dark.html">service dark</a></li>
                                                <li><a href="service-2.html">service V.2</a></li>
                                                <li><a href="service-2-dark.html">service V.2 dark</a></li>
                                                <li><a href="service-3.html">service V.3</a></li>
                                                <li><a href="service-3-dark.html">service V.3 dark</a></li>
                                                <li><a href="service-4.html">service V.4</a></li>
                                                <li><a href="service-4-dark.html">service V.4 dark</a></li>
                                                <li><a href="service-5.html">service V.5</a></li>
                                                <li><a href="service-5-dark.html">service V.5 dark</a></li>
                                                <li><a href="service-6.html">service V.6</a></li>
                                                <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                                <li><a href="service-details.html">service details</a></li>
                                                <li><a href="service-details-dark.html">service details dark</a></li>
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
                                                        <li><a href="service.html">service</a></li>
                                                        <li><a href="service-dark.html">service dark</a></li>
                                                        <li><a href="service-2.html">service V.2</a></li>
                                                        <li><a href="service-2-dark.html">service V.2 dark</a></li>
                                                        <li><a href="service-3.html">service V.3</a></li>
                                                        <li><a href="service-3-dark.html">service V.3 dark</a></li>
                                                        <li><a href="service-4.html">service V.4</a></li>
                                                        <li><a href="service-4-dark.html">service V.4 dark</a></li>
                                                        <li><a href="service-5.html">service V.5</a></li>
                                                        <li><a href="service-5-dark.html">service V.5 dark</a></li>
                                                        <li><a href="service-6.html">service V.6</a></li>
                                                        <li><a href="service-6-dark.html">service V.6 dark</a></li>
                                                        <li><a href="service-details.html">service details</a></li>
                                                        <li><a href="service-details-dark.html">service details dark</a></li>
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
                                                        <li><Link href="/team-details-dark">Team Details dark</Link ></li>

                                                        <li><a href="career.html">career</a></li>
                                                        <li><a href="career-dark.html">career dark</a></li>
                                                        <li><a href="job-details.html">job details</a></li>
                                                        <li><a href="job-details-dark.html">job details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>blog</a>
                                                    <ul>
                                                        <li><a href="blog.html">blog</a></li>
                                                        <li><a href="blog-dark.html">blog dark</a></li>
                                                        <li><a href="blog-2.html">blog v.2</a></li>
                                                        <li><a href="blog-2-dark.html">blog v.2 dark</a></li>
                                                        <li><a href="category.html">category</a></li>
                                                        <li><a href="category-dark.html">category dark</a></li>
                                                        <li><a href="blog-details.html">blog details</a></li>
                                                        <li><a href="blog-details-dark.html">blog details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Others</a>
                                                    <ul>
                                                        <li><a href="faq.html">FAQs</a></li>
                                                        <li><a href="faq-dark.html">FAQs dark</a></li>
                                                        <li><a href="contact.html">contact</a></li>
                                                        <li><Link href="/contact-dark">contact dark</Link ></li>
                                                        <li><a href="404.html">404</a></li>
                                                        <li><a href="404-dark.html">404 dark</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a>blog</a>
                                            <ul>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-dark.html">blog dark</a></li>
                                                <li><a href="blog-2.html">blog v.2</a></li>
                                                <li><a href="blog-2-dark.html">blog v.2 dark</a></li>
                                                <li><a href="category.html">category</a></li>
                                                <li><a href="category-dark.html">category dark</a></li>
                                                <li><a href="blog-details.html">blog details</a></li>
                                                <li><a href="blog-details-dark.html">blog details dark</a></li>
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
                {/* Offcanvas area end */}



                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div class="team__detail-page">

                                {/* Team area start   */}
                                <section class="team__detail">
                                    <div class="container line pb-140">
                                        <div class="line-3"></div>
                                        <div class="row">
                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
                                                <div class="team__member-img">
                                                    <img src="assets/imgs/team/detail.jpg" alt="Team Member Picture" data-speed="0.5" />
                                                </div>
                                            </div>
                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                                <div class="sec-title-wrapper pt-120">
                                                    <h2 class="team__member-name-7 animation__char_come">Jassica <br />Oliver</h2>
                                                    <h3 class="team__member-role-7 animation__char_come">UX Researcher and Instructor, at
                                                        <span>Axtra</span>
                                                    </h3>
                                                    <p>Jassica Oliver is known for her ability to take a creative brief and run
                                                        with it, coming back
                                                        with
                                                        fresh ideas and a perfectly built design file every time. From digital design to long-format
                                                        layouts,
                                                        she blends beautiful and intuitive with each project she touches. She also happens to be the queen
                                                        of
                                                        deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement
                                                        team
                                                        centered.</p>
                                                    <p>When he’s not building strong alliances with other creatives, project
                                                        managers and stakeholders
                                                        alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and
                                                        delightfully clever messaging.</p>
                                                </div>
                                                <div class="team__member-work">
                                                    <h4 class="work-title">Portfolio :</h4>
                                                    <ul>
                                                        <li><a href="#">Behance</a></li>
                                                        <li><a href="#">Dribble</a></li>
                                                        <li><a href="#">Meduim</a></li>
                                                    </ul>
                                                </div>
                                                <div class="team__member-social">
                                                    <h4 class="work-title">Follow :</h4>
                                                    <ul>
                                                        <li><a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                                                        <li><a href="#"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                                                        <li><a href="#"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                                                        <li><a href="#"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Team area end   */}


                                {/* CTA area start   */}
                                <section class="cta__area">
                                    <div class="container pt-130 pb-110 line">
                                        <div class="line-3"></div>
                                        <div class="row">
                                            <div class="col-xxl-12">
                                                <div class="cta__content">
                                                    <p class="cta__sub-title">Work with us</p>
                                                    <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                                                    <div id="btn_wrapper">
                                                        <a href="contact.html" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* CTA area end   */}


                            </div>
                        </main>


                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}



                    </div>
                </div>
            </body>
        </div>
    );
};

export default TeamDetailsDark;