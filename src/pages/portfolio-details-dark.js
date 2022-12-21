import Head from 'next/head';
import React from 'react';
import Footer from '../Components/footer';
import TopHeadDark from '../components/indexHeadDark';
import TopHead from '../Components/topHead';

const PortfolioDetailsDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio Details - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <main class="dark">
                {/* header top start */}
                <TopHeadDark />
                {/* header top end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start   */}
                            <section class="portfolio__detail">
                                <div class="portfolio__detail-top">
                                    <div class="container g-0 line pt-110 pb-130">
                                        <span class="line-3"></span>

                                        <div class="row">
                                            <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                                                <div class="sec-title-wrapper">
                                                    <h2 class="sec-title animation__char_come">Lionpro- <br />Agency</h2>
                                                </div>
                                            </div>

                                            <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                                                <div class="portfolio__detail-info">
                                                    <ul>
                                                        <li>Category <Link href="/category">Development</Link></li>
                                                        <li>Client <span>Webflow</span></li>
                                                        <li>Start Date <span>23 January 2021</span></li>
                                                        <li>Handover <span>05 March 2021</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="portfolio__detail-thumb">
                                    <img src="assets/imgs/portfolio/detail/1.jpg" alt="Portfolio Thumbnail" data-speed="auto" />
                                </div>

                                <div class="portfolio__detail-content">
                                    <div class="container g-0 line pt-140">
                                        <span class="line-3"></span>

                                        <div class="block-content">
                                            <div class="row">
                                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                                    <h2 class="portfolio__detail-title title-anim">Build, streamline and
                                                        evolve together with
                                                        solution</h2>
                                                </div>

                                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                                    <div class="portfolio__detail-text">
                                                        <p>Always ready to push the boundaries, especially when it comes to our own platform, Our
                                                            analytical
                                                            eye
                                                            to create a site that was visually engaging and also optimised for maximum performance. It
                                                            also
                                                            perfectly reflects the journey to help it tell a story to increase its understanding and drive
                                                            action.
                                                            To create a site that was visually engaging for maximum performance.</p>

                                                        <ul>
                                                            <li>+ Brand Development</li>
                                                            <li>+ UX/UI Design</li>
                                                            <li>+ Front-end Development</li>
                                                            <li>+ Copywriting</li>
                                                            <li>+ Shopify Development</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="block-thumb">
                                            <img src="assets/imgs/portfolio/detail/2.jpg" alt="Portfolio Image" data-speed="0.5" />
                                        </div>



                                        <div class="block-content  pt-140">
                                            <div class="row">
                                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                                    <h2 class="portfolio__detail-title title-anim">Visual and typograpy
                                                        hierarchy</h2>
                                                </div>

                                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                                    <div class="portfolio__detail-text">
                                                        <p>Visual hierarchy is the principle of arranging elements to show
                                                            their order of importance.
                                                            Designers
                                                            structure visual characteristics—e.g., menu icons—so users can understand information easily.
                                                            By
                                                            laying out elements logically and strategically, designers influence users’ perceptions and
                                                            guide
                                                            them
                                                            to desired actions. Users notice larger elements more easily can convert.
                                                        </p>

                                                        <div class="fonts">
                                                            <img src="assets/imgs/portfolio/detail/shape.png" alt="Font Style" />
                                                            <ul>
                                                                <li class="regular"><span>regular</span> This is text message</li>
                                                                <li class="medium"><span>Medium</span> Medium typography</li>
                                                                <li class="semibold"><span>SemiBold</span> Just Amazing</li>
                                                                <li class="blod"><span>Blod</span> Awesome</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="block-gallery">
                                            <img src="assets/imgs/portfolio/detail/3.jpg" alt="Portfolio Image" />
                                            <img src="assets/imgs/portfolio/detail/4.jpg" alt="Portfolio Image" />
                                        </div>

                                        <div class="block-thumb">
                                            <img src="assets/imgs/portfolio/detail/5.jpg" alt="Portfolio Image" data-speed="0.5" />
                                        </div>

                                        <div class="block-img-text">
                                            <img src="assets/imgs/portfolio/detail/6.jpg" alt="Portfolio Image" />
                                            <img src="assets/imgs/portfolio/detail/7.jpg" alt="Portfolio Image" />
                                            <p>For those of us who are blessed with good sight. So we seldom consider
                                                it. That’s why going off to
                                                investigate the whys and hows involved is a little like trying to get behind the wind </p>
                                        </div>

                                        <div class="row">
                                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                                <div class="portfolio__detail-btns pt-140 pb-140">
                                                    <Link href="/portfolio-details" class="wc-btn-primary btn-hover"><span></span> Prev Work</a>
                                                    <Link href="/portfolio-details" class="wc-btn-primary btn-hover"><span></span> Next Work</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                            {/* Portfolio area end   */}

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

export default PortfolioDetailsDark;