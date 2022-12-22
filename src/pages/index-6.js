import Head from "next/head";
import Link from "next/link";
import TopHead from "../components/indexHead";

export default function Home6() {
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

                <TopHead />

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="home-wrapper-4">

                                {/* Hero area start  */}
                                <section className="hero__area-6">
                                    <div className="container g-0 line_4">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="hero__content-6 hero__six_anim">
                                                    <img className="hero__arrow-icon" src="assets/imgs/hero/4/arrow-icon.png" alt="Arrow Icon" />
                                                    <h1 className="hero__title-6 ">Magical <br /> Axtra Startup Solution </h1>
                                                    <p>Our team always reviews all previous methods with <br /> models, and
                                                        processes to determined</p>
                                                    <Link className="btn-started btn-hover" href="/contact">Get Started</Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="hero__right-6">
                                                    <img src="assets/imgs/hero/4/hero-4.png" alt="Hero Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="hero__shape" src="assets/imgs/hero/4/hero-shape.png" alt="Shape Image" />
                                    <img className="hero__shape-2" src="assets/imgs/hero/4/hero-shape-2.png" alt="Layout" />
                                    <img className="hero__shape-3" src="assets/imgs/hero/4/hero-shape-3.png" alt="Star Icon" />
                                    <img className="shape-4" src="assets/imgs/shape/20.png" alt="Star Icon" />
                                </section>
                                {/* Hero area end  */}


                                {/* Workflow area start  */}
                                <section className="workflow__area-4">
                                    <div className="container line_4 pt-100 pb-130">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row animation_workflow_6">
                                            <div className="col-xxl-12">
                                                <div className="title-wrapper-6 text-anim">
                                                    <h2 className="sec-subtile-6">Processing</h2>
                                                    <h3 className="sec-title-6 title-anim">How we work</h3>
                                                    <p>Adjust your design through a wide range of theme options in the <br /> development and instantly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="workflow__item-4">
                                                    <img src="assets/imgs/thumb/1.png" alt="Work Image" />
                                                    <h4 className="workflow__title-4">Teamwork</h4>
                                                    <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="workflow__item-4">
                                                    <img src="assets/imgs/thumb/2.png" alt="Work Image" />
                                                    <h4 className="workflow__title-4">Networking</h4>
                                                    <p>Using year-over-year design and latest techs, we will ensure that your new website will be
                                                        visible
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="workflow__item-4">
                                                    <img src="assets/imgs/thumb/3.png" alt="Work Image" />
                                                    <h4 className="workflow__title-4">Exposure</h4>
                                                    <p>Brand strategy tools are made size for marketing teams taken possession of global strategy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Workflow area end  */}


                                {/* Feature area start  */}
                                <section className="feature__area-6">
                                    <div className="container line_4">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                                <div className="feature__content-left">
                                                    <h2 className="sec-subtile-6">Features</h2>
                                                    <h3 className="sec-title-6 title-anim">We handle visual <br /> design challenges <br /> our way.</h3>
                                                </div>
                                            </div>
                                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                                <div className="feature__content-right">
                                                    <h4 className="feature__title-6">Creativity</h4>
                                                    <p>We are constantly rethinking the future by creating the next generation of products, <span>brands
                                                        and design features</span> from a
                                                        hybrid perspective.</p>
                                                    <p>Regulatory oneven an enterprises such she and the got the did attributing and pushed.</p>
                                                    <img className="feature__img-1" src="assets/imgs/feature/4/1.png" alt="Icon" />
                                                    <img className="feature__img-2" src="assets/imgs/feature/4/2.png" alt="Icon" />
                                                    <img className="feature__img-3" src="assets/imgs/feature/4/3.png" alt="Icon" />
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="feature__content">
                                                    <img src="assets/imgs/feature/4/feature.jpg" alt="Features Image" />
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="feature__content-btm">
                                                    <div className="feature__content-item fade_bottom_4">
                                                        <img src="assets/imgs/feature/4/icon-1.png" alt="Features Image" />
                                                        <h5>Unique Header & <br /> Sidebar</h5>
                                                        <p>Unique digital header widget metaverse wearables</p>
                                                    </div>
                                                    <div className="feature__content-item fade_bottom_4">
                                                        <img src="assets/imgs/feature/4/icon-2.png" alt="Features Image" />
                                                        <h5>5+ Navigation <br /> Bars</h5>
                                                        <p>Content focused grid designs unique social element</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Feature area end  */}

                                {/* Service area end  */}
                                <section className="service__area-4">
                                    <div className="container g-0 line_4 pt-150 pb-140">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                                <div className="service__left-6">
                                                    <h2 className="sec-subtile-6">Services</h2>
                                                    <h3 className="sec-title-6 title-anim">Our full <br /> creative services <br /> for you</h3>
                                                </div>
                                            </div>
                                            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                                <div className="service__right-4">
                                                    <p>We are constantly rethinking the future by creating the next generation of products, <span>brands
                                                        and services from a hybrid perspective.</span></p>
                                                    <Link className="btn-view" href="/service">View All Service <i className="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service__inner-4">
                                            <div className="row">
                                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                                    <div className="service__img-left">
                                                        <img src="assets/imgs/service/4/service-1.png" alt="Service" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                                    <div className="service__list-4">
                                                        <div className="service__item-4 fade_bottom_2">
                                                            <div className="service__item-number">
                                                                <span>01</span>
                                                            </div>
                                                            <div className="service__title-wrapper-4">
                                                                <h4><Link className="service__item-title" href="#">Brand Strategy</Link></h4>
                                                            </div>
                                                            <div className="service__item-icon">
                                                                <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="service__item-4 fade_bottom_2">
                                                            <div className="service__item-number">
                                                                <span>02</span>
                                                            </div>
                                                            <div className="service__title-wrapper-4">
                                                                <h4><Link className="service__item-title" href="#">Development</Link></h4>
                                                            </div>
                                                            <div className="service__item-icon">
                                                                <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="service__item-4 fade_bottom_2">
                                                            <div className="service__item-number">
                                                                <span>03</span>
                                                            </div>
                                                            <div className="service__title-wrapper-4">
                                                                <h4><Link className="service__item-title" href="#">UI/UX Design</Link></h4>
                                                            </div>
                                                            <div className="service__item-icon">
                                                                <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="service__item-4 fade_bottom_2">
                                                            <div className="service__item-number">
                                                                <span>04</span>
                                                            </div>
                                                            <div className="service__title-wrapper-4">
                                                                <h4><Link className="service__item-title" href="#">Digital marketing</Link></h4>
                                                            </div>
                                                            <div className="service__item-icon">
                                                                <Link href="/service-details"><i className="fa-solid fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Service area end */}


                                {/* faq area start */}
                                <section className="faq__area-4 pt-150 pb-150">
                                    <div className="container g-0">
                                        <div className="row">
                                            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6">
                                                <div className="faq__sec-title text-anim">
                                                    <h2 className="sec-subtile-6">Expertise</h2>
                                                    <h3 className="sec-title-6 title-anim">With more than 16+ years of experience, our team has become a
                                                        leader in
                                                        digital innovations.</h3>
                                                    <p>Grow brands through bold, strategic creative</p>
                                                    <Link className="btn-view" href="/about">Know More <i className="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>

                                            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
                                                <div className="faq__list-4">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item fade_bottom_3">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Design should enrich our day
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <p>Using year-over-year design approaches and latest techs, we will ensure that your new
                                                                        website will be <span>accessible, and treads lightly</span>.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item fade_bottom_3">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Bring their individual experience and creative
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <p>This is the second items accordion body. It is hidden by default, until the
                                                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                                                        classes</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item fade_bottom_3">
                                                            <h2 className="accordion-header" id="headingThree">
                                                                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Human centred design to challenges
                                                                </button>
                                                            </h2>
                                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                                        brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                                        people</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item fade_bottom_3">
                                                            <h2 className="accordion-header" id="headingFour">
                                                                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                    Design should enrich our day
                                                                </button>
                                                            </h2>
                                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
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
                                        <img className="faq__img6-1" src="assets/imgs/bg/4/1.png" alt="Shape" />
                                        <img className="faq__img6-2" src="assets/imgs/bg/4/2.png" alt="Shape" />
                                    </div>
                                </section>
                                {/* faq area end  */}


                                {/* Portfolio area start  */}
                                <section className="portfolio__area-4">
                                    <div className="container-fluid line_4 pt-150">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="portfolio__sec-title text-anim">
                                                    <h2 className="sec-subtile-6">Portfolio</h2>
                                                    <h3 className="sec-title-6 title-anim">Our selected <br /> projects</h3>
                                                    <p>View the full case study of our recent featured and awesome works that we created for our
                                                        clients.</p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                                <div className="portfolio__wrapper-4">
                                                    <div className="swiper portfolio__slider-4">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="portfolio__item-4">
                                                                    <Link href="/portfolio">
                                                                        <div className="portfolio__item-inner">
                                                                            <div className="portfolio__title-wrapper">
                                                                                <h4 className="portfolio__title-4">Lionpro Agency</h4>
                                                                                <h5 className="portfolio__subtitle-4">02 May 2021</h5>
                                                                            </div>
                                                                            <div className="portfolio__icon-link">
                                                                                <span className="portfolio__icon-4"><i className="fa-solid fa-arrow-right"></i></span>
                                                                            </div>
                                                                        </div>
                                                                        <img src="assets/imgs/portfolio/4/1.jpg" alt="Portfolio Image" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="portfolio__item-4">
                                                                    <Link href="/portfolio">
                                                                        <div className="portfolio__item-inner">
                                                                            <div className="portfolio__title-wrapper">
                                                                                <h4 className="portfolio__title-4">Lionpro Agency</h4>
                                                                                <h5 className="portfolio__subtitle-4">02 May 2021</h5>
                                                                            </div>
                                                                            <div className="portfolio__icon-link">
                                                                                <span className="portfolio__icon-4"><i className="fa-solid fa-arrow-right"></i></span>
                                                                            </div>
                                                                        </div>
                                                                        <img src="assets/imgs/portfolio/4/2.jpg" alt="Portfolio Image" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="portfolio__item-4">
                                                                    <Link href="/portfolio">
                                                                        <div className="portfolio__item-inner">
                                                                            <div className="portfolio__title-wrapper">
                                                                                <h4 className="portfolio__title-4">Lionpro Agency</h4>
                                                                                <h5 className="portfolio__subtitle-4">02 May 2021</h5>
                                                                            </div>
                                                                            <div className="portfolio__icon-link">
                                                                                <span className="portfolio__icon-4"><i className="fa-solid fa-arrow-right"></i></span>
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

                                    <div className="container line_4 portfolio6__line">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </section>
                                {/* Portfolio area end  */}

                                {/* Brand area start  */}
                                <section className="brand__area-4">
                                    <div className="container g-0 line_4 pt-130 pb-150">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <h2 className="brand__title-3 title-anim" data-speed="1">We worked with global largest
                                                    brands
                                                </h2>
                                                <div className="brand__list-3">
                                                    <div className="brand__item-2 fade_bottom">
                                                        <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                    </div>
                                                    <div className="brand__item-2 fade_bottom">
                                                        <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                    </div>
                                                    <div className="brand__item-2 fade_bottom">
                                                        <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                    </div>
                                                    <div className="brand__item-2 fade_bottom">
                                                        <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                    </div>
                                                    <div className="brand__item-2 fade_bottom">
                                                        <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                    </div>
                                                    <div className="brand__item-2 fade_bottom">
                                                        <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Brand area end  */}

                                {/* Testimonial area start  */}
                                <section className="testimonial__area-4 ">
                                    <div className="container g-0 line_4">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="testimonial__sec-title text-anim">
                                                    <h2 className="sec-subtile-6">Testimonials</h2>
                                                    <h3 className="sec-title-6 title-anim">Clients feedback</h3>
                                                    <p>We are Trusted by 10,000+ global customers teams like have projects with this template</p>
                                                </div>
                                            </div>
                                            <div className="swiper testimonial__slider-4">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide testimonial__slide-4">
                                                        <img className="testimonial__img-4" src="assets/imgs/testimonial/4/1.jpg" alt="Testimonial Image" />
                                                        <div className="testimonial__info-4">
                                                            <h4 className="testimonial__feedback-4">Design Quality</h4>
                                                            <p>Our philosophy is built on people who are addicted on creating, learning, and growing
                                                                together, which allows us to discover better others miss.</p>
                                                            <h5 className="testimonial__name-4">Jessica Sherlock</h5>
                                                            <h6 className="testimonial__role-4">Manager, Oitaka </h6>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide testimonial__slide-4">
                                                        <img className="testimonial__img-4" src="assets/imgs/testimonial/4/2.jpg" alt="Testimonial Image" />
                                                        <div className="testimonial__info-4">
                                                            <h4 className="testimonial__feedback-4">Clean Code</h4>
                                                            <p>I am very glod happy with this theme, the website loads much faster than any other theme I
                                                                have used so far clean code and responsive layout.</p>
                                                            <h5 className="testimonial__name-4">Sharoon Kavin</h5>
                                                            <h6 className="testimonial__role-4">CEO, Sharoon</h6>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide testimonial__slide-4">
                                                        <img className="testimonial__img-4" src="assets/imgs/testimonial/4/3.jpg" alt="Testimonial Image" />
                                                        <div className="testimonial__info-4">
                                                            <h4 className="testimonial__feedback-4">Instant Support</h4>
                                                            <p>In the next time I hire Axtra as they helping innovators and brands through cultural insight,
                                                                strategiccal vision, and innovation and look too beyond.</p>
                                                            <h5 className="testimonial__name-4">Sharly Mehroon</h5>
                                                            <h6 className="testimonial__role-4">Manager, Kavitan</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="testimonial__btn-4">
                                                    <div className="next-button swipper-btn"><i className="fa-solid fa-arrow-left"></i></div>
                                                    <div className="prev-button swipper-btn"><i className="fa-solid fa-arrow-right"></i></div>
                                                    <div className="pagination testimonial__pagination-4">
                                                        <div className="pag"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Testimonial area end  */}


                                {/* Solution area start  */}
                                <section className="solution__area-4">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-5 offset-xxl-7 col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                                                <div className="solution__content">
                                                    <h2 className="sec-subtile-6">Approch</h2>
                                                    <h3 className="sec-title-6 title-anim">Make your <br /> business visible <br /> online</h3>
                                                    <ul className="solution__list title-anim">
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
                                <section className="blog__area-4 blog__animation">
                                    <div className="container g-0 line_4 pt-150 pb-150">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="sec-title-wrapper text-anim">
                                                    <h2 className="sec-subtile-6">Recent Blog</h2>
                                                    <h3 className="sec-title-6 title-anim">Updated <br /> Journal</h3>
                                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</p>
                                                    <Link className="btn-started" href="#">All Articles <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <article className="blog__item-4">
                                                    <div className="blog__img-4">
                                                        <Link href="/blog-details">
                                                            <img src="assets/imgs/blog/4/1.jpg" alt="Blog Image" />
                                                        </Link>
                                                    </div>
                                                    <h4 className="blog__meta-4"><Link href="/category">UI Design</Link> <span>02 May 2019</span></h4>
                                                    <h5><Link href="/blog-details" className="blog__title-4">Ways of lying to yourself about your new
                                                        relationship.</Link></h5>
                                                    <Link href="/blog-details" className="blog__btn-4">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </article>
                                            </div>

                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <article className="blog__item-4">
                                                    <div className="blog__img-4">
                                                        <Link href="/blog-details">
                                                            <img src="assets/imgs/blog/4/2.jpg" alt="Blog Image" />
                                                        </Link>
                                                    </div>
                                                    <h4 className="blog__meta-4"><Link href="/category">UX Design</Link> <span>02 May 2019</span></h4>
                                                    <h5><Link href="/blog-details" className="blog__title-4">Ways of lying to yourself about your new
                                                        relationship.</Link></h5>
                                                    <Link href="/blog-details" className="blog__btn-4">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Blog area end  */}

                                {/* CTA area start  */}
                                <div className="cta__area-4">
                                    <div className="container g-0 line_4 pb-150">
                                        <div className="line-col-4">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>

                                        <div className="cta__inner-4">
                                            <div className="row">
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                    <div className="cta__content-4">
                                                        <img src="assets/imgs/thumb/4/1.png" alt="Cta Image" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                    <div className="cta__content-4">
                                                        <h2 className="cta__title-4 title-anim">Lat’s make someting great together</h2>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                    <div className="cta__content-4 text-anim">
                                                        <p>Using year-over-year most design approaches and latest techs website will be lightly.</p>
                                                        <Link className="btn-started" href="/contact">Get a Quote <span><i
                                                            className="fa-solid fa-arrow-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <img src="assets/imgs/shape/21.png" alt="shape Image" className="cta-shape" />
                                            <img src="assets/imgs/shape/22.png" alt="shape Image" className="cta-shape-2" />
                                        </div>
                                    </div>
                                </div>
                                {/* CTA area end  */}

                            </div>
                        </main>


                        {/* Footer area start  */}
                        <footer className="footer__area-6">
                            <div className="container g-0 line_4">
                                <div className="line-col-4">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>

                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="footer__top-6 pt-150 pb-140">
                                            <div className="footer__item-6">
                                                <img className="footer__logo logo-light" src="assets/imgs/logo/site-logo-white-2.png" alt="Footer Logo" />
                                                <img className="footer__logo logo-dark" src="assets/imgs/logo/logo-black.png" alt="Footer Logo" />
                                                <p>When do they work well, and when do they <br /> on us and finally, when do we actually need how can
                                                    we avoid them.</p>
                                                <ul className="footer__social-6">
                                                    <li><Link href="#"><span><i className="fa-brands fa-facebook-f"></i></span></Link></li>
                                                    <li><Link href="#"><span><i className="fa-brands fa-twitter"></i></span></Link></li>
                                                    <li><Link href="#"><span><i className="fa-brands fa-instagram"></i></span></Link></li>
                                                    <li><Link href="#"><span><i className="fa-brands fa-linkedin"></i></span></Link></li>
                                                </ul>
                                            </div>

                                            <div className="footer__item-6">
                                                <h2 className="footer__item-title">Information</h2>
                                                <ul className="footer__link-6">
                                                    <li><Link href="/about">About Company</Link></li>
                                                    <li><Link href="/career">Career</Link></li>
                                                    <li><Link href="/portfolio">Case Study</Link></li>
                                                    <li><Link href="#">Unloack System</Link></li>
                                                    <li><Link href="#">Blueprint</Link></li>
                                                </ul>
                                            </div>

                                            <div className="footer__item-6">
                                                <h2 className="footer__item-title">Contact Us</h2>
                                                <ul className="footer__info-6">
                                                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                                    <li><Link href="tel:02574328301" className="phone">+02) 574 - 328 - 301 </Link></li>
                                                    <li><Link href="mailto:info@buildyexample.com">info@buildyexample.com</Link></li>
                                                </ul>
                                            </div>
                                            <div className="footer__item-6">
                                                <h2 className="footer__item-title">newsletter</h2>
                                                <form action="#">
                                                    <div className="footer__newsletter-6">
                                                        <input type="email" name="email" required placeholder="Enter your email" />
                                                        <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                                                    </div>
                                                    <div className="footer__chekbox">
                                                        <input type="checkbox" id="check_box" name="checkbox" />
                                                        <label>I’m okay with getting emails and having that activity and privacy policy.</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="footer__btm-6">
                                            <div className="row">
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                                    <div className="footer__copyright-6">
                                                        <p>© 2022 - 2025 | Alrights reserved by <br /> <Link href="https://wealcoder.com/"
                                                            target="_blank" rel="noreferrer">Wealcoder</Link>
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