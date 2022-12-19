import Head from "next/head";
import Link from "next/link";


export default function About() {

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>About - Axtra</title>

                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>

            <body>

                {/* Cursor Animation  */}
                <div class="cursor1"></div>
                <div class="cursor2"></div>


                {/* Team Cursor  */}
                <div class="cursor" id="team_cursor">Drag</div>


                {/* Preloader  */}
                <div class="preloader">
                    <div class="loading">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                        <div class="bar bar3"></div>
                        <div class="bar bar4"></div>
                        <div class="bar bar5"></div>
                        <div class="bar bar6"></div>
                        <div class="bar bar7"></div>
                        <div class="bar bar8"></div>
                    </div>
                </div>


                {/* Switcher Area Start  */}
                <div class="switcher__area">
                    <div class="switcher__icon">
                        <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
                        <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
                    </div>

                    <div class="switcher__items">
                        <div class="switcher__item">
                            <div class="switch__title-wrap">
                                <h2 class="switcher__title">Cursor</h2>
                            </div>
                            <div class="switcher__btn">
                                <select name="cursor-style" id="cursor_style">
                                    <option value="1">default</option>
                                    <option selected value="2">animated</option>
                                </select>
                            </div>
                        </div>

                        <div class="switcher__item">
                            <div class="switch__title-wrap">
                                <h2 class="switcher__title">mode</h2>
                            </div>
                            <div class="switcher__btn mode-type wc-col-2">
                                <button class="active" data-mode="light">light</button>
                                <button data-mode="dark">dark</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Switcher Area End  */}



                {/* Scroll Smoother  */}
                <div class="has-smooth" id="has_smooth"></div>


                {/* Go Top Button  */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


                {/* Header area start  */}
                <header class="header__area">
                    <div class="header__inner">
                        <div class="header__logo">
                            <a href="/index">
                                <img class="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                                <img class="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                            </a>
                        </div>
                        <div class="header__nav-icon">
                            <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                        </div>
                        <div class="header__support">
                            <p>Support center <a href="tel:+9587325902">+9 587 325 902</a></p>
                        </div>
                    </div>
                </header>
                {/* Header area end  */}


                {/* Offcanvas area start  */}
                <div class="offcanvas__area">
                    <div class="offcanvas__body">
                        <div class="offcanvas__left">
                            <div class="offcanvas__logo">
                                <a href="/index"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo" /></a>
                            </div>
                            <div class="offcanvas__social">
                                <h3 class="social-title">Follow Us</h3>
                                <ul>
                                    <li><a href="#">Dribbble</a></li>
                                    <li><a href="#">Behance</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">YouTube</a></li>
                                </ul>
                            </div>
                            <div class="offcanvas__links">
                                <ul>
                                    <li><Link href="/about">About</Link></li>
                                    <li><a href="/contact">contact</a></li>
                                    <li><a href="/career">Career</a></li>
                                    <li><Link href="/blog">blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="offcanvas__mid">
                            <div class="offcanvas__menu-wrapper">
                                <nav class="offcanvas__menu">
                                    <ul class="menu-anim">
                                        <li><a>home</a>
                                            <ul>
                                                <li><a href="/index">Digital Maketing</a></li>
                                                <li><a href="/index-dark">Digital Maketing dark</a></li>
                                                <li><a href="/index-2">Design Studio </a></li>
                                                <li><a href="/index-2-dark">Design Studio dark</a></li>
                                                <li><a href="/index-3">Digital Agency</a></li>
                                                <li><a href="/index-3-dark">Digital Agency dark</a></li>
                                                <li><a href="/index-4">personal Portfolio</a></li>
                                                <li><a href="/index-4-dark">personal Portfolio dark</a></li>
                                                <li><a href="/index-5">portfolio showcase</a></li>
                                                <li><a href="/index-5-dark">portfolio showcase dark</a></li>
                                                <li><a href="/index-6">Startup Agency</a></li>
                                                <li><a href="/index-6-dark">Startup Agency dark</a></li>
                                                <li><a href="/index-7">creative Agency</a></li>
                                                <li><a href="/index-7-dark">creative Agency dark</a></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/about">about</Link></li>
                                        <li>
                                            <a>Service</a>
                                            <ul>
                                                <li><Link href="/service">service</Link></li>
                                                <li><Link href="/service-dark">service dark</Link></li>
                                                <li><Link href="/service-2">service V.2</Link></li>
                                                <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                                <li><Link href="/service-3">service V.3</Link></li>
                                                <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                                <li><Link href="/service-4">service V.4</Link></li>
                                                <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                                <li><Link href="/service-5">service V.5</Link></li>
                                                <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                                <li><Link href="/service-6">service V.6</Link></li>
                                                <li><Link href="/service-6-dark">service V.6 dark</Link></li>
                                                <li><Link href="/service-details">service details</Link></li>
                                                <li><Link href="/service-details-dark">service details dark</Link></li>
                                            </ul>
                                        </li>
                                        <li><a>pages</a>
                                            <ul>
                                                <li>
                                                    <a>Home</a>
                                                    <ul>
                                                        <li><a href="/index">Digital Maketing</a></li>
                                                        <li><a href="/index-dark">Digital Maketing dark</a></li>
                                                        <li><a href="/index-2">Design Studio </a></li>
                                                        <li><a href="/index-2-dark">Design Studio dark</a></li>
                                                        <li><a href="/index-3">Digital Agency</a></li>
                                                        <li><a href="/index-3-dark">Digital Agency dark</a></li>
                                                        <li><a href="/index-4">personal Portfolio</a></li>
                                                        <li><a href="/index-4-dark">personal Portfolio dark</a></li>
                                                        <li><a href="/index-5">portfolio showcase</a></li>
                                                        <li><a href="/index-5-dark">portfolio showcase dark</a></li>
                                                        <li><a href="/index-6">Startup Agency</a></li>
                                                        <li><a href="/index-6-dark">Startup Agency dark</a></li>
                                                        <li><a href="/index-7">creative Agency</a></li>
                                                        <li><a href="/index-7-dark">creative Agency dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Service</a>
                                                    <ul>
                                                        <li><Link href="/service">service</Link></li>
                                                        <li><Link href="/service-dark">service dark</Link></li>
                                                        <li><Link href="/service-2">service V.2</Link></li>
                                                        <li><Link href="/service-2-dark">service V.2 dark</Link></li>
                                                        <li><Link href="/service-3">service V.3</Link></li>
                                                        <li><Link href="/service-3-dark">service V.3 dark</Link></li>
                                                        <li><Link href="/service-4">service V.4</Link></li>
                                                        <li><Link href="/service-4-dark">service V.4 dark</Link></li>
                                                        <li><Link href="/service-5">service V.5</Link></li>
                                                        <li><Link href="/service-5-dark">service V.5 dark</Link></li>
                                                        <li><Link href="/service-6">service V.6</Link></li>
                                                        <li><Link href="/service-6-dark">service V.6 dark</Link></li>
                                                        <li><Link href="/service-details">service details</Link></li>
                                                        <li><Link href="/service-details-dark">service details dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>portfolio</a>
                                                    <ul>
                                                        <li><a href="/portfolio">portfolio</a></li>
                                                        <li><a href="/portfolio-dark">portfolio dark</a></li>
                                                        <li><a href="/portfolio-2">portfolio v.2</a></li>
                                                        <li><a href="/portfolio-2-dark">portfolio v.2 dark</a></li>
                                                        <li><a href="/portfolio-3">portfolio v.3</a></li>
                                                        <li><a href="/portfolio-3-dark">portfolio v.3 dark</a></li>
                                                        <li><a href="/portfolio-4">portfolio v.4</a></li>
                                                        <li><a href="/portfolio-4-dark">portfolio v.4 dark</a></li>
                                                        <li><a href="/portfolio-5">portfolio v.5</a></li>
                                                        <li><a href="/portfolio-5-dark">portfolio v.5 dark</a></li>
                                                        <li><a href="/portfolio-details">portfolio details</a></li>
                                                        <li><a href="/portfolio-details-dark">portfolio details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>team</a>
                                                    <ul>
                                                        <li><Link href="/team">Team</Link></li>
                                                        <li><Link href="/team-dark">Team dark</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                        <li><Link href="/team-details-dark">Team Details dark</Link ></li>

                                                        <li><a href="/career">career</a></li>
                                                        <li><a href="/career-dark">career dark</a></li>
                                                        <li><a href="/job-details">job details</a></li>
                                                        <li><a href="/job-details-dark">job details dark</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>blog</a>
                                                    <ul>
                                                        <li><Link href="/blog">blog</Link></li>
                                                        <li><Link href="/blog-dark">blog dark</Link></li>
                                                        <li><Link href="/blog-2">blog v.2</Link></li>
                                                        <li><Link href="/blog-2-dark">blog v.2 dark</Link></li>
                                                        <li><Link href="/category">category</Link></li>
                                                        <li><Link href="category-dark">category dark</Link></li>
                                                        <li><Link href="/blog-details">blog details</Link></li>
                                                        <li><Link href="blog-details-dark">blog details dark</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Others</a>
                                                    <ul>
                                                        <li><a href="/faq">FAQs</a></li>
                                                        <li><a href="/faq-dark">FAQs dark</a></li>
                                                        <li><a href="/contact">contact</a></li>
                                                        <li><Link href="/contact-dark">contact dark</Link ></li>
                                                        <li><a href="/404">404</a></li>
                                                        <li><a href="/404-dark">404 dark</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a>blog</a>
                                            <ul>
                                                <li><Link href="/blog">blog</Link></li>
                                                <li><Link href="/blog-dark">blog dark</Link></li>
                                                <li><Link href="/blog-2">blog v.2</Link></li>
                                                <li><Link href="/blog-2-dark">blog v.2 dark</Link></li>
                                                <li><Link href="/category">category</Link></li>
                                                <li><Link href="category-dark">category dark</Link></li>
                                                <li><Link href="/blog-details">blog details</Link></li>
                                                <li><Link href="blog-details-dark">blog details dark</Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="offcanvas__right">
                            <div class="offcanvas__search">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Search keyword" />
                                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div class="offcanvas__contact">
                                <h3>Get in touch</h3>
                                <ul>
                                    <li><a href="tel:02094980547">+(02) - 094 980 547</a></li>
                                    <li><a href="mailto:info@extradesign.com">info@extradesign.com</a></li>
                                    <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                                </ul>
                            </div>
                            <img src="assets/imgs/shape/11.png" alt="shape" class="shape-1" />
                            <img src="assets/imgs/shape/12.png" alt="shape" class="shape-2" />
                        </div>
                        <div class="offcanvas__close">
                            <button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                </div>
                {/* Offcanvas area end  */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* Hero area start  */}
                            <section class="hero__about">
                                <div class="container g-0 line">
                                    <span class="line-3"></span>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="hero__about-content">
                                                <h1 class="hero-title animation__word_come">We’re a full service creative and digital agency, working
                                                    globally with leargest brands.</h1>
                                                <div class="hero__about-info">
                                                    <div class="hero__about-btn">
                                                        <div id="btn_wrapper">
                                                            <Link href="/service" class="wc-btn-primary btn-hover btn-item"><span></span> Trends & <br />
                                                                technology
                                                                <i class="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div class="hero__about-text title-anim">
                                                        <p>Think of the worlds most iconica and successful brands easily findable, impactful.
                                                            Interactional and exceptional designs. Our story takes beginning in 2013</p>
                                                    </div>
                                                    <div class="hero__about-award">
                                                        <img src="assets/imgs/about/award.png" alt="Best Studio Award" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row hero__about-row">
                                        <div class="col-xxl-12">
                                            <div class="hero__about-video">
                                                <video loop muted autoplay playsinline>
                                                    <source src="assets/video/video.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Hero area end  */}


                            {/* Story area start  */}
                            <section class="story__area">
                                <div class="container g-0 line pt-140">
                                    <span class="line-3"></span>
                                    <div class="sec-title-wrapper">
                                        <div class="from-text">from <span>1990</span></div>

                                        <div class="row">
                                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                                <h2 class="sec-sub-title title-anim">Digital Studio</h2>
                                                <h3 class="sec-title title-anim">Our story</h3>
                                            </div>
                                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                                <div class="story__text">
                                                    <p>Your brand is the most important asset in your company let our team of professionals help you
                                                        with a good strategy took the runway next with an edgy collection featuring dyed denim pieces. The
                                                        collection included patchwork denim, a trend that has recently exploded in younger generations.
                                                        Playing on aspects of sustainability, the pieces appeared to be upcycled to establish dimension
                                                        and flair. This take on grunge and streetwear took sustainable fashion to an entirely new level.
                                                    </p>
                                                    <p>ur specialized team of researchers, strategists, designers, developers, and project managers work
                                                        with streamlined processes to break through organizational roadblocks. We translate research into
                                                        solutions, crafting thoughtful and unified brands.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                            <div class="story__img-wrapper">
                                                <img src="assets/imgs/story/1.jpg" alt="Story Thumbnail" class="w-100" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div class="story__img-wrapper img-anim">
                                                <img src="assets/imgs/story/2.jpg" alt="Story Thumbnail" data-speed="auto" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div class="story__img-wrapper">
                                                <img src="assets/imgs/story/3.jpg" alt="Story Thumbnail" />
                                                <img src="assets/imgs/story/4.jpg" alt="Story Thumbnail" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Story area end  */}


                            {/* Counter area start  */}
                            <section class="counter__area">
                                <div class="container g-0 line pb-140 pt-140">
                                    <span class="line-3"></span>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="counter__wrapper-2 counter_animation">
                                                <div class="counter__item-2 counter__anim">
                                                    <h2 class="counter__number">25k</h2>
                                                    <p>Project <br />completed</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                                <div class="counter__item-2 counter__anim">
                                                    <h2 class="counter__number">8k</h2>
                                                    <p>Happy <br />customers</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                                <div class="counter__item-2 counter__anim">
                                                    <h2 class="counter__number">15</h2>
                                                    <p>Years <br />experiences</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                                <div class="counter__item-2 counter__anim">
                                                    <h2 class="counter__number">98</h2>
                                                    <p>Awards <br />achievement</p>
                                                    <span class="counter__border"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Counter area end  */}


                            {/* Team area start  */}
                            <section class="team__area pt-140 pb-140">
                                <div class="sec-title-wrapper">
                                    <h2 class="sec-sub-title title-anim">Our Team</h2>
                                    <h3 class="sec-title title-anim">How we work</h3>
                                </div>


                                <div class="swiper team__slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide team__slide">
                                            <a href="/team-details">
                                                <img src="assets/imgs/team/1.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role">Founder & CEO</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="/team-details">
                                                <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name">Jassica Oliver</h4>
                                                    <h5 class="team__member-role">Researcher</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="/team-details">
                                                <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name">Daniyel Adamson</h4>
                                                    <h5 class="team__member-role">Digital Marketer</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="/team-details">
                                                <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name">Hardiya Kethrine</h4>
                                                    <h5 class="team__member-role">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="/team-details">
                                                <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name">Saymon D. Halk</h4>
                                                    <h5 class="team__member-role">Researcher</h5>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide team__slide">
                                            <a href="/team-details">
                                                <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                                                <div class="team__info">
                                                    <h4 class="team__member-name">Jassica Oliver</h4>
                                                    <h5 class="team__member-role">Lead Designer</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Team area end  */}



                            {/* Brand area start  */}
                            <section class="brand__area">
                                <div class="container g-0 line pt-140 pb-140">
                                    <span class="line-3"></span>
                                    <div class="row g-0">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-sub-title title-anim">Internation Brands</h2>
                                                <h3 class="sec-title title-anim">We are happy to work with global <br />
                                                    largest brands</h3>
                                            </div>
                                        </div>

                                        <div class="brand__list">
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                            </div>
                                            <div class="brand__item fade_bottom">
                                                <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Brand area end  */}


                            {/* Testimonial area start  */}
                            <section class="testimonial__area-2">
                                <div class="container g-0 line pb-140">
                                    <span class="line-3"></span>

                                    <div class="row g-0">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div class="testimonial__video">
                                                <video autoplay muted loop>
                                                    <source src="assets/video/testimonial.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>

                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div class="testimonial__slider-wrapper-2">
                                                <div class="swiper testimonial__slider">
                                                    <div class="swiper-wrapper">

                                                        <div class="swiper-slide testimonial__slide">
                                                            <div class="testimonial__inner-2">
                                                                <h2 class="testimonial__title-2">Amazing digital service</h2>
                                                                <p class="testimonial__text-2">We were there right at the beginning just when the concept
                                                                    for
                                                                    search
                                                                    engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                                                                    than 50
                                                                    talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                                                                <h3 class="testimonial__author">Adam Syndera</h3>
                                                                <h4 class="testimonial__role">CEO, Agency</h4>
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide testimonial__slide">
                                                            <div class="testimonial__inner-2">
                                                                <h2 class="testimonial__title-2">Amazing digital service</h2>
                                                                <p class="testimonial__text-2">We were there right at the beginning just when the concept
                                                                    for
                                                                    search
                                                                    engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                                                                    than 50
                                                                    talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                                                                <h3 class="testimonial__author">Adam Syndera</h3>
                                                                <h4 class="testimonial__role">CEO, Agency</h4>
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide testimonial__slide">
                                                            <div class="testimonial__inner-2">
                                                                <h2 class="testimonial__title-2">Amazing digital service</h2>
                                                                <p class="testimonial__text-2">We were there right at the beginning just when the concept
                                                                    for
                                                                    search
                                                                    engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                                                                    than 50
                                                                    talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                                                                <h3 class="testimonial__author">Adam Syndera</h3>
                                                                <h4 class="testimonial__role">CEO, Agency</h4>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="testimonial__pagination">
                                                    <div class="prev-button"><i class="fa-solid fa-arrow-right"></i></div>
                                                    <div class="next-button"><i class="fa-solid fa-arrow-left"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Testimonial area end  */}


                            {/* CTA area start  */}
                            <section class="cta__area">
                                <div class="container line pb-110 dark-p">
                                    <div class="line-3"></div>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="cta__content">
                                                <p class="cta__sub-title">Work with us</p>
                                                <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                                                <div id="btn_wrapper">
                                                    <a href="/contact" class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us <i
                                                        class="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* CTA area end  */}

                        </main>



                        {/* Footer area start  */}
                        <footer class="footer__area">
                            <div class="footer__top">
                                <div class="container footer-line"></div>
                                <img src="assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5" />
                            </div>

                            <div class="footer__btm">
                                <div class="container">
                                    <div class="row footer__row">
                                        <div class="col-xxl-12">
                                            <div class="footer__inner">
                                                <div class="footer__widget">
                                                    <img class="footer__logo" src="assets/imgs/logo/footer-logo-white.png" alt="Footer Logo" />
                                                    <p>When do they work well, and when do they on us and finally, when do we actually need how can we
                                                        avoid
                                                        them.</p>
                                                    <ul class="footer__social">
                                                        <li><a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                                                        <li><a href="#"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                                                        <li><a href="#"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                                                        <li><a href="#"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                                                    </ul>
                                                </div>

                                                <div class="footer__widget-2">
                                                    <h2 class="footer__widget-title">Information</h2>
                                                    <ul class="footer__link">
                                                        <li><Link href="/about">About Company</Link></li>
                                                        <li><a href="/portfolio">Case Study</a></li>
                                                        <li><a href="/career">Career</a></li>
                                                        <li><Link href="/blog">blog</Link></li>
                                                        <li><a href="/contact">contact</a></li>
                                                    </ul>
                                                </div>

                                                <div class="footer__widget-3">
                                                    <h2 class="footer__widget-title">Contact Us</h2>
                                                    <ul class="footer__contact">
                                                        <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                                        <li><a href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </a></li>
                                                        <li><a href="mailto:info@buildyexample.com">info@buildyexample.com</a></li>
                                                    </ul>
                                                </div>

                                                <div class="footer__widget-4">
                                                    <h2 class="project-title">Have a project in your mind?</h2>
                                                    <div id="btn_wrapper">
                                                        <a href="/contact" class="wc-btn-primary btn-hover btn-item"><span></span> contact us <i
                                                            class="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                    <h3 class="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                                                    <h4 class="contact-day">Saturday - Thursday</h4>
                                                </div>

                                                <div class="footer__copyright">
                                                    <p>© 2022 - 2025 | Alrights reserved by <a href="https://wealcoder.com/"
                                                        target="_blank" rel="noreferrer">Wealcoder</a>
                                                    </p>
                                                </div>

                                                <div class="footer__subscribe">
                                                    <form action="#">
                                                        <input type="email" name="email" placeholder="Enter your email" />
                                                        <button type="submit" class="subs-btn"><i class="fa-solid fa-paper-plane"></i></button>
                                                    </form>
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

            </body>
        </div>
    )
}