import Head from 'next/head';
import React from 'react';
import Footer from '../Components/Footer';
import TopHead from '../Components/topHead';
import CTAArea from '../Components/CTAArea';

const PortfolioDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <main class="dark">
                {/* Top head start */}
                <TopHead portfolio={true} />
                {/* Top head end */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Portfolio area start  */}
                            <section class="portfolio__area-6">
                                <div class="container line pt-100 pb-140">
                                    <span class="line-3"></span>
                                    <div class="zi-9">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                                                <div class="sec-title-wrapper portfolio__title-wrap-6">
                                                    <div class="">
                                                        <h2 class="sec-sub-title animation__char_come">Featured</h2>
                                                        <h3 class="sec-title animation__char_come_long">Work</h3>
                                                        <p>View the full case study of our recent featured and awesome works that we created for our
                                                            clients.
                                                        </p>
                                                    </div>
                                                    <div class="portfolio__pagination-6">
                                                        <span class="portfolio__current">01</span> / 0<span class="portfolio__total"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                                                <div class="portfolio__wrapper-6">
                                                    <div class="portfolio__list-6">
                                                        <div class="portfolio__item-6" data-portfitem="1">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/1.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="2">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/2.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="3">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/3.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="4">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/4.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="5">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/5.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="6">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/6.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div class="portfolio__item-6" data-portfitem="7">
                                                            <Link href="/portfolio-details">
                                                                <img src="assets/imgs/portfolio/6/7.jpg" alt="Portfolio Image" data-speed="0.4" />
                                                                <div class="portfolio__content-6">
                                                                    <h4 class="portfolio__title-6">Lionpro Agency</h4>
                                                                    <h5 class="portfolio__date">02 May 2021</h5>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end   */}


                            {/* CTA area start   */}
                            <CTAArea />
                            {/* CTA area end   */}

                        </main>
                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioDark;