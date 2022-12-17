import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Footer from '../Components/Footer';

const TeamDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Team - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <body class="dark">

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
                                <button data-mode="light">light</button>
                                <button class="active" data-mode="dark">dark</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Switcher Area End   */}



                {/* Scroll Smoother   */}
                <div class="has-smooth" id="has_smooth"></div>


                {/* Team Cursor   */}
                <div class="cursor" id="team_cursor">Drag</div>


                {/* Go Top Button   */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


                {/* Header area start   */}
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


                {/* Offcanvas area start   */}
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
                                                        <li><Link href="/team">Team</Link></li>
                                                        <li><Link href="/team-dark">Team dark</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
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
                {/* Offcanvas area end   */}



                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>


                            {/* Team area start   */}
                            <section class="team__area-6">
                                <div class="container line pt-120">
                                    <span class="line-3"></span>

                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title animation__char_come">Talented team </h2>
                                                <p>We’re a diverse team that works as fancies attention to details,
                                                    enjoys beers on Friday nights and
                                                    aspires to design the dent in the universe.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper team__slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/1.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role-6">Founder & CEO</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/5.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Researcher</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/7.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Daniyel Adamson</h4>
                                                    <h5 class="team__member-role-6">Digital Marketer</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Hardiya Kethrine</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/5.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role-6">Researcher</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/6.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/7.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide team__slide">
                                            <a href="team-details.html">
                                                <img src="assets/imgs/team/8.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="container line pt-150">
                                    <div class="line-3"></div>
                                </div>

                                <div class="team__join-btn">
                                    <div id="btn_wrapper">
                                        <a href="contact.html" class="wc-btn-primary btn-item btn-hover"><span></span> Join our <br />talented team
                                            <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </section>
                            {/* Team area end   */}


                            <section class="team__btm">
                                <div class="container g-0 line">
                                    <span class="line-3"></span>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper pt-130 pb-140 text-anim">
                                                <h2 class="sec-title title-anim">Your digital products & services ensured by our talented team</h2>
                                                <p>A hybrid team with hybrid culture. More than 20 people, including designers, engineers, creatives,
                                                    thinkers, creative table and media experts always looking from a new perspective.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            {/* Counter area start   */}
                            <section class="counter__area">
                                <div class="container g-0 line pt-140">
                                    <span class="line-3"></span>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="counter__wrapper-2">
                                                <div class="counter__item-2">
                                                    <h2 class="counter__number">25k</h2>
                                                    <p>Project <br />completed</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                                <div class="counter__item-2">
                                                    <h2 class="counter__number">8k</h2>
                                                    <p>Happy <br />customers</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                                <div class="counter__item-2">
                                                    <h2 class="counter__number">15</h2>
                                                    <p>Years <br />experiences</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                                <div class="counter__item-2">
                                                    <h2 class="counter__number">98</h2>
                                                    <p>Awards <br />achievement</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Counter area end   */}


                            {/* CTA area start   */}
                            <section class="cta__area">
                                <div class="container line pt-130 pb-110">
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

export default TeamDark;