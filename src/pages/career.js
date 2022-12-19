import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer'
import TopHead from '../components/topHead'

const Career = () => {
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
      </Head>
      <body>
        {/* Header top start */}
        <TopHead />
        {/* Header top end */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>


              {/* Career hero area start  */}
              <section class="career__top">
                <div class="career__top-title">
                  <div class="container pt-120">
                    <div class="row pb-120">
                      <div class="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
                        <div class="sec-title-wrapper">
                          <h2 class="sec-title-2 animation__char_come">Join our team & let’s work together</h2>
                        </div>
                      </div>
                      <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
                        <div id="btn_wrapper">
                          <a href="#job_list" class="wc-btn-secondary btn-hover btn-item"><span></span> Explore job
                            <br />vacancies <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="career__thumb">
                  <div class="container g-0">
                    <div class="row inherit">
                      <div class="col-xxl-12">
                        <div class="career__top-img">
                          <video autoplay muted loop>
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
              <section class="career__gallery">
                <div class="container g-0 line pt-140 pb-140">
                  <span class="line-3"></span>
                  <div class="row">
                    <div class="col-xxl-12">
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

                  <div class="row">
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                      <div class="career__gallery-img">
                        <img src="assets/imgs/career/2.jpg" alt="Image" />
                      </div>
                    </div>
                    <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                      <div class="career__gallery-img img-anim">
                        <img src="assets/imgs/career/3.jpg" alt="Image" data-speed="auto" />
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div class="career__gallery-img">
                        <img src="assets/imgs/career/4.jpg" alt="Image" />
                        <img src="assets/imgs/career/5.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Career gallery end   */}


              {/* Career area start   */}
              <section class="job__area pt-130 pb-150" id="job_list">
                <div class="container">
                  <div class="row">
                    <div class="col-xxl-12">
                      <div class="sec-title-wrapper">
                        <h2 class="sec-title title-anim">We’re Currently <br />hiring</h2>
                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="job__list">
                        <a href="/job-details">
                          <div class="job__item">
                            <p class="job__no">01</p>
                            <h3 class="job__title">UI/UX Designer</h3>
                            <h4 class="job__open">(02 Open Roles)</h4>
                            <h5 class="job__link"><span><i class="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </a>
                        <a href="/job-details">
                          <div class="job__item">
                            <p class="job__no">02</p>
                            <h3 class="job__title">Frontend Developer</h3>
                            <h4 class="job__open">(07 Open Roles)</h4>
                            <h5 class="job__link"><span><i class="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </a>
                        <a href="/job-details">
                          <div class="job__item">
                            <p class="job__no">03</p>
                            <h3 class="job__title">Product Manager</h3>
                            <h4 class="job__open">(15 Open Roles)</h4>
                            <h5 class="job__link"><span><i class="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </a>
                        <a href="/job-details">
                          <div class="job__item">
                            <p class="job__no">04</p>
                            <h3 class="job__title">JavaScript Engineer</h3>
                            <h4 class="job__open">(03 Open Roles)</h4>
                            <h5 class="job__link"><span><i class="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </a>
                        <a href="/job-details">
                          <div class="job__item">
                            <p class="job__no">05</p>
                            <h3 class="job__title">Joomla Developer</h3>
                            <h4 class="job__open">(09 Open Roles)</h4>
                            <h5 class="job__link"><span><i class="fa-solid fa-arrow-right"></i></span></h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Career area end   */}


              {/* Career benefit area start   */}
              <section class="career__benefits">
                <div class="container line g-0 pt-140 pb-150">
                  <span class="line-3"></span>

                  <div class="row">
                    <div class="col-xxl-7 col-xl-7 col-lg-7">
                      <ul class="career__benefits-list">
                        <li>Vacation & Paid <br />Time Off</li>
                        <li>Work-life <br /> Integration</li>
                        <li>Maternity/Paternity <br />Benefits</li>
                        <li>Personal <br /> Career Growth</li>
                        <li>Learning & <br />Development</li>
                        <li>Healthy <br /> Food & Snacks</li>
                      </ul>
                    </div>
                    <div class="col-xxl-5 col-xl-5 col-lg-5">
                      <div class="sec-title-wrapper">
                        <h2 class="sec-title title-anim">Global Perks & Benefits</h2>
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
      </body>
    </div>
  );
};

export default Career;