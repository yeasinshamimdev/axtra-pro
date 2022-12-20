import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/ctaArea';
import Footer from '../components/footer'
import Offcanvas from '../components/offcanvas';
import SwitcherArea from '../components/switcherArea';

const AboutDark = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Axtra HTML5 Template" />

        <title>About - Axtra</title>

        {/* Fav Icon   */}
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

        {/* Cursor Animation   */}
        <div class="cursor1"></div>
        <div class="cursor2"></div>


        {/* Preloader   */}
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


        {/* Switcher Area Start   */}
        <SwitcherArea />
        {/* Switcher Area End   */}



        {/* Scroll Smoother   */}
        <div class="has-smooth" id="has_smooth"></div>


        {/* Go Top Button   */}
        <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


        {/* Header area start   */}
        <header class="header__area">
          <div class="header__inner">
            <div class="header__logo">
              <Link href="/">
                <img class="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                <img class="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
              </Link>
            </div>
            <div class="header__nav-icon">
              <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
            </div>
            <div class="header__support">
              <p>Support center <a href="tel:+9587325902">+9 587 325 902</a></p>
            </div>
          </div>
        </header>
        {/* Header area end   */}



        {/* Offcanvas area start   */}
        <Offcanvas />
        {/* Offcanvas area end   */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* Hero area start   */}
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
                              <Link href="/service" class="wc-btn-primary btn-hover btn-item"><span></span> Trends &  <br />
                                technology
                                <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>
                          <div class="hero__about-text title-anim">
                            <p>Think of the world`s most iconica and successful brands easily findable, impactful.
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
              {/* Hero area end   */}


              {/* Story area start   */}
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
              {/* Story area end   */}


              {/* Counter area start   */}
              <section class="counter__area">
                <div class="container g-0 line pb-140 pt-140">
                  <span class="line-3"></span>

                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="counter__wrapper-2 counter_animation">
                        <div class="counter__item-2 counter__anim">
                          <h2 class="counter__number">25k</h2>
                          <p>Project  <br />completed</p>
                          <span class="counter__border"></span>
                        </div>
                        <div class="counter__item-2 counter__anim">
                          <h2 class="counter__number">8k</h2>
                          <p>Happy  <br />customers</p>
                          <span class="counter__border"></span>
                        </div>
                        <div class="counter__item-2 counter__anim">
                          <h2 class="counter__number">15</h2>
                          <p>Years  <br />experiences</p>
                          <span class="counter__border"></span>
                        </div>
                        <div class="counter__item-2 counter__anim">
                          <h2 class="counter__number">98</h2>
                          <p>Awards  <br />achievement</p>
                          <span class="counter__border"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Counter area end   */}


              {/* Team area start   */}
              <section class="team__area pt-140 pb-140">
                <div class="sec-title-wrapper">
                  <h2 class="sec-sub-title title-anim">Our Team</h2>
                  <h3 class="sec-title title-anim">How we work</h3>
                </div>


                <div class="swiper team__slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/1.jpg" alt="Team Member" />
                        <div class="team__info">
                          <h4 class="team__member-name">Saymon D. Halk</h4>
                          <h5 class="team__member-role">Founder & CEO</h5>
                        </div>
                      </Link>
                    </div>

                    <div class="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                        <div class="team__info">
                          <h4 class="team__member-name">Jassica Oliver</h4>
                          <h5 class="team__member-role">Researcher</h5>
                        </div>
                      </Link>
                    </div>

                    <div class="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                        <div class="team__info">
                          <h4 class="team__member-name">Daniyel Adamson</h4>
                          <h5 class="team__member-role">Digital Marketer</h5>
                        </div>
                      </Link>
                    </div>

                    <div class="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                        <div class="team__info">
                          <h4 class="team__member-name">Hardiya Kethrine</h4>
                          <h5 class="team__member-role">Lead Designer</h5>
                        </div>
                      </Link>
                    </div>

                    <div class="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                        <div class="team__info">
                          <h4 class="team__member-name">Saymon D. Halk</h4>
                          <h5 class="team__member-role">Researcher</h5>
                        </div>
                      </Link>
                    </div>

                    <div class="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                        <div class="team__info">
                          <h4 class="team__member-name">Jassica Oliver</h4>
                          <h5 class="team__member-role">Lead Designer</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Team area end   */}



              {/* Brand area start   */}
              <section class="brand__area">
                <div class="container g-0 line pt-140 pb-140">
                  <span class="line-3"></span>
                  <div class="row g-0">
                    <div class="col-xxl-12">
                      <div class="sec-title-wrapper">
                        <h2 class="sec-sub-title title-anim">Internation Brands</h2>
                        <h3 class="sec-title title-anim">We are happy to work with global  <br />
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
              {/* Brand area end   */}


              {/* Testimonial area start   */}
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
              {/* Testimonial area end   */}

              {/* CTA area start   */}
              <CtaArea />
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

export default AboutDark;