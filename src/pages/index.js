import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import HomeFooter from '../components/indexFooter'
import TopHead from '../components/indexHead'

export default function Home() {

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Axtra HTML5 Template" />
        {/* Fav Icon  */}
        <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
        {/* Google Fonts  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <title>Home - Digital Marketing</title>
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

        {/* Header area start  */}
        <TopHead />
        {/* Header area end  */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* Hero area start */}
              <section class="hero__area-3">
                <div class="container">
                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="hero__inner-3">
                        <div class="sec-title-wrapper">
                          <h2 class="sec-sub-title">Digital</h2>
                          <h3 class="sec-title title-left">Mark</h3>
                          <h3 class="sec-title title-right">eting</h3>
                        </div>
                        <div class="hero__text-3">
                          <p class="hero__text-animation">Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>
                        </div>
                        <div class="scroll-down">
                          <button><img src="assets/imgs/icon/arrow-down-sm.png" alt="arrow icon" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wrapper">
                  <div class="video-info">
                    <div class="video-intro">
                      <input id="video_check" type="checkbox" />
                      <div class="intro-title">
                        <h4 class="video-title">Watch <span>video intro</span></h4>
                        <h4 class="video-title close-video-title">Close <span>video intro</span></h4>
                      </div>
                      <div class="video">
                        <video src="assets/video/hero-3.mp4" loop muted autoplay playsinline></video>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="hero3-img-ani">
                  <img src="assets/imgs/hero/3/1.jpg" alt="Hero Image" class="hero3-img" />
                </div>
              </section>


              {/* Brand area start */}
              <section class="brand__area">
                <div class="container pt-140 pb-140">
                  <div class="row">
                    <div class="col-xxl-12">
                      <h2 class="brand__title-3 title-anim">We worked with global largest brands
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
              {/* Brand area end */}


              {/* About area start */}
              <section class="about__area-3">
                <div class="container pt-140 pb-110">
                  <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="about__img-3">
                        <img src="assets/imgs/about/3/1.jpg" alt="About Thumbnail" data-speed="auto" />
                      </div>
                    </div>

                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="sec-title-wrapper">
                        <h2 class="sec-sub-title title-anim">Who We Are</h2>
                        <h3 class="sec-title title-anim">We are leading digital marketing agency.</h3>
                      </div>
                      <div class="sec-text-wrapper">
                        <div class="sec-text text-anim">
                          <p>We’re a team of strategic mdigital marketing working globally with largest brands, We believe
                            that
                            progress only happens when you refused to play things safe. We combine ideas and behaviors, and
                            insights with design, technological data to produce brand experiences that customers love our
                            services.</p>
                          <div id="btn_wrapper">
                            <Link class="wc-btn-light btn-hover btn-item" href="/about"><span></span> Explore Us <i
                              class="fa-solid fa-arrow-right"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* About area end */}


              {/* Service area start */}
              <section class="service__area-3 pb-150">
                <div class="container">
                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="sec-title-wrapper pt-130 text-anim">
                        <h2 class="sec-sub-title title-anim">Services</h2>
                        <h3 class="sec-title title-anim">Our marketing <br /> Services</h3>
                        <p>Consumers today rely heavily on digital means to research products.
                          We
                          research a brand of bldend
                          engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                          products before buying.</p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xx-12">
                      <div class="service__list-3">
                        <div class="service__item-3 service_animation">
                          <h3><Link href="/service-details" class="service__title-3">Search Engine <br />Optimization</Link></h3>
                          <div class="service__content-3">
                            <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                            </p>
                            <ul class="">
                              <li>+ Logo Design</li>
                              <li>+ Advertisement</li>
                              <li>+ Promotion</li>
                            </ul>
                          </div>
                          <div class="service__btn-3">
                            <div id="btn_wrapper">
                              <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>

                          <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/1.jpg)" }}></div>
                        </div>

                        <div class="service__item-3 service_animation">
                          <h3><Link href="/service-details" class="service__title-3 ">Email <br />Marketing</Link></h3>
                          <div class="service__content-3">
                            <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                            </p>
                            <ul class="">
                              <li>+ Logo Design</li>
                              <li>+ Advertisement</li>
                              <li>+ Promotion</li>
                            </ul>
                          </div>
                          <div class="service__btn-3">
                            <div id="btn_wrapper">
                              <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>

                          <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/2.png)" }}></div>
                        </div>

                        <div class="service__item-3 service_animation">
                          <h3 class=""><Link href="/service-details" class="service__title-3">COntent
                            <br />Marketing</Link></h3>
                          <div class="service__content-3">
                            <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                            </p>
                            <ul class="">
                              <li>+ Logo Design</li>
                              <li>+ Advertisement</li>
                              <li>+ Promotion</li>
                            </ul>
                          </div>
                          <div class="service__btn-3 ">
                            <div id="btn_wrapper">
                              <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>

                          <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/3.png)" }}></div>
                        </div>

                        <div class="service__item-3 service_animation">
                          <h3 class=""><Link href="/service-details" class="service__title-3">Social
                            <br />Marketing</Link></h3>
                          <div class="service__content-3">
                            <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                            </p>
                            <ul class="">
                              <li>+ Logo Design</li>
                              <li>+ Advertisement</li>
                              <li>+ Promotion</li>
                            </ul>
                          </div>
                          <div class="service__btn-3">
                            <div id="btn_wrapper">
                              <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>

                          <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/4.png)" }}></div>
                        </div>

                        <div class="service3__img-wrap">
                          <div class="service3__img"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
              {/* Service area end */}


              {/* Portfolio area start */}
              <section class="portfolio__area-3">
                <div class="container pt-100 pb-150">
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
                              <Link href="/service-details">
                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image" />
                              </Link>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="portfolio__slide-3">
                              <Link href="/service-details">
                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image" />
                              </Link>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="portfolio__slide-3">
                              <Link href="/service-details">
                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image" />
                              </Link>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="portfolio__slide-3">
                              <Link href="/service-details">
                                <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image" />
                              </Link>
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
              {/* Portfolio area end */}


              {/* Testimonial area start */}
              <section class="testimonial__area-3">
                <div class="container">
                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="swiper testimonial__slider-3">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide testimonial__slide-3">
                            <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                              collaborates with us daily, always there for us when we encounter difficulties and celebrate
                              achievements. We see in Alts our best ally for success!</p>
                            <h2 class="client__name-3">Maria D. Halk</h2>
                            <h3 class="client__role-3">Managing Director</h3>
                          </div>
                          <div class="swiper-slide testimonial__slide-3">
                            <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                              collaborates with us daily, always there for us when we encounter difficulties and celebrate
                              achievements. We see in Alts our best ally for success!</p>
                            <h2 class="client__name-3">Maria D. Halk</h2>
                            <h3 class="client__role-3">Managing Director</h3>
                          </div>
                          <div class="swiper-slide testimonial__slide-3">
                            <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                              collaborates with us daily, always there for us when we encounter difficulties and celebrate
                              achievements. We see in Alts our best ally for success!</p>
                            <h2 class="client__name-3">Maria D. Halk</h2>
                            <h3 class="client__role-3">Managing Director</h3>
                          </div>
                          <div class="swiper-slide testimonial__slide-3">
                            <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                              collaborates with us daily, always there for us when we encounter difficulties and celebrate
                              achievements. We see in Alts our best ally for success!</p>
                            <h2 class="client__name-3">Maria D. Halk</h2>
                            <h3 class="client__role-3">Managing Director</h3>
                          </div>
                          <div class="swiper-slide testimonial__slide-3">
                            <p>When we talk about Alts, we do not mean a typical business partner, but rather a team that
                              collaborates with us daily, always there for us when we encounter difficulties and celebrate
                              achievements. We see in Alts our best ally for success!</p>
                            <h2 class="client__name-3">Maria D. Halk</h2>
                            <h3 class="client__role-3">Managing Director</h3>
                          </div>
                        </div>
                        <div class="next-button swipper-btn"><i class="fa-solid fa-arrow-left"></i></div>
                        <div class="prev-button swipper-btn"><i class="fa-solid fa-arrow-right"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial__images-3 animation_image_zoom">
                  <img src="assets/imgs/testimonial/3/1.jpg" alt="testimonial Image" class="testimonial3__img" />
                  <img src="assets/imgs/testimonial/3/2.jpg" alt="testimonial Image" class="testimonial3__img-2" />
                  <img src="assets/imgs/testimonial/3/3.jpg" alt="testimonial Image" class="testimonial3__img-3" />
                  <img src="assets/imgs/testimonial/3/4.jpg" alt="testimonial Image" class="testimonial3__img-4" />
                  <img src="assets/imgs/testimonial/3/5.jpg" alt="testimonial Image" class="testimonial3__img-5" />
                  <img src="assets/imgs/testimonial/3/6.jpg" alt="testimonial Image" class="testimonial3__img-6" />
                </div>
              </section>
              {/* Testimonial area end */}


              {/* Workflow area start */}
              <section class="workflow__area-3">
                <div class="workflow__wrapper-3">
                  <div class="choose-wrapper wf_panel">
                    <div class="container">
                      <div class="row">
                        <div class="col-xxl-12">
                          <div class="choose-title-wrapper">
                            <h2 class="choose-title title-anim">why <br /> choose us</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="research__area wf_panel pt-150">
                    <div class="container inner_content">
                      <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                          <div class="sec-title-wrapper">
                            <h2 class="sec-sub-title">why <br />choose us</h2>
                            <h3 class="sec-title">Keword,Research Strategy, Survey, & Analytics</h3>
                            <p>Attention, we take out our round glasses and our sweater with elbow patches to go back to the
                              origins of the user experience: the first mention of the user and its importance was born in the
                            </p>
                          </div>
                          <ul class="research__tools">
                            <li><Link href="#">Google</Link></li>
                            <li><Link href="#">pinterest</Link></li>
                            <li><Link href="#">Instagram</Link></li>
                          </ul>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                          <div class="research__list">
                            <div class="research__item">
                              <div class="research__number">
                                <span>60%</span>
                              </div>
                              <div class="research__info">
                                <h4 class="research__title">Strategy</h4>
                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                              </div>
                            </div>

                            <div class="research__item">
                              <div class="research__number">
                                <span>95%</span>
                              </div>
                              <div class="research__info">
                                <h4 class="research__title">Audience</h4>
                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                              </div>
                            </div>

                            <div class="research__item">
                              <div class="research__number">
                                <span>70%</span>
                              </div>
                              <div class="research__info">
                                <h4 class="research__title">Keyword</h4>
                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="counter__area-3 wf_panel">
                    <div class="container">
                      <div class="row">
                        <div class="col-xxl-12">
                          <div class="sec-title-wrapper">
                            <h2 class="sec-sub-title">Why <br />Choose Us</h2>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                          <div class="counter__wrapper-3">
                            <div class="counter__item-3">
                              <h2 class="counter__number">25k</h2>
                              <p>Project <br />completed</p>
                            </div>
                            <div class="counter__item-3">
                              <h2 class="counter__number">8k</h2>
                              <p>Happy <br />customers</p>
                            </div>
                            <div class="counter__item-3">
                              <h2 class="counter__number">15</h2>
                              <p>Years <br />experiences</p>
                            </div>
                            <div class="counter__item-3">
                              <h2 class="counter__number">98</h2>
                              <p>Awards <br />achievement</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                          <div class="counter__img-3">
                            <img src="assets/imgs/thumb/counter-3.png" alt="Counter Image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA area start */}
                  <div class="cta__area-3 wf_panel">
                    <div class="container pt-150 pb-150">
                      <div class="row">
                        <div class="col-xxl-12">
                          <div class="cta__content-3">
                            <p class="cta__sub-title-2">Have you project in mind?</p>
                            <h2 class="cta__title-2">Let’s make something great together!</h2>
                            <div id="btn_wrapper">
                              <Link href="/contact" class="wc-btn-black btn-hover btn-item"><span></span>Contact <br />with
                                us <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CTA area end */}

                </div>
              </section>
              {/* Workflow area end */}



              {/* Price area start */}
              <section class="price__area pt-130 pb-140">
                <div class="container">
                  <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6">
                      <div class="sec-title-wrapper">
                        <h2 class="sec-sub-title title-anim">Pricing Table</h2>
                        <h3 class="sec-title title-anim">Be kind to your <br />mind</h3>
                      </div>
                      <div class="faq__list-3">
                        <div class="accordion" id="accordionExample">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Design should enrich our day
                              </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>Our design services starts and ends with a best-in-class experience strategy that builds
                                  brands. Through a process of iteration and prototyping design interfaces that bring joy to
                                  people</p>
                              </div>
                            </div>
                          </div>

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Bring their individual experience and creative
                              </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>This is the second items accordion body. It is hidden by default, until the
                                  collapse plugin adds the appropriate classes that we use to style each element. These
                                  classes.</p>
                              </div>
                            </div>
                          </div>

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
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

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
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

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Developing core web applications
                              </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
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

                    <div class="col-xxl-6 col-xl-6 col-lg-6">
                      <div class="price__table">
                        <div class="price__item animation_from_bottom">
                          <div class="price__icon"><span><i class="fa-solid fa-check"></i></span></div>
                          <div class="price__info">
                            <h2 class="price__type">Yearly</h2>
                            <h3 class="price__title">14 days free</h3>
                            <p>Subscription fee is $129.99 USD and automatically renews each year.</p>
                          </div>
                          <div class="price__amount">
                            <h4 class="best-value">Best Value</h4>
                            <p>$129<span> .99</span></p>
                          </div>
                        </div>

                        <div class="price__item animation_from_top">
                          <div class="price__icon"><span><i class="fa-solid fa-check"></i></span></div>
                          <div class="price__info">
                            <h2 class="price__type">Monthly</h2>
                            <h3 class="price__title">7 days free</h3>
                            <p>Subscription fee is $12.99 USD and automatically renews each year.</p>
                          </div>
                          <div class="price__amount">
                            <p>$12<span> .99</span></p>
                          </div>
                        </div>
                      </div>
                      <div class="price__btn" id="btn_wrapper">
                        <Link href="/contact" class="wc-btn-black btn-hover btn-item"><span></span> Try it <br />Free Now <i
                          class="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Price area end */}


              {/* Blog area start */}
              <section class="blog__area-3 pb-140 blog__animation">
                <div class="container">
                  <div class="row ">
                    <div class="col-xxl-12">
                      <div class="sec-title-wrapper text-anim pt-130">
                        <h2 class="sec-sub-title">Recent Blog</h2>
                        <h3 class="sec-title title-anim">Read Updated <br />Journal</h3>
                        <p>Read our blog and try to see everything from every perspective. Our passion lies in making
                          everything
                          accessible and aesthetic for everyone. </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6">
                      <article class="blog__item-3">
                        <div class="blog__img-wrapper-3">
                          <Link href="/blog-details">
                            <div class="img-box">
                              <img class="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail" />
                              <img class="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail" />
                            </div>
                          </Link>
                        </div>
                        <div class="blog__info-3">
                          <h4 class="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                          <h5><Link href="/blog-details" class="blog__title-3">How to bring fold to your startup
                            company with
                            Axtra</Link></h5>
                          <Link href="/blog-details" class="blog__btn">Read More <span><i
                            class="fa-solid fa-arrow-right"></i></span></Link>
                        </div>
                      </article>
                    </div>

                    <div class="col-xxl-6 col-xl-6 col-lg-6">
                      <article class="blog__item-3">
                        <div class="blog__img-wrapper-3">
                          <Link href="/blog-details">
                            <div class="img-box">
                              <img class="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail" />
                              <img class="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail" />
                            </div>
                          </Link>
                        </div>
                        <div class="blog__info-3">
                          <h4 class="blog__meta"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                          <h5><Link href="/blog-details" class="blog__title-3">How to manage a talented and
                            successful design
                            team</Link></h5>
                          <Link href="/blog-details" class="blog__btn">Read More <span><i
                            class="fa-solid fa-arrow-right"></i></span></Link>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
              {/* Blog area end */}

            </main>
            <HomeFooter />
          </div>
        </div>
      </main >
    </div >
  )
}
