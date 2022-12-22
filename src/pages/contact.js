import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Footer from '../components/footer';
import Offcanvas from '../components/offcanvas';
import SwitcherArea from '../components/switcherArea';

const Contact = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Contact - Axtra</title>

                {/* Fav Icon  */}
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
            <main>
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
                <SwitcherArea />
                {/* Switcher Area End  */}

                {/* Scroll Smoother   */}
                <div className="has-smooth" id="has_smooth"></div>


                {/* Go Top Button  */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>


                {/* Header area start  */}
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
                {/* Header area end   */}


                {/* Offcanvas area start  */}
                <Offcanvas />
                {/* Offcanvas area end  */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Contact area start  */}
                            <section className="contact__area-6">
                                <div className="container g-0 line pt-120 pb-110">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title-2 animation__char_come">Let’s get in touch</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact__text">
                                                <p>Great! We are excited to hear from you and let’s start
                                                    something special togerter. call us for any inquery.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row contact__btm">
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div className="contact__info">
                                                <h3 className="sub-title-anim-top animation__word_come">Don’t be afraid man ! <br />say hello</h3>
                                                <ul>
                                                    <li><Link href="tel:+(2)578365379">+(2) 578 - 365 - 379</Link></li>
                                                    <li><Link href="mailto:hello@example.com">hello@example.com</Link></li>
                                                    <li><span>230 Norman Street New York, <br /> QC (USA) H8R 1A1</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div className="contact__form">
                                                <form action="#">
                                                    <div className="row g-3">
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="text" name="name" placeholder="Name *" />
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="email" name="email" placeholder="Email *" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="tel" name="phone" placeholder="Phone" />
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="text" name="subject" placeholder="Subject *" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <textarea name="message" placeholder="Messages *"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <div id="btn_wrapper">
                                                                <button className="wc-btn-primary btn-hover btn-item"><span></span> Send <br />Messages <i
                                                                    className="fa-solid fa-arrow-right"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Contact area end  */}

                        </main>

                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div >
            </main >

        </div >
    );
};

export default Contact;