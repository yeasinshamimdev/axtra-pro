import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/common/ctaArea";
import Footer from "../components/common/footer";
import Offcanvas from "../components/common/offcanvas";
import OffcanvasDark from "../components/common/offcanvasDark";
import SwitcherAreaDark from "../components/common/switcherAreaDark";

export default function Home3Dark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Home - Digital Agency</title>

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
            <main className="dark">

                {/* Cursor Animation  */}
                <div className="cursor1"></div>
                <div className="cursor2"></div>

                {/* Testimonial Play Cursor  */}
                <div className="cursor" id="client_cursor">Play</div>


                {/* Preloader  */}
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


                {/* Switcher Area Start  */}
                <SwitcherAreaDark />
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
                {/* Header area end  */}

                {/* Offcanvas area start  */}
                <OffcanvasDark />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start  */}
                            <section className="hero__area ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="hero__content animation__hero_one">
                                                <Link href="/service">Strategy, Design, Solution Development <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                                <div className="hero__title-wrapper">
                                                    <h1 className="hero__title">Digital agency studio</h1>
                                                    <p className="hero__sub-title">With every single one of our clients, we
                                                        bring forth deep passion for
                                                        <span>creative problem solving</span>
                                                        which is what we deliver.
                                                    </p>
                                                </div>
                                                <img src="assets/imgs/icon/arrow-down-big.png" alt="Arrow Down Icon" />
                                                <div className="experience">
                                                    <h2 className="title">25k+</h2>
                                                    <p>Projects completed <br />successfully</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img src="assets/imgs/hero/1/1-bg.png" alt="image" className="hero1_bg" />
                            </section>
                            {/* Hero area end  */}


                            {/* Roll area start  */}
                            <section className="roll__area">
                                <div className="swiper roll__slider">
                                    <div className="swiper-wrapper roll__wrapper">
                                        <div className="swiper-slide roll__slide">
                                            <h2>Development</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Studio</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>typhography</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Design</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Element</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Strategy</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Branding</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Agency</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>Interaction</h2>
                                        </div>
                                        <div className="swiper-slide roll__slide">
                                            <h2>DIgital SOlution</h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Roll area end  */}


                            {/* About area start  */}
                            <section className="about__area">
                                <div className="container line g-0 pt-140 pb-130">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="about__title-wrapper">
                                                <h3 className="sec-title title-anim">We unlock the potential of your business
                                                    with creative design</h3>
                                            </div>

                                            <div className="about__content-wrapper">
                                                <div className="about__img">
                                                    <div className="img-anim">
                                                        <img src="assets/imgs/about/1/1.jpg" alt="About Image" data-speed="0.3" />
                                                    </div>

                                                    <div className="about__img-right">
                                                        <img src="assets/imgs/about/1/2.jpg" alt="About Image Right" data-speed="0.5" />
                                                        <div className="shape">
                                                            <div className="secondary" data-speed="0.9"></div>
                                                            <div className="primary"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="about__content text-anim">
                                                    <p>From traditional PR and thought leadership campaigns to
                                                        storytelling and creative social media
                                                        management we’ve got you covered. Something is not your average order-taking vendor. We are
                                                        proud to
                                                        be the go-to partner for some of the world’s biggest agencies and brands because they trust our
                                                        expertise</p>

                                                    <div id="btn_wrapper" className="cursor-btn">
                                                        <Link className="btn-item wc-btn-primary btn-hover" href="/about"><span></span> Explore Us <i
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
                            <section className="service__area pt-110 pb-150">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="sec-title-wrapper wrap">
                                                <h2 className="sec-sub-title title-anim">service</h2>
                                                <h3 className="sec-title title-anim">Solution we <br />provide</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div className="service__top-text text-anim">
                                                <p>With every single one of our clients we bring forth a deep passion
                                                    for <span>creative problem solving
                                                        innovations</span> forward thinking
                                                    brands boundaries</p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                            <div className="service__top-btn">
                                                <div id="btn_wrapper">
                                                    <Link href="/service" className="btn-item wc-btn-secondary btn-hover"><span></span> View <br />all
                                                        services <i className="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service__list-wrapper">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                                                <div className="service__img-wrapper">
                                                    <img src="assets/imgs/service/1/1.jpg" alt="Service Image" className="service__img img-1 active" />
                                                    <img src="assets/imgs/service/1/2.png" alt="Service Image" className="service__img img-2" />
                                                    <img src="assets/imgs/service/1/3.png" alt="Service Image" className="service__img img-3" />
                                                    <img src="assets/imgs/service/1/4.png" alt="Service Image" className="service__img img-4" />

                                                    <span className="shape-box-1 current"></span>
                                                    <span className="shape-box-2"></span>
                                                    <span className="shape-box-3"></span>
                                                    <span className="shape-box-4"></span>
                                                </div>
                                            </div>
                                            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                                                <div className="service__list">
                                                    <Link href="/service-details">
                                                        <div className="service__item animation_home1_service" data-service="1">
                                                            <div className="service__number"><span>01</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Web & Mobile
                                                                    Development</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div className="service__item  animation_home1_service" data-service="2">
                                                            <div className="service__number"><span>02</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Interaction <br />Design</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div className="service__item  animation_home1_service" data-service="3">
                                                            <div className="service__number"><span>03</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Digital <br />Maketing</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="/service-details">
                                                        <div className="service__item  animation_home1_service" data-service="4">
                                                            <div className="service__number"><span>04</span></div>
                                                            <div className="service__title-wrapper">
                                                                <h4 className="service__title">Branding and Strategy</h4>
                                                            </div>
                                                            <div className="service__text">
                                                                <p>We create, products, brands, apps & websites for the companies all around the world class
                                                                    digital
                                                                    products</p>
                                                            </div>
                                                            <div className="service__link">
                                                                <p><i className="fa-solid fa-arrow-right"></i></p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Service area end  */}


                            {/* Counter area start  */}
                            <section className="counter__area">
                                <div className="container g-0 line pt-150">
                                    <span className="line-3"></span>

                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="counter__wrapper counter_animation">
                                                <div className="counter__item counter__anim">
                                                    <h2 className="counter__number">25k+</h2>
                                                    <p>Project <br />completed</p>
                                                    <span className="counter__border"></span>
                                                </div>
                                                <div className="counter__item counter__anim">
                                                    <h2 className="counter__number">8k+</h2>
                                                    <p>Happy <br />customers</p>
                                                    <span className="counter__border"></span>
                                                </div>
                                                <div className="counter__item counter__anim">
                                                    <h2 className="counter__number">15</h2>
                                                    <p>Years <br />experiences</p>
                                                    <span className="counter__border"></span>
                                                </div>
                                                <div className="counter__item counter__anim">
                                                    <h2 className="counter__number">98</h2>
                                                    <p>Awards <br />achievement</p>
                                                    <span className="counter__border"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Counter area end  */}


                            {/* Workflow area start  */}
                            <section className="workflow__area">
                                <div className="container g-0 line pt-140 pb-140">
                                    <div className="line-3"></div>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title title-anim">Workflow</h2>
                                                <h3 className="sec-title title-anim">How we work</h3>
                                            </div>
                                        </div>

                                        <div className="col-xxl-12">
                                            <div className="swiper workflow__slider ">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide workflow__slide fade_left">
                                                        <h4 className="workflow__step">step 01</h4>
                                                        <h5 className="workflow__number">01</h5>
                                                        <h6 className="workflow__title">Audience</h6>
                                                        <p>Having these the marketplace to your business</p>
                                                    </div>

                                                    <div className="swiper-slide workflow__slide fade_left">
                                                        <h4 className="workflow__step">step 02</h4>
                                                        <h5 className="workflow__number">02</h5>
                                                        <h6 className="workflow__title">Plan & Sketch</h6>
                                                        <p>Delicate and long-lasting with vitamins and nutritions</p>
                                                    </div>

                                                    <div className="swiper-slide workflow__slide fade_left">
                                                        <h4 className="workflow__step">step 03</h4>
                                                        <h5 className="workflow__number">03</h5>
                                                        <h6 className="workflow__title">Customize</h6>
                                                        <p>Creating brand identities for the digital experiences</p>
                                                    </div>

                                                    <div className="swiper-slide workflow__slide fade_left">
                                                        <h4 className="workflow__step">step 04</h4>
                                                        <h5 className="workflow__number">04</h5>
                                                        <h6 className="workflow__title">User Testing</h6>
                                                        <p>We look forward to engage with beyond the conventional</p>
                                                    </div>

                                                    <div className="swiper-slide workflow__slide fade_left">
                                                        <h4 className="workflow__step">step 05</h4>
                                                        <h5 className="workflow__number">05</h5>
                                                        <h6 className="workflow__title">User Testing</h6>
                                                        <p>We look forward to engage with beyond the conventional</p>
                                                    </div>

                                                    <div className="swiper-slide workflow__slide fade_left">
                                                        <h4 className="workflow__step">step 06</h4>
                                                        <h5 className="workflow__number">06</h5>
                                                        <h6 className="workflow__title">User Testing</h6>
                                                        <p>We look forward to engage with beyond the conventional</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Workflow area end  */}


                            {/* Portfolio area start  */}
                            <section className="portfolio__area pb-140">
                                <div className="container">
                                    <div className="row top_row">

                                        <h2 className="portfolio__text">work</h2>
                                        <div className="portfolio__list-1">
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img className="mover" src="assets/imgs/portfolio/1/1.jpg"
                                                    alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/1.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>
                                            <div className="portfolio__item">
                                                <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image" /></Link>
                                                <div className="portfolio__info">
                                                    <h3 className="portfolio__title">Arteck Lyon Conseil</h3>
                                                    <p>02 May 2021</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row row_bottom">
                                        <div className="col-xxl-12">
                                            <div className="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                                                <Link className="wc-btn-secondary btn-hover btn-item" href="/portfolio"><span></span>View <br />all
                                                    projects <i className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Portfolio area end  */}


                            {/* Brand area start  */}
                            <section className="brand__area">
                                <div className="container g-0 line pt-140 pb-130">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title title-anim">Internation Brands</h2>
                                                <h3 className="sec-title title-anim">We are happy to work with global <br />
                                                    largest brands</h3>
                                            </div>
                                        </div>

                                        <div className="col-xxl-12">
                                            <div className="brand__list">
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand__item fade_bottom">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Brand area end  */}


                            {/* Testimonial area start  */}
                            <section className="testimonial__area">
                                <div className="container g-0 line">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                            <div className="testimonial__wrapper">
                                                <div className="testimonial__item item-1">
                                                    <div className="button modal-trigger">
                                                        <div className="testimonial__img b-right">
                                                            <img src="assets/imgs/testimonial/1/1.png" alt="Testimonial Image" />
                                                        </div>

                                                        <h2 className="testimonial__title">Jessica Sherlock</h2>
                                                        <h3 className="testimonial__role">Manager, Oitaka</h3>
                                                    </div>
                                                </div>
                                                <div className="sec-title-wrapper text-anim">
                                                    <h4 className="sec-sub-title">Testimonials</h4>
                                                    <h5 className="sec-title title-anim">Clients <br />feedback</h5>
                                                    <p>Our happy customers give us impactfull and positive feedback on our services, customer supports
                                                        &
                                                        etc.</p>
                                                </div>
                                            </div>

                                            <div className="testimonial__item item-2">
                                                <div className="button modal-trigger-2">
                                                    <div className="testimonial__img b-left">
                                                        <img src="assets/imgs/testimonial/1/3.png" alt="Testimonial Image" />
                                                    </div>

                                                    <h2 className="testimonial__title">Jessica Sherlock</h2>
                                                    <h3 className="testimonial__role">Manager, Oitaka</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="testimonial__item item-3 img-">
                                                <div className="button modal-trigger-3">
                                                    <div className="testimonial__img b-left">
                                                        <img src="assets/imgs/testimonial/1/2.png" alt="Testimonial Image" />
                                                    </div>

                                                    <h2 className="testimonial__title">adam Smith</h2>
                                                    <h3 className="testimonial__role">Manager, Oitaka</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Testimonial area end */}


                            {/* Blog area start */}
                            <section className="blog__area no-pb blog__animation">
                                <div className="container g-0 line pt-150 pb-140">
                                    <span className="line-3"></span>
                                    <div className="row">
                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-sub-title">recent blog</h2>
                                                <h3 className="sec-title">News insignt</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="" />
                                                            <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">Ways of lying to yourself about your new
                                                    relationship.</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                                            <img className="image-box__item" src="assets/imgs/blog/1/2.jpg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to manage a talented and successful de sign
                                                    team</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <article className="blog__item">
                                                <div className="blog__img-wrapper">
                                                    <Link href="/blog-details">
                                                        <div className="img-box">
                                                            <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="Blog Thumbnail" />
                                                            <img className="image-box__item" src="assets/imgs/blog/1/3.jpg" alt="BLog Thumbnail" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <h4 className="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                                                <h5><Link href="/blog-details" className="blog__title">How to bring fold to your startup company with
                                                    Axtra</Link></h5>
                                                <Link href="/blog-details" className="blog__btn">Read More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Blog area end  */}

                            {/* CTA area start  */}
                            <CtaArea />
                            {/* CTA area end  */}

                        </main>

                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}

                    </div>
                </div>


                {/* Modal 1  */}
                <div className="modal__testimonial" id="modal_testimonial">
                    <div className="modal__testimonial-content">
                        <span className="modal__close" id="modal_close"><i className="fa-solid fa-xmark"></i></span>
                        <iframe src="https://www.youtube.com/embed/vZgyWfmw_Kw" title="Testimonial Video"
                            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen>
                        </iframe>
                    </div>
                </div>

                {/* Modal 2  */}
                <div className="modal__testimonial" id="modal_testimonial2">
                    <div className="modal__testimonial-content">
                        <span className="modal__close" id="modal_close2"><i className="fa-solid fa-xmark"></i></span>
                        <iframe src="https://www.youtube.com/embed/JulIeG1V8T4" allowfullscreen></iframe>
                    </div>
                </div>

                {/* Modal 3  */}
                <div className="modal__testimonial" id="modal_testimonial3">
                    <div className="modal__testimonial-content">
                        <span className="modal__close" id="modal_close3"><i className="fa-solid fa-xmark"></i></span>
                        <iframe src="https://www.youtube.com/embed/7QkL-40FRfE" allowfullscreen></iframe>
                    </div>
                </div>
            </main>
        </div>
    )
}