import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer';
import OffcanvasDark from '../components/offcanvasDark';
import SwitcherAreaDark from '../components/switcherAreaDark';

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
                <SwitcherAreaDark />
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
                            </Link>
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
                <OffcanvasDark />
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
                                            </Link>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/5.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Researcher</h5>
                                                </div>
                                            </Link>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/7.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Daniyel Adamson</h4>
                                                    <h5 class="team__member-role-6">Digital Marketer</h5>
                                                </div>
                                            </Link>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Hardiya Kethrine</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </Link>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/5.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role-6">Researcher</h5>
                                                </div>
                                            </Link>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/6.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/7.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="swiper-slide team__slide">
                                            <Link href="/team-details">
                                                <img src="assets/imgs/team/8.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name-6">Jassica Oliver</h4>
                                                    <h5 class="team__member-role-6">Lead Designer</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="container line pt-150">
                                    <div class="line-3"></div>
                                </div>

                                <div class="team__join-btn">
                                    <div id="btn_wrapper">
                                        <Link href="/contact" class="wc-btn-primary btn-item btn-hover"><span></span> Join our <br />talented team
                                            <i class="fa-solid fa-arrow-right"></i></Link>
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
                            <CtaArea />
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