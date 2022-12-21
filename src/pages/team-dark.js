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
            <main class="dark">

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
                {/* Header area end   */}


                {/* Offcanvas area start   */}
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
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/1.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role-6">Founder & CEO</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/5.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Researcher</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/7.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Daniyel Adamson</h4>
                                                    <h5 class="team__member-role-6">Digital Marketer</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Hardiya Kethrine</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/5.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role-6">Researcher</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/6.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/7.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
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
                                        <Link href="/contact" class="wc-btn-primary btn-item btn-hover"><span></span> Join our <br />talented team
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
                                                    <Link href="/contact" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
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
            </main>
        </div>
    );
};

export default TeamDark;