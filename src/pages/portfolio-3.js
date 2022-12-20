import Head from 'next/head';
import React from 'react';
import CTAArea from '../Components/CTAArea';
import Footer from '../Components/footer';
import TopHead from '../Components/topHead';

const PortfolioThree = () => {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.3 - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <main>
                {/* Top head start */}
                <TopHead />
                {/* Top head end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Portfolio area start   */}
                            <section class="portfolio__area-2 portfolio-v3">
                                <div class="container g-0 line pt-100 pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper text-anim">
                                                <h2 class="sec-title-3 title-anim">Selected <span>Projects</span></h2>
                                                <p class="sec-text">Worked with global brands & agency at the
                                                    intersection of flat design and digital
                                                    technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper portfolio__slider-2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">Lionpro <span>Agency</span></a>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"><Link href="/portfolio-details">crodyflw <span>Website</span></a>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">developers
                                                        <span>digital</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">Lionpro
                                                        <span>marketeers</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></a>
                                                </div>
                                                <div class="slide-content text-anim">
                                                    <h2 class="sec-title title-anim"> <Link href="/portfolio-details">Lionpro <span>Agency</span></a>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="portfolio__slider-2-pagination--">
                                        <div class="swiper-pagination circle-pagination right"></div>
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

export default PortfolioThree;