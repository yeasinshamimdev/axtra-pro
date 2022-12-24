import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer';
import Offcanvas from '../components/common/offcanvas';
import OffcanvasDark from '../components/common/offcanvasDark';
import SwitcherAreaDark from '../components/common/switcherAreaDark';

const BlogDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Blog - Axtra</title>

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
                            {/* Blog area start */}
                            <section className="blog__area-6 blog__animation">
                                <div className="container g-0 line pt-110 pb-110">
                                    <span className="line-3"></span>
                                    <div className="row pb-130">
                                        <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title-2 animation__char_come">We always <br />think</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                            <div className="blog__text">
                                                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                                    original collabs. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row reset-grid">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/1.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/1.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 15 March 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">Ways of lying to yourself about your new
                                                    relationship.</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to manage a talented and successful de
                                                    sign
                                                    team</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2022</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to bring fold to your startup company
                                                    with
                                                    Axtra</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/4.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/4.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 22 Dec 2018</h4>
                                                <h5><Link href="/blog-details" className="blog__title">Ways of lying to yourself about your new
                                                    relationship.</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/5.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/5.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to manage a talented and successful de
                                                    sign
                                                    team</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/6.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/6.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to bring fold to your startup company
                                                    with
                                                    Axtra</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Blog area end   */}

                            {/* CTA area start   */}
                            <CtaArea />
                            {/* CTA area end   */}
                        </main>
                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end   */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlogDark;