import Head from 'next/head';
import React from 'react';
import CTAArea from '../Components/CTAArea';
import Footer from '../Components/footer';
import TopHead from '../Components/topHead';

const PortfolioFourDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.4 - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <body class="dark">
                {/* top header start */}
                <TopHead />
                {/* top header end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start  */}
                            <section class="portfolio__area-3 portfolio-v4">
                                <div class="container pt-100 pb-150">
                                    <div class="row pb-150">
                                        <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title-2 animation__char_come">Awesome <br />Projects</h2>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                            <div class="blog__text">
                                                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                                    original collabs. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-sub-title title-anim">Featured <br />Work</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="swiper portfolio__slider-3">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <a href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <a href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <a href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="portfolio__slide-3">
                                                            <a href="/service-details">
                                                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="swiper-pagination"></div>
                                                <div class="swiper-btn">
                                                    <div class="pp-prev"><i class="fa-solid fa-arrow-left"></i></div>
                                                    <div class="pp-next"><i class="fa-solid fa-arrow-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}

                            {/* CTA area start  */}
                            <CTAArea />
                            {/*  CTA area end  */}

                        </main>



                        {/* Footer area start  */}
                        <Footer />
                        {/*  Footer area end  */}

                    </div>
                </div>
            </body>

        </div>
    );
};

export default PortfolioFourDark;