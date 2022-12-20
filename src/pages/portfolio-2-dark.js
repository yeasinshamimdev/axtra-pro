import Head from 'next/head';
import React from 'react';
import CTAArea from '../Components/CTAArea';
import Footer from '../Components/footer';
import TopHead from '../Components/topHead';

const PortfolioSecondDark = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.2 - Axtra</title>

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

                            <section class="pt-150 pb-130 portfolio-v2">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title-2 animation__char_come">Selected <br /> Projects</h2>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                            <div class="blog__text">
                                                <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                                                    original collabs. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Portfolio area start  */}
                            <section class="portfolio__area pb-140">
                                <div class="container">
                                    <div class="row top_row">

                                        <h2 class="portfolio__text">work</h2>
                                        <div class="portfolio__list-1">
                                            <div class="portfolio__item">
                                                <Link href="/portfolio-details"><img class="mover" src="assets/imgs/portfolio/1/1.jpg"
                                                    alt="Portfolio Image" /></a>
                                                <div class="portfolio__info">
                                                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div class="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></a>
                                                <div class="portfolio__info">
                                                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div class="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg" alt="Portfolio Image" /></a>
                                                <div class="portfolio__info">
                                                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div class="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg" alt="Portfolio Image" /></a>
                                                <div class="portfolio__info">
                                                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div class="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/1.jpg" alt="Portfolio Image" /></a>
                                                <div class="portfolio__info">
                                                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div class="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></a>
                                                <div class="portfolio__info">
                                                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row row_bottom">
                                        <div class="col-xxl-12">
                                            <div class="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                                                <a class="wc-btn-secondary btn-hover btn-item" href="/portfolio"><span></span>Load More</a>
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
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}


                    </div>
                </div>
            </main>
        </div>
    );
};

export default PortfolioSecondDark;