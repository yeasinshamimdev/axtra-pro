import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/common/footer';
import Offcanvas from '../components/common/offcanvas';
import OffcanvasDark from '../components/common/offcanvasDark';
import SwitcherAreaDark from '../components/common/switcherAreaDark';

const CareerDark = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Axtra HTML5 Template" />

        <title>Career - Axtra</title>

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
      <main className="dark">

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
              <Link href="/home/routes/index-dark">
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
        <OffcanvasDark />
        {/* Offcanvas area end  */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>


              {/* Career hero area start  */}
              <section className="career__top">
                <div className="career__top-title">
                  <div className="container pt-120">
                    <div className="row pb-120">
                      <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
                        <div className="sec-title-wrapper">
                          <h2 className="sec-title-2 animation__char_come">Join our team & let’s work together</h2>
                        </div>
                      </div>
                      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
                        <div id="btn_wrapper">
                          <Link href="#job_list" className="wc-btn-secondary btn-hover btn-item"><span></span> Explore job
                            <br />vacancies <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="career__thumb">
                  <div className="container g-0">
                    <div className="row inherit">
                      <div className="col-xxl-12">
                        <div className="career__top-img">
                          <video autoPlay muted loop>
                            <source src="assets/video/video.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Career hero area end  */}


              {/* Career gallery start   */}
              <section className="career__gallery">
                <div className="container g-0 line pt-140 pb-140">
                  <span className="line-3"></span>
                  <div className="row">
                    <div className="col-xxl-12">
                      <ul>
                        <li>Future</li>
                        <li>Community</li>
                        <li>Honor</li>
                      </ul>
                      <p>What sets us apart is what brings us together – a shared passion for solving business challenges
                        through strategy, design, and engineering. We are the sum total of our team, their unique
                        perspectives,
                        capabilities, and our ability to collaborate from ideation to deployment.</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div className="career__gallery-img">
                        <img src="assets/imgs/career/2.jpg" alt="Image" />
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                      <div className="career__gallery-img img-anim">
                        <img src="assets/imgs/career/3.jpg" alt="Image" data-speed="auto" />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="career__gallery-img">
                        <img src="assets/imgs/career/4.jpg" alt="Image" />
                        <img src="assets/imgs/career/5.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Career gallery end   */}


              {/* Career area start   */}
              <section className="job__area pt-130 pb-150" id="job_list">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-title title-anim">We’re Currently <br />hiring</h2>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="job__list">
                        <Link href="/job-details">
                          <div className="job__item">
                            <p className="job__no">01</p>
                            <h3 className="job__title">UI/UX Designer</h3>
                            <h4 className="job__open">(02 Open Roles)</h4>
                            <h5 className="job__link"><span><i className="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </Link>
                        <Link href="/job-details">
                          <div className="job__item">
                            <p className="job__no">02</p>
                            <h3 className="job__title">Frontend Developer</h3>
                            <h4 className="job__open">(07 Open Roles)</h4>
                            <h5 className="job__link"><span><i className="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </Link>
                        <Link href="/job-details">
                          <div className="job__item">
                            <p className="job__no">03</p>
                            <h3 className="job__title">Product Manager</h3>
                            <h4 className="job__open">(15 Open Roles)</h4>
                            <h5 className="job__link"><span><i className="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </Link>
                        <Link href="/job-details">
                          <div className="job__item">
                            <p className="job__no">04</p>
                            <h3 className="job__title">JavaScript Engineer</h3>
                            <h4 className="job__open">(03 Open Roles)</h4>
                            <h5 className="job__link"><span><i className="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </Link>
                        <Link href="/job-details">
                          <div className="job__item">
                            <p className="job__no">05</p>
                            <h3 className="job__title">Joomla Developer</h3>
                            <h4 className="job__open">(09 Open Roles)</h4>
                            <h5 className="job__link"><span><i className="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Career area end   */}


              {/* Career benefit area start   */}
              <section className="career__benefits">
                <div className="container line g-0 pt-140 pb-150">
                  <span className="line-3"></span>

                  <div className="row">
                    <div className="col-xxl-7 col-xl-7 col-lg-7">
                      <ul className="career__benefits-list">
                        <li>Vacation & Paid <br />Time Off</li>
                        <li>Work-life <br /> Integration</li>
                        <li>Maternity/Paternity <br />Benefits</li>
                        <li>Personal <br /> Career Growth</li>
                        <li>Learning & <br />Development</li>
                        <li>Healthy <br /> Food & Snacks</li>
                      </ul>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-title title-anim">Global Perks & Benefits</h2>
                        <p>We want you to love working here as much as we do. To inspire our team to be creative, productive,
                          and most importantly – feel valued as employees, we offer endless perks and de-stressors. How fun it
                          is to unwind while at work!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Career benefit area end   */}
            </main>
            {/* Footer area start   */}
            <Footer />
            {/* Footer area end    */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerDark;