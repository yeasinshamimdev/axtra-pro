import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/footer';
import Offcanvas from '../components/offcanvas';
import SwitcherArea from '../components/switcherArea';

const PortfolioDetails = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Axtra HTML5 Template" />

        <title>Portfolio Details - Axtra</title>

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
      <main>
        {/* Cursor Animation  */}
        <div className="cursor1"></div>
        <div className="cursor2"></div>

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
        <SwitcherArea />
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

        {/* Offcanvas area start */}
        <Offcanvas />
        {/* Offcanvas area end */}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* Portfolio area start   */}
              <section className="portfolio__detail">
                <div className="portfolio__detail-top">
                  <div className="container g-0 line pt-110 pb-130">
                    <span className="line-3"></span>

                    <div className="row">
                      <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                        <div className="sec-title-wrapper">
                          <h2 className="sec-title animation__char_come">Lionpro- <br />Agency</h2>
                        </div>
                      </div>

                      <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                        <div className="portfolio__detail-info">
                          <ul>
                            <li>Category <Link href="/category">Development</Link></li>
                            <li>Client <span>Webflow</span></li>
                            <li>Start Date <span>23 January 2021</span></li>
                            <li>Handover <span>05 March 2021</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio__detail-thumb">
                  <img src="assets/imgs/portfolio/detail/1.jpg" alt="Portfolio Thumbnail" data-speed="auto" />
                </div>

                <div className="portfolio__detail-content">
                  <div className="container g-0 line pt-140">
                    <span className="line-3"></span>

                    <div className="block-content">
                      <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                          <h2 className="portfolio__detail-title title-anim">Build, streamline and
                            evolve together with
                            solution</h2>
                        </div>

                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                          <div className="portfolio__detail-text">
                            <p>Always ready to push the boundaries, especially when it comes to our own platform, Our
                              analytical
                              eye
                              to create a site that was visually engaging and also optimised for maximum performance. It
                              also
                              perfectly reflects the journey to help it tell a story to increase its understanding and drive
                              action.
                              To create a site that was visually engaging for maximum performance.</p>

                            <ul>
                              <li>+ Brand Development</li>
                              <li>+ UX/UI Design</li>
                              <li>+ Front-end Development</li>
                              <li>+ Copywriting</li>
                              <li>+ Shopify Development</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block-thumb">
                      <img src="assets/imgs/portfolio/detail/2.jpg" alt="Portfolio Image" data-speed="0.5" />
                    </div>

                    <div className="block-content  pt-140">
                      <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                          <h2 className="portfolio__detail-title title-anim">Visual and typograpy
                            hierarchy</h2>
                        </div>

                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                          <div className="portfolio__detail-text">
                            <p>Visual hierarchy is the principle of arranging elements to show
                              their order of importance.
                              Designers
                              structure visual characteristics—e.g., menu icons—so users can understand information easily.
                              By
                              laying out elements logically and strategically, designers influence users’ perceptions and
                              guide
                              them
                              to desired actions. Users notice larger elements more easily can convert.
                            </p>

                            <div className="fonts">
                              <img src="assets/imgs/portfolio/detail/shape.png" alt="Font Style" />
                              <ul>
                                <li className="regular"><span>regular</span> This is text message</li>
                                <li className="medium"><span>Medium</span> Medium typography</li>
                                <li className="semibold"><span>SemiBold</span> Just Amazing</li>
                                <li className="blod"><span>Blod</span> Awesome</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block-gallery">
                      <img src="assets/imgs/portfolio/detail/3.jpg" alt="Portfolio Image" />
                      <img src="assets/imgs/portfolio/detail/4.jpg" alt="Portfolio Image" />
                    </div>

                    <div className="block-thumb">
                      <img src="assets/imgs/portfolio/detail/5.jpg" alt="Portfolio Image" data-speed="0.5" />
                    </div>

                    <div className="block-img-text">
                      <img src="assets/imgs/portfolio/detail/6.jpg" alt="Portfolio Image" />
                      <img src="assets/imgs/portfolio/detail/7.jpg" alt="Portfolio Image" />
                      <p>For those of us who are blessed with good sight. So we seldom consider
                        it. That’s why going off to
                        investigate the whys and hows involved is a little like trying to get behind the wind </p>
                    </div>

                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="portfolio__detail-btns pt-150 pb-150">
                          <Link href="/portfolio-details" className="wc-btn-primary btn-hover"><span></span> Prev Work</Link>
                          <Link href="/portfolio-details" className="wc-btn-primary btn-hover"><span></span> Next Work</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
              {/* Portfolio area end   */}

            </main>
            {/* Footer area start   */}
            <Footer />
            {/* Footer area end  */}

          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDetails;