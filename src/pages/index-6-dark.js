import Head from "next/head";
import Link from "next/link";
import TopHeadDark from "../components/indexHeadDark";
import SwitcherArea from "../components/switcherArea";

export default function Home6Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />

                <title>Home - Startup Agency</title>

                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/icon/logo-3.png" />
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
                            <div class="home-wrapper-4">

                                {/* Hero area start */}
                                <section class="hero__area-6">
                                    <div class="container g-0 line_4">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div class="hero__content-6 hero__six_anim">
                                                    <img class="hero__arrow-icon" src="assets/imgs/hero/4/arrow-icon.png" alt="Arrow Icon" />
                                                    <h1 class="hero__title-6">Magical <br /> Axtra Startup Solution</h1>
                                                    <p>Our team always reviews all previous methods with <br /> models, and
                                                        processes to determined</p>
                                                    <Link class="btn-started btn-hover" href="/contact">Get Started</Link>
                                                </div>
                                            </div>
                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div class="hero__right-6">
                                                    <img src="assets/imgs/hero/4/hero-4.png" alt="Hero Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img class="hero__shape" src="assets/imgs/hero/4/hero-shape.png" alt="Shape Image" />
                                    <img class="hero__shape-2" src="assets/imgs/hero/4/hero-shape-2.png" alt="Layout" />
                                    <img class="hero__shape-3" src="assets/imgs/hero/4/hero-shape-3.png" alt="Star Icon" />
                                    <img class="shape-4" src="assets/imgs/shape/20.png" alt="Star Icon" />
                                </section>
                                {/* Hero area end  */}


                                {/* Workflow area start  */}
                                <section class="workflow__area-4">
                                    <div class="container line_4 pt-100 pb-130">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="row animation_workflow_6">
                                            <div class="col-xxl-12">
                                                <div class="title-wrapper-6 text-anim">
                                                    <h2 class="sec-subtile-6">Processing</h2>
                                                    <h3 class="sec-title-6 title-anim">How we work</h3>
                                                    <p>Adjust your design through a wide range of theme options in the <br /> development and instantly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="workflow__item-4">
                                                    <img src="assets/imgs/thumb/1.png" alt="Work Image" />
                                                    <h4 class="workflow__title-4">Teamwork</h4>
                                                    <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="workflow__item-4">
                                                    <img src="assets/imgs/thumb/2.png" alt="Work Image" />
                                                    <h4 class="workflow__title-4">Networking</h4>
                                                    <p>Using year-over-year design and latest techs, we will ensure that your new website will be
                                                        visible
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="workflow__item-4">
                                                    <img src="assets/imgs/thumb/3.png" alt="Work Image" />
                                                    <h4 class="workflow__title-4">Exposure</h4>
                                                    <p>Brand strategy tools are made size for marketing teams taken possession of global strategy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Workflow area end  */}


                                {/* Feature area start  */}
                                <section class="feature__area-6">
                                    <div class="container line_4">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                                <div class="feature__content-left">
                                                    <h2 class="sec-subtile-6">Features</h2>
                                                    <h3 class="sec-title-6 title-anim">We handle visual <br /> design challenges <br /> our way.</h3>
                                                </div>
                                            </div>
                                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                                <div class="feature__content-right text-anim">
                                                    <h4 class="feature__title-6">Creativity</h4>
                                                    <p>We are constantly rethinking the future by creating the next generation of products, <span>brands
                                                        and design features</span> from a
                                                        hybrid perspective.</p>
                                                    <p>Regulatory oneven an enterprises such she and the got the did attributing and pushed.</p>
                                                    <img class="feature__img-1" src="assets/imgs/feature/4/1.png" alt="Icon" />
                                                    <img class="feature__img-2" src="assets/imgs/feature/4/2.png" alt="Icon" />
                                                    <img class="feature__img-3" src="assets/imgs/feature/4/3.png" alt="Icon" />
                                                </div>
                                            </div>
                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div class="feature__content">
                                                    <img src="assets/imgs/feature/4/feature.jpg" alt="Features Image" />
                                                </div>
                                            </div>
                                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div class="feature__content-btm">
                                                    <div class="feature__content-item fade_bottom_4">
                                                        <img src="assets/imgs/feature/4/icon-3.png" alt="Features Image" />
                                                        <h5>Unique Header & <br /> Sidebar</h5>
                                                        <p>Unique digital header widget metaverse wearables</p>
                                                    </div>
                                                    <div class="feature__content-item fade_bottom_4">
                                                        <img src="assets/imgs/feature/4/icon-4.png" alt="Features Image" />
                                                        <h5>5+ Navigation <br /> Bars</h5>
                                                        <p>Content focused grid designs unique social element</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Feature area end */}


                                {/* Service area end */}
                                <section class="service__area-4">
                                    <div class="container g-0 line_4 pt-150 pb-140">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                                <div class="service__left-6">
                                                    <h2 class="sec-subtile-6">Services</h2>
                                                    <h3 class="sec-title-6 title-anim">Our full <br /> creative services <br /> for you</h3>
                                                </div>
                                            </div>
                                            <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                                <div class="service__right-4 text-anim">
                                                    <p>We are constantly rethinking the future by creating the next generation of products, <span>brands
                                                        and services from a hybrid perspective.</span></p>
                                                    <Link class="btn-view" href="/service">View All Service <i class="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="service__inner-4">
                                            <div class="row">
                                                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                                    <div class="service__img-left">
                                                        <img src="assets/imgs/service/4/service-1.png" alt="Service" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                                    <div class="service__list-4">
                                                        <div class="service__item-4 fade_bottom_2">
                                                            <div class="service__item-number">
                                                                <span>01</span>
                                                            </div>
                                                            <div class="service__title-wrapper-4">
                                                                <h4><Link class="service__item-title" href="#">Brand Strategy</Link></h4>
                                                            </div>
                                                            <div class="service__item-icon">
                                                                <Link href="/service-details"><i class="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div class="service__item-4 fade_bottom_2">
                                                            <div class="service__item-number">
                                                                <span>02</span>
                                                            </div>
                                                            <div class="service__title-wrapper-4">
                                                                <h4><Link class="service__item-title" href="#">Development</Link></h4>
                                                            </div>
                                                            <div class="service__item-icon">
                                                                <Link href="/service-details"><i class="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div class="service__item-4 fade_bottom_2">
                                                            <div class="service__item-number">
                                                                <span>03</span>
                                                            </div>
                                                            <div class="service__title-wrapper-4">
                                                                <h4><Link class="service__item-title" href="#">UI/UX Design</Link></h4>
                                                            </div>
                                                            <div class="service__item-icon">
                                                                <Link href="/service-details"><i class="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div class="service__item-4 fade_bottom_2">
                                                            <div class="service__item-number">
                                                                <span>04</span>
                                                            </div>
                                                            <div class="service__title-wrapper-4">
                                                                <h4><Link class="service__item-title" href="#">Digital marketing</Link></h4>
                                                            </div>
                                                            <div class="service__item-icon">
                                                                <Link href="/service-details"><i class="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Service area end  */}


                                {/* faq area start  */}
                                <section class="faq__area-4 pt-150 pb-150">
                                    <div class="container g-0">
                                        <div class="row">
                                            <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-6">
                                                <div class="faq__sec-title text-anim">
                                                    <h2 class="sec-subtile-6">Expertise</h2>
                                                    <h3 class="sec-title-6 title-anim">With more than 16+ years of experience, our team has become a
                                                        leader in
                                                        digital innovations.</h3>
                                                    <p>Grow brands through bold, strategic creative</p>
                                                    <Link class="btn-view" href="/about">Know More <i class="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>

                                            <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
                                                <div class="faq__list-4">
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="accordion-item fade_bottom_3">
                                                            <h2 class="accordion-header" id="headingOne">
                                                                <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Design should enrich our day
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                                data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">
                                                                    <p>Using year-over-year design approaches and latest techs, we will ensure that your new
                                                                        website will be <span>accessible, and treads lightly</span>.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="accordion-item fade_bottom_3">
                                                            <h2 class="accordion-header" id="headingTwo">
                                                                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Bring their individual experience and creative
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                                data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">
                                                                    <p>This is the second items accordion body. It is hidden by default, until the
                                                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                                                        classes</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="accordion-item fade_bottom_3">
                                                            <h2 class="accordion-header" id="headingThree">
                                                                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Human centred design to challenges
                                                                </button>
                                                            </h2>
                                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                                                data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">
                                                                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                                        brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                                        people</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="accordion-item fade_bottom_3">
                                                            <h2 class="accordion-header" id="headingFour">
                                                                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                    Design should enrich our day
                                                                </button>
                                                            </h2>
                                                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                                                data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">
                                                                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                                        brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                                        people</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img class="faq__img6-1" src="assets/imgs/bg/4/1.png" alt="Shape" />
                                        <img class="faq__img6-2" src="assets/imgs/bg/4/2.png" alt="Shape" />
                                    </div>
                                </section>
                                {/* faq area end  */}


                                {/* Portfolio area start  */}
                                <section class="portfolio__area-4">
                                    <div class="container-fluid line_4 pt-150">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="portfolio__sec-title text-anim">
                                                    <h2 class="sec-subtile-6">Portfolio</h2>
                                                    <h3 class="sec-title-6 title-anim">Our selected <br /> projects</h3>
                                                    <p>View the full case study of our recent featured and awesome works that we created for our
                                                        clients.</p>
                                                </div>
                                            </div>
                                            <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                                <div class="portfolio__wrapper-4">
                                                    <div class="swiper portfolio__slider-4">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide">
                                                                <div class="portfolio__item-4">
                                                                    <Link href="/portfolio">
                                                                        <div class="portfolio__item-inner">
                                                                            <div class="portfolio__title-wrapper">
                                                                                <h4 class="portfolio__title-4">Lionpro Agency</h4>
                                                                                <h5 class="portfolio__subtitle-4">02 May 2021</h5>
                                                                            </div>
                                                                            <div class="portfolio__icon-link">
                                                                                <span class="portfolio__icon-4"><i class="fa-solid fa-arrow-right"></i></span>
                                                                            </div>
                                                                        </div>
                                                                        <img src="assets/imgs/portfolio/4/1.jpg" alt="Portfolio Image" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="portfolio__item-4">
                                                                    <Link href="/portfolio">
                                                                        <div class="portfolio__item-inner">
                                                                            <div class="portfolio__title-wrapper">
                                                                                <h4 class="portfolio__title-4">Lionpro Agency</h4>
                                                                                <h5 class="portfolio__subtitle-4">02 May 2021</h5>
                                                                            </div>
                                                                            <div class="portfolio__icon-link">
                                                                                <span class="portfolio__icon-4"><i class="fa-solid fa-arrow-right"></i></span>
                                                                            </div>
                                                                        </div>
                                                                        <img src="assets/imgs/portfolio/4/2.jpg" alt="Portfolio Image" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="portfolio__item-4">
                                                                    <Link href="/portfolio">
                                                                        <div class="portfolio__item-inner">
                                                                            <div class="portfolio__title-wrapper">
                                                                                <h4 class="portfolio__title-4">Lionpro Agency</h4>
                                                                                <h5 class="portfolio__subtitle-4">02 May 2021</h5>
                                                                            </div>
                                                                            <div class="portfolio__icon-link">
                                                                                <span class="portfolio__icon-4"><i class="fa-solid fa-arrow-right"></i></span>
                                                                            </div>
                                                                        </div>
                                                                        <img src="assets/imgs/portfolio/4/1.jpg" alt="Portfolio Image" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="container line_4 portfolio6__line">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </section>
                                {/* Portfolio area end  */}

                                {/* Brand area start  */}
                                <section class="brand__area-4">
                                    <div class="container g-0 line_4 pt-130 pb-150">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        /
                                        <div class="row">
                                            <div class="col-xxl-12">
                                                <h2 class="brand__title-3 title-anim" data-speed="1">We worked with global largest
                                                    brands
                                                </h2>
                                                <div class="brand__list-3">
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
                                {/* Brand area end  */}

                                {/* Testimonial area start  */}
                                <section class="testimonial__area-4 ">
                                    <div class="container g-0 line_4">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xxl-12">
                                                <div class="testimonial__sec-title text-anim">
                                                    <h2 class="sec-subtile-6">Testimonials</h2>
                                                    <h3 class="sec-title-6 title-anim">Clients feedback</h3>
                                                    <p>We are Trusted by 10,000+ global customers teams like have projects with this template</p>
                                                </div>
                                            </div>
                                            <div class="swiper testimonial__slider-4">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide testimonial__slide-4">
                                                        <img class="testimonial__img-4" src="assets/imgs/testimonial/4/1.jpg" alt="Testimonial Image" />
                                                        <div class="testimonial__info-4">
                                                            <h4 class="testimonial__feedback-4">Design Quality</h4>
                                                            <p>Our philosophy is built on people who are addicted on creating, learning, and growing
                                                                together, which allows us to discover better others miss.</p>
                                                            <h5 class="testimonial__name-4">Jessica Sherlock</h5>
                                                            <h6 class="testimonial__role-4">Manager, Oitaka </h6>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide testimonial__slide-4">
                                                        <img class="testimonial__img-4" src="assets/imgs/testimonial/4/2.jpg" alt="Testimonial Image" />
                                                        <div class="testimonial__info-4">
                                                            <h4 class="testimonial__feedback-4">Clean Code</h4>
                                                            <p>I am very glod happy with this theme, the website loads much faster than any other theme I
                                                                have used so far clean code and responsive layout.</p>
                                                            <h5 class="testimonial__name-4">Sharoon Kavin</h5>
                                                            <h6 class="testimonial__role-4">CEO, Sharoon</h6>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide testimonial__slide-4">
                                                        <img class="testimonial__img-4" src="assets/imgs/testimonial/4/3.jpg" alt="Testimonial Image" />
                                                        <div class="testimonial__info-4">
                                                            <h4 class="testimonial__feedback-4">Instant Support</h4>
                                                            <p>In the next time I hire Axtra as they helping innovators and brands through cultural insight,
                                                                strategiccal vision, and innovation and look too beyond.</p>
                                                            <h5 class="testimonial__name-4">Sharly Mehroon</h5>
                                                            <h6 class="testimonial__role-4">Manager, Kavitan</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="testimonial__btn-4">
                                                    <div class="next-button swipper-btn"><i class="fa-solid fa-arrow-left"></i></div>
                                                    <div class="prev-button swipper-btn"><i class="fa-solid fa-arrow-right"></i></div>
                                                    <div class="pagination testimonial__pagination-4">
                                                        <div class="pag"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Testimonial area end  */}


                                {/* Solution area start  */}
                                <section class="solution__area-4">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xxl-5 offset-xxl-7 col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                                                <div class="solution__content">
                                                    <h2 class="sec-subtile-6">Approch</h2>
                                                    <h3 class="sec-title-6 title-anim">Make your <br /> business visible <br /> online</h3>
                                                    <ul class="solution__list title-anim">
                                                        <li> Web Interation Design</li>
                                                        <li>Generation Technology</li>
                                                        <li>Facility Approch</li>
                                                        <li>Seamless Integration</li>
                                                        <li>Audio Performance</li>
                                                        <li>Dashboard Analytics</li>
                                                        <li>Customization</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Solution area end  */}


                                {/* Blog area start  */}
                                <section class="blog__area-4 blog__animation">
                                    <div class="container g-0 line_4 pt-150 pb-150">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div class="sec-title-wrapper text-anim">
                                                    <h2 class="sec-subtile-6">Recent Blog</h2>
                                                    <h3 class="sec-title-6 title-anim">Updated <br /> Journal</h3>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                                                    <a class="btn-started" href="#">All Articles <span><i
                                                        class="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <article class="blog__item-4">
                                                    <div class="blog__img-4">
                                                        <Link href="/blog-details">
                                                            <img src="assets/imgs/blog/4/1.jpg" alt="Blog Image" />
                                                        </Link>
                                                    </div>
                                                    <h4 class="blog__meta-4"><Link href="/category">UI Design</Link> <span>02 May 2019</span></h4>
                                                    <h5><Link href="/blog-details" class="blog__title-4">Ways of lying to yourself about your new
                                                        relationship.</Link></h5>
                                                    <Link href="/blog-details" class="blog__btn-4">Read More <span><i
                                                        class="fa-solid fa-arrow-right"></i></span></Link>
                                                </article>
                                            </div>

                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <article class="blog__item-4">
                                                    <div class="blog__img-4">
                                                        <Link href="/blog-details">
                                                            <img src="assets/imgs/blog/4/2.jpg" alt="Blog Image" />
                                                        </Link>
                                                    </div>
                                                    <h4 class="blog__meta-4"><Link href="/category">UX Design</Link> <span>02 May 2019</span></h4>
                                                    <h5><Link href="/blog-details" class="blog__title-4">Ways of lying to yourself about your new
                                                        relationship.</Link></h5>
                                                    <Link href="/blog-details" class="blog__btn-4">Read More <span><i
                                                        class="fa-solid fa-arrow-right"></i></span></Link>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Blog area end  */}

                                {/* CTA area start  */}
                                <div class="cta__area-4">
                                    <div class="container g-0 line_4 pb-150">
                                        <div class="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div class="cta__inner-4">
                                            <div class="row">
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                    <div class="cta__content-4">
                                                        <img src="assets/imgs/thumb/4/1.png" alt="Cta Image" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                    <div class="cta__content-4">
                                                        <h2 class="cta__title-4 title-anim">Lat’s make someting great together</h2>
                                                    </div>
                                                </div>
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                    <div class="cta__content-4 text-anim">
                                                        <p>Using year-over-year most design approaches and latest techs website will be lightly.</p>
                                                        <Link class="btn-started" href="/contact">Get a Quote <span><i
                                                            class="fa-solid fa-arrow-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <img src="assets/imgs/shape/21.png" alt="shape Image" class="cta-shape" />
                                            <img src="assets/imgs/shape/22.png" alt="shape Image" class="cta-shape-2" />
                                        </div>
                                    </div>
                                </div>
                                {/* CTA area end  */}

                            </div>
                        </main>


                        {/* Footer area start  */}
                        <footer class="footer__area-6">
                            <div class="container g-0 line_4">
                                <div class="line-col-4">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>

                                <div class="row">
                                    <div class="col-xxl-12">
                                        <div class="footer__top-6 pt-150 pb-140">
                                            <div class="footer__item-6">
                                                <img class="footer__logo logo-light" src="assets/imgs/logo/site-logo-white-2.png" alt="Footer Logo" />
                                                <img class="footer__logo logo-dark" src="assets/imgs/logo/logo-black.png" alt="Footer Logo" />
                                                <p>When do they work well, and when do they <br /> on us and finally, when do we actually need how can
                                                    we avoid them.</p>
                                                <ul class="footer__social-6">
                                                    <li><Link href="#"><span><i class="fa-brands fa-facebook-f"></i></span></Link></li>
                                                    <li><Link href="#"><span><i class="fa-brands fa-twitter"></i></span></Link></li>
                                                    <li><Link href="#"><span><i class="fa-brands fa-instagram"></i></span></Link></li>
                                                    <li><Link href="#"><span><i class="fa-brands fa-linkedin"></i></span></Link></li>
                                                </ul>
                                            </div>

                                            <div class="footer__item-6">
                                                <h2 class="footer__item-title">Information</h2>
                                                <ul class="footer__link-6">
                                                    <li><Link href="/about">About Company</Link></li>
                                                    <li><Link href="/career">Career</Link></li>
                                                    <li><Link href="/portfolio">Case Study</Link></li>
                                                    <li><Link href="#">Unloack System</Link></li>
                                                    <li><Link href="#">Blueprint</Link></li>
                                                </ul>
                                            </div>

                                            <div class="footer__item-6">
                                                <h2 class="footer__item-title">Contact Us</h2>
                                                <ul class="footer__info-6">
                                                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                                    <li><Link href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </Link></li>
                                                    <li><Link href="mailto:info@buildyexample.com">info@buildyexample.com</Link></li>
                                                </ul>
                                            </div>
                                            <div class="footer__item-6">
                                                <h2 class="footer__item-title">newsletter</h2>
                                                <form action="#">
                                                    <div class="footer__newsletter-6">
                                                        <input type="email" name="email" required placeholder="Enter your email" />
                                                        <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                                                    </div>
                                                    <div class="footer__chekbox">
                                                        <input type="checkbox" id="check_box" name="checkbox" />
                                                        <label>I’m okay with getting emails and having that activity and privacy policy.</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="footer__btm-6">
                                            <div class="row">
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                                    <div class="footer__copyright-6">
                                                        <p>© 2022 - 2025 | Alrights reserved by <br /> <Link href="https://wealcoder.com/"
                                                            target="_blank" rel="noreferrer">Wealcoder</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                                    <div class="footer__nav">
                                                        <ul class="footer-menu menu-anim">
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