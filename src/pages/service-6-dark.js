import Head from "next/head";
import Link from "next/link";
import TopHeadDark from "../components/home/indexHeadDark";
import CtaArea from "../components/common/ctaArea";

export default function Service6Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service - V.6</title>

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
            <main className="dark">
                {/* Top head start  */}
                <TopHeadDark />
                {/* Top head end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start  */}
                            <section className="hero__area-7">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="hero__title-wrap-7">
                                                <h1 className="hero__title-7">Award-winning <img src="assets/imgs/home-7/shape-1.png" alt="shape" />
                                                    digital solution
                                                    agency <img src="assets/imgs/home-7/shape-2.png" alt="" /></h1>
                                            </div>
                                            <div className="hero__text-7">
                                                <h2 className="about">service</h2>
                                                <p>We question and try to see everything from every perspective. Our passion lies in making everything
                                                    universal human values, to expand the possibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/home-7/shape-3.png" alt="Shape" className="shape-1" />
                            </section>
                            {/* Hero area end  */}


                            {/* Service area start  */}
                            <section className="service__area-7 pt-130">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="service__items-7 animation_service_7">
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Branding <span>design</span></h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Interactive <span>Design</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Web & Mobile <span>Development</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Digital <span> Marketing</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Business <span>Strategy</span></h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                                <div className="service__item-7">
                                                    <Link href="/service-details">
                                                        <h3 className="service__title-7">Illustration <span>Modelling</span> </h3>
                                                    </Link>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                    </p>
                                                    <ul>
                                                        <li>+ Logo Design</li>
                                                        <li>+ Advertisement</li>
                                                        <li>+ Promotion</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Service area end  */}

                            {/* CTA area start  */}
                            <CtaArea />
                            {/* CTA area end  */}

                        </main>

                        {/* Footer area start  */}
                        <footer className="footer__area-2 pt-130">
                            <div className="container">
                                <div className="footer__top-2 text-anim">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <h2 className="sec-title-3 title-anim">Get started <br /> now</h2>
                                            <p className="footer__sub-title">If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer__middle-2">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="footer__location-2">
                                                <div className="location">
                                                    <h3>London</h3>
                                                    <p>Baltia Squar, Mark Street, <br />
                                                        London</p>
                                                </div>
                                                <div className="location">
                                                    <h3>New York</h3>
                                                    <p>Nenuya Centre, Elia Street <br />
                                                        New York, USA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="footer__subscribe-2">
                                                <form action="#">
                                                    <input type="text" name="email" placeholder="Enter your email" />
                                                    <button type="submit" className="submit"><img src="assets/imgs/icon/arrow-black.png"
                                                        alt="Arrow Icon" /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer__btm-2">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                            <div className="footer__copyright-2">
                                                <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                            <div className="footer__nav">
                                                <ul className="footer-menu menu-anim">
                                                    <li><Link href="/about">about us</Link></li>
                                                    <li><Link href="/contact">contact</Link></li>
                                                    <li><Link href="/career">Career</Link></li>
                                                    <li><Link href="/faq">FAQs</Link></li>
                                                </ul>
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