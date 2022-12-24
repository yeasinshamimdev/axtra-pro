import Head from 'next/head'
import Link from 'next/link'
import HomeFooter from '../components/home/indexFooter'
import TopHeadDark from '../components/home/indexHeadDark'

export default function HomeDark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Home - Digital Marketing</title>

                {/* Fav Icon */}
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
                {/* Header area start  */}
                <TopHeadDark />
                {/* Header area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start  */}
                            <section className="hero__area-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="hero__inner-3">
                                                <div className="sec-title-wrapper">
                                                    <h2 className="sec-sub-title">Digital</h2>
                                                    <h3 className="sec-title title-left">Mark</h3>
                                                    <h3 className="sec-title title-right">eting</h3>
                                                </div>
                                                <div className="hero__text-3">
                                                    <p className="animation__word_come">Static and dynamic secure code review can prevent a day before your
                                                        product is even released. We
                                                        can integrate with your dev environment</p>
                                                </div>
                                                <div className="scroll-down">
                                                    <button><img src="assets/imgs/icon/arrow-down-sm.png" alt="arrow icon" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="video-info">
                                        <div className="video-intro">
                                            <input id="video_check" type="checkbox" />
                                            <div className="intro-title">
                                                <h4 className="video-title">Watch <span>video intro</span></h4>
                                                <h4 className="video-title close-video-title">Close <span>video intro</span></h4>
                                            </div>
                                            <div className="video">
                                                <video src="assets/video/hero-3.mp4" loop muted autoPlay playsInline></video>
                                            </div>

                                        </div>
                                    </div>
                                </div>/

                                <img src="assets/imgs/hero/3/1.jpg" alt="Hero Image" className="hero3-img" />
                            </section>


                            {/* Brand area start  */}
                            <section className="brand__area">
                                <div className="container pt-140 pb-140">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <h2 className="brand__title-3 title-anim">We worked with global largest brands
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


                            {/* About area start  */}
                            <section className="about__area-3">
                                <div className="container pt-140 pb-110">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="about__img-3">
                                                <img src="assets/imgs/about/3/1.jpg" alt="About Thumbnail" data-speed="auto" />
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title title-anim">Who We Are</h2>
                                                <h3 className="sec-title title-anim">We are leading digital marketing agency.</h3>
                                            </div>
                                            <div className="sec-text-wrapper">
                                                <div className="sec-text text-anim">
                                                    <p>We’re a team of strategic mdigital marketing working globally with largest brands, We believe
                                                        that
                                                        progress only happens when you refused to play things safe. We combine ideas and behaviors, and
                                                        insights with design, technological data to produce brand experiences that customers love our
                                                        services.</p>
                                                    <div id="btn_wrapper">
                                                        <Link className="wc-btn-light btn-hover btn-item" href="/about"><span></span> Explore Us <i
                                                            className="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* About area end  */}


                            {/* Service area start  */}
                            <section className="service__area-3 pb-150">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper pt-130 text-anim">
                                                <h2 className="sec-sub-title title-anim">Services</h2>
                                                <h3 className="sec-title title-anim">Our marketing <br /> Services</h3>
                                                <p>Consumers today rely heavily on digital means to research products.
                                                    We
                                                    research a brand of bldend
                                                    engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                                                    products before buying.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xx-12">
                                            <div className="service__list-3">
                                                <div className="service__item-3 service_animation">
                                                    <h3><Link href="/service-details" className="service__title-3">Search Engine <br />Optimization</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" backgroundimage={"url(assets/imgs/service/3/1.jpg)"}></div>
                                                </div>

                                                <div className="service__item-3 service_animation">
                                                    <h3><Link href="/service-details" className="service__title-3 ">Email <br />Marketing</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" backgroundimage={"url(assets/imgs/service/3/1.jpg)"}></div>
                                                </div>

                                                <div className="service__item-3 service_animation">
                                                    <h3 className=""><Link href="/service-details" className="service__title-3">COntent
                                                        <br />Marketing</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3 ">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" backgroundimage={"url(assets/imgs/service/3/1.jpg)"}></div>
                                                </div>

                                                <div className="service__item-3 service_animation">
                                                    <h3 className=""><Link href="/service-details" className="service__title-3">Social
                                                        <br />Marketing</Link></h3>
                                                    <div className="service__content-3">
                                                        <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                                        </p>
                                                        <ul className="">
                                                            <li>+ Logo Design</li>
                                                            <li>+ Advertisement</li>
                                                            <li>+ Promotion</li>
                                                        </ul>
                                                    </div>
                                                    <div className="service__btn-3">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service-details" className="wc-btn-black btn-hover btn-item"><span></span> Details
                                                                <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="service__hover-3" backgroundimage={"url(assets/imgs/service/3/1.jpg)"} ></div>
                                                </div>

                                                <div className="service3__img-wrap">
                                                    <div className="service3__img"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                            {/* Service area end  */}


                            {/* Portfolio area start  */}
                            <section className="portfolio__area-3">
                                <div className="container pt-100 pb-150">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title title-anim">Featured <br />Work</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="swiper portfolio__slider-3">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="portfolio__slide-3">
                                                            <Link href="/service-details">
                                                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                                                <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-pagination"></div>

                                                <div className="swiper-btn">
                                                    <div className="pp-prev"><i className="fa-solid fa-arrow-left"></i></div>
                                                    <div className="pp-next"><i className="fa-solid fa-arrow-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}


                            {/* Testimonial area start  */}
                            <section className="testimonial__area-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="swiper testimonial__slider-3">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide testimonial__slide-3">
                                                        <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                                                            collaborates with us daily, always there for us when we encounter difficulties and celebrate
                                                            achievements. We see in Alts our best ally for success!</p>
                                                        <h2 className="client__name-3">Maria D. Halk</h2>
                                                        <h3 className="client__role-3">Managing Director</h3>
                                                    </div>
                                                    <div className="swiper-slide testimonial__slide-3">
                                                        <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                                                            collaborates with us daily, always there for us when we encounter difficulties and celebrate
                                                            achievements. We see in Alts our best ally for success!</p>
                                                        <h2 className="client__name-3">Maria D. Halk</h2>
                                                        <h3 className="client__role-3">Managing Director</h3>
                                                    </div>
                                                    <div className="swiper-slide testimonial__slide-3">
                                                        <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                                                            collaborates with us daily, always there for us when we encounter difficulties and celebrate
                                                            achievements. We see in Alts our best ally for success!</p>
                                                        <h2 className="client__name-3">Maria D. Halk</h2>
                                                        <h3 className="client__role-3">Managing Director</h3>
                                                    </div>
                                                    <div className="swiper-slide testimonial__slide-3">
                                                        <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                                                            collaborates with us daily, always there for us when we encounter difficulties and celebrate
                                                            achievements. We see in Alts our best ally for success!</p>
                                                        <h2 className="client__name-3">Maria D. Halk</h2>
                                                        <h3 className="client__role-3">Managing Director</h3>
                                                    </div>
                                                    <div className="swiper-slide testimonial__slide-3">
                                                        <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                                                            collaborates with us daily, always there for us when we encounter difficulties and celebrate
                                                            achievements. We see in Alts our best ally for success!</p>
                                                        <h2 className="client__name-3">Maria D. Halk</h2>
                                                        <h3 className="client__role-3">Managing Director</h3>
                                                    </div>
                                                </div>
                                                <div className="next-button swipper-btn"><i className="fa-solid fa-arrow-left"></i></div>
                                                <div className="prev-button swipper-btn"><i className="fa-solid fa-arrow-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial__images-3 animation_image_zoom">
                                    <img src="assets/imgs/testimonial/3/1.jpg" alt="testimonial Image" className="testimonial3__img" />
                                    <img src="assets/imgs/testimonial/3/2.jpg" alt="testimonial Image" className="testimonial3__img-2" />
                                    <img src="assets/imgs/testimonial/3/3.jpg" alt="testimonial Image" className="testimonial3__img-3" />
                                    <img src="assets/imgs/testimonial/3/4.jpg" alt="testimonial Image" className="testimonial3__img-4" />
                                    <img src="assets/imgs/testimonial/3/5.jpg" alt="testimonial Image" className="testimonial3__img-5" />
                                    <img src="assets/imgs/testimonial/3/6.jpg" alt="testimonial Image" className="testimonial3__img-6" />
                                </div>
                            </section>
                            {/* Testimonial area end  */}


                            {/* Workflow area start  */}
                            <section className="workflow__area-3">
                                <div className="workflow__wrapper-3">
                                    <div className="choose-wrapper wf_panel">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xxl-12">
                                                    <div className="choose-title-wrapper">
                                                        <h2 className="choose-title title-anim">why <br /> choose us</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="research__area wf_panel pt-150">
                                        <div className="container inner_content">
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="sec-title-wrapper">
                                                        <h2 className="sec-sub-title">why <br />choose us</h2>
                                                        <h3 className="sec-title">Keword,Research Strategy, Survey, & Analytics</h3>
                                                        <p>Attention, we take out our round glasses and our sweater with elbow patches to go back to the
                                                            origins of the user experience: the first mention of the user and its importance was born in the
                                                        </p>
                                                    </div>
                                                    <ul className="research__tools">
                                                        <li><Link href="#">Google</Link></li>
                                                        <li><Link href="#">pinterest</Link></li>
                                                        <li><Link href="#">Instagram</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="research__list">
                                                        <div className="research__item">
                                                            <div className="research__number">
                                                                <span>60%</span>
                                                            </div>
                                                            <div className="research__info">
                                                                <h4 className="research__title">Strategy</h4>
                                                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                                            </div>
                                                        </div>

                                                        <div className="research__item">
                                                            <div className="research__number">
                                                                <span>95%</span>
                                                            </div>
                                                            <div className="research__info">
                                                                <h4 className="research__title">Audience</h4>
                                                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                                            </div>
                                                        </div>

                                                        <div className="research__item">
                                                            <div className="research__number">
                                                                <span>70%</span>
                                                            </div>
                                                            <div className="research__info">
                                                                <h4 className="research__title">Keyword</h4>
                                                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="counter__area-3 wf_panel">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xxl-12">
                                                    <div className="sec-title-wrapper">
                                                        <h2 className="sec-sub-title">Why <br />Choose Us</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                                    <div className="counter__wrapper-3">
                                                        <div className="counter__item-3">
                                                            <h2 className="counter__number">25k</h2>
                                                            <p>Project <br />completed</p>
                                                        </div>
                                                        <div className="counter__item-3">
                                                            <h2 className="counter__number">8k</h2>
                                                            <p>Happy <br />customers</p>
                                                        </div>
                                                        <div className="counter__item-3">
                                                            <h2 className="counter__number">15</h2>
                                                            <p>Years <br />experiences</p>
                                                        </div>
                                                        <div className="counter__item-3">
                                                            <h2 className="counter__number">98</h2>
                                                            <p>Awards <br />achievement</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                                    <div className="counter__img-3">
                                                        <img src="assets/imgs/thumb/counter-3.png" alt="Counter Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA area start  */}
                                    <div className="cta__area-3 wf_panel">
                                        <div className="container pt-150 pb-150">
                                            <div className="row">
                                                <div className="col-xxl-12">
                                                    <div className="cta__content-3">
                                                        <p className="cta__sub-title-2">Have you project in mind?</p>
                                                        <h2 className="cta__title-2">Let’s make something great together!</h2>
                                                        <div id="btn_wrapper">
                                                            <Link href="/contact" className="wc-btn-black btn-hover btn-item"><span></span>Contact <br />with
                                                                us <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* CTA area end  */}

                                </div>
                            </section>
                            {/* Workflow area end  */}



                            {/* Price area start  */}
                            <section className="price__area pt-130 pb-140">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title title-anim">Pricing Table</h2>
                                                <h3 className="sec-title title-anim">Be kind to your <br />mind</h3>
                                            </div>
                                            <div className="faq__list-3">
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Design should enrich our day
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                                                    brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                                                    people</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingTwo">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Bring their individual experience and creative
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p>This is the second items accordion body. It is hidden by default, until the
                                                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                                                    classes.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingThree">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
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

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingFour">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
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

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingFive">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Developing core web applications
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
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

                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="price__table">
                                                <div className="price__item animation_from_bottom">
                                                    <div className="price__icon"><span><i className="fa-solid fa-check"></i></span></div>
                                                    <div className="price__info">
                                                        <h2 className="price__type">Yearly</h2>
                                                        <h3 className="price__title">14 days free</h3>
                                                        <p>Subscription fee is $129.99 USD and automatically renews each year.</p>
                                                    </div>
                                                    <div className="price__amount">
                                                        <h4 className="best-value">Best Value</h4>
                                                        <p>$129<span> .99</span></p>
                                                    </div>
                                                </div>

                                                <div className="price__item animation_from_top">
                                                    <div className="price__icon"><span><i className="fa-solid fa-check"></i></span></div>
                                                    <div className="price__info">
                                                        <h2 className="price__type">Monthly</h2>
                                                        <h3 className="price__title">7 days free</h3>
                                                        <p>Subscription fee is $12.99 USD and automatically renews each year.</p>
                                                    </div>
                                                    <div className="price__amount">
                                                        <p>$12<span> .99</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price__btn" id="btn_wrapper">
                                                <Link href="/contact" className="wc-btn-black btn-hover btn-item"><span></span> Try it <br />Free Now <i
                                                    className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Price area end  */}


                            {/* Blog area start  */}
                            <section className="blog__area-3 pb-140 blog__animation">
                                <div className="container">
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
                                    </div>
                                </div>
                            </section>
                            {/* Blog area end  */}
                        </main>

                        {/* Footer area start  */}
                        <HomeFooter />
                        {/* Footer area end  */}
                    </div>
                </div>
            </main>

        </div>
    )
}