import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer'
import OffcanvasDark from '../components/common/offcanvasDark';
import SwitcherAreaDark from '../components/common/switcherAreaDark';

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

        {/* Cursor Animation   */}
        <div className="cursor1"></div>
        <div className="cursor2"></div>


        {/* Preloader   */}
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


        {/* Switcher Area Start   */}
        <SwitcherAreaDark />
        {/* Switcher Area End   */}



        {/* Scroll Smoother   */}
        <div className="has-smooth" id="has_smooth"></div>


        {/* Go Top Button   */}
        <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>


        {/* Header area start   */}
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
        {/* Header area end   */}

        {/* Offcanvas area start   */}
        <OffcanvasDark />
        {/* Offcanvas area end   */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* Hero area start   */}
              <section className="hero__about">
                <div className="container g-0 line">
                  <span className="line-3"></span>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="hero__about-content">
                        <h1 className="hero-title animation__word_come">We’re a full service creative and digital agency, working
                          globally with leargest brands.</h1>
                        <div className="hero__about-info">
                          <div className="hero__about-btn">
                            <div id="btn_wrapper">
                              <Link href="/service" className="wc-btn-primary btn-hover btn-item"><span></span> Trends &  <br />
                                technology
                                <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>
                          <div className="hero__about-text title-anim">
                            <p>Think of the world`s most iconica and successful brands easily findable, impactful.
                              Interactional and exceptional designs. Our story takes beginning in 2013</p>
                          </div>
                          <div className="hero__about-award">
                            <img src="assets/imgs/about/award.png" alt="Best Studio Award" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row hero__about-row">
                    <div className="col-xxl-12">
                      <div className="hero__about-video">
                        <video loop muted autoPlay playsInline>
                          <source src="assets/video/video.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Hero area end   */}


              {/* Story area start   */}
              <section className="story__area">
                <div className="container g-0 line pt-140">
                  <span className="line-3"></span>
                  <div className="sec-title-wrapper">
                    <div className="from-text">from <span>1990</span></div>

                    <div className="row">
                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                        <h3 className="sec-title title-anim">Our story</h3>
                      </div>
                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div className="story__text">
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
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div className="story__img-wrapper">
                        <img src="assets/imgs/story/1.jpg" alt="Story Thumbnail" className="w-100" />
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                      <div className="story__img-wrapper img-anim">
                        <img src="assets/imgs/story/2.jpg" alt="Story Thumbnail" data-speed="auto" />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="story__img-wrapper">
                        <img src="assets/imgs/story/3.jpg" alt="Story Thumbnail" />
                        <img src="assets/imgs/story/4.jpg" alt="Story Thumbnail" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Story area end   */}


              {/* Counter area start   */}
              <section className="counter__area">
                <div className="container g-0 line pb-140 pt-140">
                  <span className="line-3"></span>

                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="counter__wrapper-2 counter_animation">
                        <div className="counter__item-2 counter__anim">
                          <h2 className="counter__number">25k</h2>
                          <p>Project  <br />completed</p>
                          <span className="counter__border"></span>
                        </div>
                        <div className="counter__item-2 counter__anim">
                          <h2 className="counter__number">8k</h2>
                          <p>Happy  <br />customers</p>
                          <span className="counter__border"></span>
                        </div>
                        <div className="counter__item-2 counter__anim">
                          <h2 className="counter__number">15</h2>
                          <p>Years  <br />experiences</p>
                          <span className="counter__border"></span>
                        </div>
                        <div className="counter__item-2 counter__anim">
                          <h2 className="counter__number">98</h2>
                          <p>Awards  <br />achievement</p>
                          <span className="counter__border"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Counter area end   */}


              {/* Team area start   */}
              <section className="team__area pt-140 pb-140">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title title-anim">Our Team</h2>
                  <h3 className="sec-title title-anim">How we work</h3>
                </div>


                <div className="swiper team__slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/1.jpg" alt="Team Member" />
                        <div className="team__info">
                          <h4 className="team__member-name">Saymon D. Halk</h4>
                          <h5 className="team__member-role">Founder & CEO</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                        <div className="team__info">
                          <h4 className="team__member-name">Jassica Oliver</h4>
                          <h5 className="team__member-role">Researcher</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                        <div className="team__info">
                          <h4 className="team__member-name">Daniyel Adamson</h4>
                          <h5 className="team__member-role">Digital Marketer</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/4.jpg" alt="Team Member" />
                        <div className="team__info">
                          <h4 className="team__member-name">Hardiya Kethrine</h4>
                          <h5 className="team__member-role">Lead Designer</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/2.jpg" alt="Team Member" />
                        <div className="team__info">
                          <h4 className="team__member-name">Saymon D. Halk</h4>
                          <h5 className="team__member-role">Researcher</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide team__slide">
                      <Link href="/team-details">
                        <img src="assets/imgs/team/3.jpg" alt="Team Member" />
                        <div className="team__info">
                          <h4 className="team__member-name">Jassica Oliver</h4>
                          <h5 className="team__member-role">Lead Designer</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Team area end   */}



              {/* Brand area start   */}
              <section className="brand__area">
                <div className="container g-0 line pt-140 pb-140">
                  <span className="line-3"></span>
                  <div className="row g-0">
                    <div className="col-xxl-12">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-sub-title title-anim">Internation Brands</h2>
                        <h3 className="sec-title title-anim">We are happy to work with global  <br />
                          largest brands</h3>
                      </div>
                    </div>

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
              </section>
              {/* Brand area end   */}


              {/* Testimonial area start   */}
              <section className="testimonial__area-2">
                <div className="container g-0 line pb-140">
                  <span className="line-3"></span>

                  <div className="row g-0">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                      <div className="testimonial__video">
                        <video autoPlay muted loop>
                          <source src="assets/video/testimonial.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>

                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                      <div className="testimonial__slider-wrapper-2">
                        <div className="swiper testimonial__slider">
                          <div className="swiper-wrapper">

                            <div className="swiper-slide testimonial__slide">
                              <div className="testimonial__inner-2">
                                <h2 className="testimonial__title-2">Amazing digital service</h2>
                                <p className="testimonial__text-2">We were there right at the beginning just when the concept
                                  for
                                  search
                                  engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                                  than 50
                                  talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                                <h3 className="testimonial__author">Adam Syndera</h3>
                                <h4 className="testimonial__role">CEO, Agency</h4>
                              </div>
                            </div>

                            <div className="swiper-slide testimonial__slide">
                              <div className="testimonial__inner-2">
                                <h2 className="testimonial__title-2">Amazing digital service</h2>
                                <p className="testimonial__text-2">We were there right at the beginning just when the concept
                                  for
                                  search
                                  engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                                  than 50
                                  talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                                <h3 className="testimonial__author">Adam Syndera</h3>
                                <h4 className="testimonial__role">CEO, Agency</h4>
                              </div>
                            </div>

                            <div className="swiper-slide testimonial__slide">
                              <div className="testimonial__inner-2">
                                <h2 className="testimonial__title-2">Amazing digital service</h2>
                                <p className="testimonial__text-2">We were there right at the beginning just when the concept
                                  for
                                  search
                                  engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                                  than 50
                                  talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                                <h3 className="testimonial__author">Adam Syndera</h3>
                                <h4 className="testimonial__role">CEO, Agency</h4>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="testimonial__pagination">
                          <div className="prev-button"><i className="fa-solid fa-arrow-right"></i></div>
                          <div className="next-button"><i className="fa-solid fa-arrow-left"></i></div>
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