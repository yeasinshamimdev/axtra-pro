import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer';
import Offcanvas from '../components/offcanvas';
import SwitcherArea from '../components/switcherArea';

const BlogSecond = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Blog V.3 - Axtra</title>

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
                {/* Cursor Animation   */}
                <div className="cursor1"></div>
                <div className="cursor2"></div>


                {/* Preloader   */}
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


                {/* Switcher Area Start   */}
                <SwitcherArea />
                {/* Switcher Area End  */}



                {/* Scroll Smoother  */}
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


                {/* Offcanvas area start --> */}
                <Offcanvas />
                {/* Offcanvas area end  */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Blog area start  */}
                            <section className="blog__area-3 blog-v3 blog__animation">
                                <div className="container line">
                                    <div className="line-3"></div>
                                    <div className="row ">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper text-anim pt-130">
                                                <h2 className="sec-sub-title">Recent Blog</h2>
                                                <h3 className="sec-title title-anim">Read Updated <br />Journal</h3>
                                                <p>Read our blog and try to see everything from every perspective. Our passion lies in making
                                                    everything
                                                    accessible and aesthetic for everyone. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <article className="blog__item-3">
                                                <div className="blog__img-wrapper-3">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="blog__info-3">
                                                    <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                    <h5><Link href="/blog-details" className="blog__title-3">How to bring fold to your startup
                                                        company with
                                                        Axtra</Link></h5>
                                                    <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </div>
                                            </article>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <article className="blog__item-3">
                                                <div className="blog__img-wrapper-3">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="blog__info-3">
                                                    <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                    <h5><Link href="/blog-details" className="blog__title-3">How to manage a talented and
                                                        successful design
                                                        team</Link></h5>
                                                    <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <article className="blog__item-3">
                                                <div className="blog__img-wrapper-3">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="blog__info-3">
                                                    <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                    <h5><Link href="/blog-details" className="blog__title-3">How to bring fold to your startup
                                                        company with
                                                        Axtra</Link></h5>
                                                    <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </div>
                                            </article>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <article className="blog__item-3">
                                                <div className="blog__img-wrapper-3">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="blog__info-3">
                                                    <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                    <h5><Link href="/blog-details" className="blog__title-3">How to manage a talented and
                                                        successful design
                                                        team</Link></h5>
                                                    <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </div>
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
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlogSecond;