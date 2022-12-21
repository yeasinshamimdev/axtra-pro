import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/ctaArea";
import HomeFooter from "../components/indexFooter";
import TopHeadDark from "../components/indexHeadDark";
import SwitcherArea from "../components/switcherArea";

export default function Home2Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Home - Design Studio</title>

                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                {/* Google Fonts  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

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

            <main class="dark">

                <TopHeadDark />

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start */}
                            <section class="hero__area-2">
                                <div class="hero__inner-2">
                                    <div class="sec-title-wrapper">
                                        <h2 class="sec-title-3 bg-shape">We Design <br />Unique</h2>
                                        <h2 class="sec-title-3">Digital <br />Experience</h2>
                                    </div>
                                    <div class="hero__text-2">
                                        <p>Thinking, writing and planning with brand are just a of what we do. For
                                            more than 10 years, It’s more
                                            competitive space for agency.</p>
                                        <div id="btn_wrapper" class="hero__button">
                                            <Link href="/service" class="wc-btn-pink btn-hover btn-item"><span></span>
                                                Explore <br />our services <i class="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero2-shape">
                                    <img src="assets/imgs/bg/arrow-long.png" alt="BG Shape" />
                                </div>
                            </section>
                            {/* Hero area end */}


                            {/* Feature area start */}
                            <section class="feature__area-2 pt-130">
                                <div class="feature__top">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                                <div class="sec-title-wrapper">
                                                    <h2 class="sec-title title-anim">Features are more helpful to create creative shapes as well.</h2>
                                                </div>
                                            </div>
                                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                                <div class="feature__text text-anim">
                                                    <p>We are constantly rethinking the future by creating the next generation of products, brands and
                                                        services from a hybrid perspective. The unthinkable today becomes inevitable.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="feature__btm">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xxl-12">
                                                <div class="feature__list animation__feature2">
                                                    <div class="feature__item">
                                                        <img src="assets/imgs/feature/icon/1.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Branding</h3>
                                                        <p>Having these marketplace to your branded skilled team of designers and developers who
                                                            embracement
                                                            perfection.</p>
                                                    </div>
                                                    <div class="feature__item">
                                                        <img src="assets/imgs/feature/icon/2.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Optimum</h3>
                                                        <p>Brand identity design a the key to success whether you breath rebranding an existing business
                                                            or
                                                            creating a business</p>
                                                    </div>
                                                    <div class="feature__item">
                                                        <img class="" src="assets/imgs/feature/icon/3.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Thinking</h3>
                                                        <p>Creative typography plays the big role to pull off this trending more effectively with the
                                                            thinking use a thicker point</p>
                                                    </div>
                                                    <div class="feature__item">
                                                        <img src="assets/imgs/feature/icon/4.png" alt="Feature Icon" />
                                                        <h3 class="feature__title">Execution</h3>
                                                        <p>Stricky with multiple shades of the colours. However, this type of alone can look awesome
                                                            forever
                                                            an online business</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Feature area end */}


                            {/* Roll area start */}
                            <section class="roll__area-2">
                                <div class="swiper roll__slider">
                                    <div class="swiper-wrapper roll__wrapper">
                                        <div class="swiper-slide roll__slide">
                                            <h2>Development</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Studio</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>typhography</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Design</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Element</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Roll area end */}


                            {/* Roll area start */}
                            <section class="roll__area-3">
                                <div dir="rtl" class="swiper roll__slider">
                                    <div class="swiper-wrapper roll__wrapper">
                                        <div class="swiper-slide roll__slide ">
                                            <h2>Development</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Studio</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>typhography</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Design</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Element</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div class="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Roll area end */}


                            {/* Portfolio area start */}
                            <section class="portfolio__area-2">
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
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/1.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/2.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"><Link href="/portfolio-details">crodyflw <span>Website</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/3.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <Link href="/portfolio-details">developers
                                                        <span>digital</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/4.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <Link href="/portfolio-details">Lionpro
                                                        <span>marketeers</span></Link></h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="portfolio__slide-2">
                                                <div class="slide-img">
                                                    <Link href="/portfolio-details"><img src="assets/imgs/portfolio/2/5.jpg" alt="Portfolio Image" /></Link>
                                                </div>
                                                <div class="slide-content">
                                                    <h2 class="sec-title"> <Link href="/portfolio-details">Lionpro <span>Agency</span></Link>
                                                    </h2>
                                                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                                                        both
                                                        ourselves</p>
                                                    <div class="btn-common-wrap">
                                                        <Link href="/portfolio-details" class="btn-common">View details <i
                                                            class="fa-solid fa-arrow-right"></i></Link>
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
                            {/* Portfolio area end */}


                            {/* About area start */}
                            <section class="about__area-2">
                                <div class="container pt-130 pb-110">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">We design and develop
                                                    outstanding Digital <br /> Products
                                                    and digital-first Brands.</h2>
                                            </div>
                                            <div class="sec-text-wrapper">
                                                <div class="sec-text text-anim">
                                                    <p>We help brands stand out through powerful, elegant visual design. Our design philosophy is shaped
                                                        by our experience growing up at our father’s bookbindery. Surrounded by the highest-quality
                                                        materials and turn-of-the-century machines, we observed the art of true craftsmanship firsthand.
                                                    </p>
                                                </div>
                                                <div id="btn_wrapper" class="sec-btn">
                                                    <Link class="wc-btn-pink btn-hover btn-item" href="/about"><span></span> Explore Us <i
                                                        class="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="about__img-2 pb-130">
                                    <img src="assets/imgs/about/2/1.jpg" alt="About Image" data-speed="0.2" />
                                </div>

                                <div class="container pb-140">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <h2 class="brand__title-2 title-anim">We worked with global largest brands
                                            </h2>
                                            <div class="brand__list-2">
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                </div>
                                                <div class="brand__item-2 fade_bottom">
                                                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* About area end */}


                            {/* Service area start */}
                            <section class="service__area-2 pt-130 pb-110">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="sec-text text-anim">
                                                <p>We are passionate to create connected brands and services, and campaigns to enable stable and
                                                    successful relationships between businesses and customers.</p>
                                            </div>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">We grow your brands through
                                                    bold service
                                                    we’re providing</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row pt-140">
                                        <div class="col-xxl-12">
                                            <div class="service__list-2 animation__service-2">
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/1.png" alt="Service Icon" />
                                                        <h3 class="service__title-2">Branding <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/2.png" alt="Service Icon" />
                                                        <h3 class="service__title-2 ">Digital Product <br />Design</h3>
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul>
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="service__item-2">
                                                    <div>
                                                        <img src="assets/imgs/service/2/3.png" alt="Service Icon" />
                                                        <h3 class="service__title-2">Architectural <br />Design</h3>
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
                                        <div class="col-xxl-12">
                                            <div id="btn_wrapper" class="service__btn-2">
                                                <Link href="/service" class="wc-btn-pink btn-hover btn-item"><span></span> View <br />all services
                                                    <i class="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Service area end */}


                            {/* Award area start */}
                            <section class="award__area pt-130 pb-140">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper pb-140">
                                                <h2 class="sec-title title-anim">We’re nominated as Agency of
                                                    the Year amongst best
                                                    Digital Agencies
                                                    Worldwide.</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="award__left">
                                                <h4 class="award__text-2">award</h4>
                                                <h3 class="award__text">award</h3>
                                                <img src="assets/imgs/shape/3.png" alt="Shape Image" data-speed="1" data-lag="0.2" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div class="award__right">
                                                <p>We’re passionate about doing the best digital
                                                    innovation we can and pushing new
                                                    technology
                                                    to its limits. And we achieve
                                                    results we’re proud of beyond the realm.</p>
                                                <div class="award__list">
                                                    <div class="award__item">
                                                        <p>Dribbble</p>
                                                        <p>Nominee</p>
                                                        <p>2021</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Behance</p>
                                                        <p>Winner</p>
                                                        <p>2020</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Template UI</p>
                                                        <p>Nominee</p>
                                                        <p>2018</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Awwwards</p>
                                                        <p>Winner</p>
                                                        <p>2016</p>
                                                    </div>
                                                    <div class="award__item">
                                                        <p>Themeforest</p>
                                                        <p>Winner</p>
                                                        <p>2012</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Award area end */}


                            {/* CTA area start */}
                            <CtaArea />
                            {/* CTA area end */}


                            {/* Blog area start */}
                            <section class="blog__area-2 blog__animation">
                                <div class="container g-0 pt-150 pb-110">
                                    <div class="row ">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title title-anim">Updated Journal</h2>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-4">
                                            <div class="sec-text text-anim">
                                                <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-3 col-md-4">
                                            <div id="btn_wrapper" class="sec-btn">
                                                <Link href="/blog" class="wc-btn-pink btn-hover btn-item"><span></span> Read <br />all journal <i
                                                    class="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item-2">
                                                <div class="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/1.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 class="blog__meta-2"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" class="blog__title-2">Ways of lying to yourself about your
                                                    new relationship.</Link></h5>
                                            </article>
                                        </div>

                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item-2">
                                                <div class="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 class="blog__meta-2"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" class="blog__title-2">How to manage a talented and
                                                    successful de sign team</Link></h5>
                                            </article>
                                        </div>

                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article class="blog__item-2">
                                                <div class="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div class="img-box">
                                                            <img class="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                                            <img class="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 class="blog__meta-2"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" class="blog__title-2">How to bring fold to your startup
                                                    company with Axtra</Link></h5>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Blog area end */}

                        </main>

                        {/* Footer area start */}
                        <HomeFooter />
                        {/* Footer area end */}


                    </div>
                </div>
            </main>
        </div>
    )
}