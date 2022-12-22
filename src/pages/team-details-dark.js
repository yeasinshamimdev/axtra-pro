import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer'
import OffcanvasDark from '../components/offcanvasDark';
import SwitcherAreaDark from '../components/switcherAreaDark';
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
            <main className="dark">
                {/* Cursor Animation */}
                <div className="cursor1"></div>
                <div className="cursor2"></div>

                {/* Preloader */}
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

                {/* Switcher Area Start */}
                <SwitcherAreaDark />
                {/* Switcher Area End */}

                {/* Scroll Smoother */}
                <div className="has-smooth" id="has_smooth"></div>

                {/* Go Top Button */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>

                {/* Header area start */}
                <header className="header__area">
                    <div className="header__inner">
                        <div className="header__logo">
                            <Link href="/">
                                <img className="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                                <img className="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                            </Link>
                        </div>
                        <div className="header__nav-icon">
                            <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                        </div>
                        <div className="header__support">
                            <p>Support center <Link href="tel:+9587325902">+9 587 325 902</Link></p>
                        </div>
                    </div>
                </header>
                {/* Header area end */}

                {/* Offcanvas area start */}
                <OffcanvasDark />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="team__detail-page">

                                {/* Team area start   */}
                                <section className="team__detail">
                                    <div className="container line pb-140">
                                        <div className="line-3"></div>
                                        <div className="row">
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
                                                <div className="team__member-img">
                                                    <img src="assets/imgs/team/detail.jpg" alt="Team Member Picture" data-speed="0.5" />
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                                <div className="sec-title-wrapper pt-120">
                                                    <h2 className="team__member-name-7 animation__char_come">Jassica <br />Oliver</h2>
                                                    <h3 className="team__member-role-7 animation__char_come">UX Researcher and Instructor, at
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
                                                <div className="team__member-work">
                                                    <h4 className="work-title">Portfolio :</h4>
                                                    <ul>
                                                        <li><Link href="#">Behance</Link></li>
                                                        <li><Link href="#">Dribble</Link></li>
                                                        <li><Link href="#">Meduim</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="team__member-social">
                                                    <h4 className="work-title">Follow :</h4>
                                                    <ul>
                                                        <li><Link href="#"><span><i className="fa-brands fa-facebook-f"></i></span></Link></li>
                                                        <li><Link href="#"><span><i className="fa-brands fa-twitter"></i></span></Link></li>
                                                        <li><Link href="#"><span><i className="fa-brands fa-instagram"></i></span></Link></li>
                                                        <li><Link href="#"><span><i className="fa-brands fa-linkedin"></i></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Team area end   */}

                                {/* CTA area start   */}
                                <CtaArea />
                                {/* CTA area end   */}
                            </div>
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

export default TeamDetailsDark;