import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer';
import Offcanvas from '../components/common/offcanvas';
import SwitcherArea from '../components/common/switcherArea';

const BlogDetails = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Axtra HTML5 Template" />

        <title>Blog Details - Axtra</title>

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
        <SwitcherArea />
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
        <Offcanvas />
        {/* Offcanvas area end   */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* Blog detail start   */}
              <section className="blog__detail">
                <div className="container g-0 line pt-140">
                  <span className="line-3"></span>
                  <div className="row">
                    <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                      <div className="blog__detail-top">
                        <h2 className="blog__detail-date animation__word_come">Design, Marketing <span>25 Jan 2019</span></h2>
                        <h3 className="blog__detail-title animation__word_come">Donate your design for newest designers to try
                          better
                        </h3>
                        <div className="blog__detail-metalist">
                          <div className="blog__detail-meta">
                            <img src="assets/imgs/blog/detail/author.png" alt="Author Picture" />
                            <p>Writen by <span>Codexpand</span></p>
                          </div>
                          <div className="blog__detail-meta">
                            <p>Viewed <span>3 min read</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="blog__detail-thumb">
                        <img src="assets/imgs/blog/detail/1.jpg" alt="Blog Thumbnail" data-speed="0.5" />
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                      <div className="blog__detail-content">
                        <p>We love to bring designs to life as a developer, and I aim to do this using whatever front end
                          tools are necessary. My preferred tools are more modern javascript libraries like React.js but I
                          like to use whatever is best for the websites needs. There are several reasons why a business would
                          consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful. </p>
                        <p>But in order that you may see whence all this born error of those who accuse pleasure and praise
                          pain, I will open the whole matter, and explain the very things which were said by that discoverer
                          of truth and, as it were, the architect of a happy life.</p>
                        <img src="assets/imgs/blog/detail/2.jpg" alt="Blog Image" />
                        <h2>JavaScript</h2>
                        <p>We love to bring designs to life as a developer, and I aim to do this using whatever front end
                          tools are necessary. My preferred tools are more modern javascript libraries like React.js but I
                          like to use whatever is best for the websites needs. There are several reasons why a business would
                          consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                        <h2>Fremework</h2>
                        <p>Always ready to push the boundaries, especially when it comes to our own platform, Our analytical
                          eye to create a site that was visually engaging and also optimised for maximum performance. It also
                          perfectly reflects the journey to help it tell a story to increase its understanding and drive
                          action. To create a site that was visually engaging for maximum performance.</p>
                        <ul>
                          <li>Brand Development</li>
                          <li>UX/UI Design</li>
                          <li>Front-end Development</li>
                          <li>Copywriting</li>
                          <li>Shopify Development</li>
                        </ul>
                        <h2>Visual Studio</h2>
                        <p>Just like other pseudo-elements and pseudo-class selectors, :not() can be chained with other
                          pseudo-classes and pseudo-elements. For example, the following will add a “New!” word to list items
                          that do not have a .old class name, using the ::after pseudo-element:</p>
                        <img src="assets/imgs/blog/detail/3.jpg" alt="Code" />
                      </div>
                      <div className="blog__detail-tags">
                        <p className="sub-title-anim">tags: <Link href="tag.html">design</Link>, <Link href="tag.html">figma</Link>,
                          <Link href="tag.html">update</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Blog detail end   */}


              {/* Related blog start   */}
              <section className="blog__related blog__animation">
                <div className="container g-0 line pt-130 pb-140">
                  <span className="line-3"></span>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-title title-anim">Related Aricles</h2>
                      </div>
                    </div>
                  </div>

                  <div className="row reset-grid">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/blog-details">
                            <div className="img-box">
                              <img className="image-box__item" src="assets/imgs/blog/1.jpg" alt="Blog Thumbnail" />
                              <img className="image-box__item" src="assets/imgs/blog/1.jpg" alt="BLog Thumbnail" />
                            </div>
                          </Link>
                        </div>
                        <h4 className="blog__meta sub-title-anim"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                        <h5><Link href="/blog-details" className="blog__title sub-title-anim">Ways of lying to yourself about
                          your new
                          relationship.</Link></h5>
                        <Link href="/blog-details" className="blog__btn">Read More <span><i
                          className="fa-solid fa-arrow-right"></i></span></Link>
                      </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <article className="blog__item" data-speed="auto">
                        <div className="blog__img-wrapper">
                          <Link href="/blog-details">
                            <div className="img-box">
                              <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="Blog Thumbnail" />
                              <img className="image-box__item" src="assets/imgs/blog/2.jpg" alt="BLog Thumbnail" />
                            </div>
                          </Link>
                        </div>
                        <h4 className="blog__meta sub-title-anim"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                        <h5><Link href="/blog-details" className="blog__title sub-title-anim">How to manage a talented and
                          successful de sign
                          team</Link></h5>
                        <Link href="/blog-details" className="blog__btn">Read More <span><i
                          className="fa-solid fa-arrow-right"></i></span></Link>
                      </article>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <article className="blog__item" data-speed="auto">
                        <div className="blog__img-wrapper">
                          <Link href="/blog-details">
                            <div className="img-box">
                              <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="Blog Thumbnail" />
                              <img className="image-box__item" src="assets/imgs/blog/3.jpg" alt="BLog Thumbnail" />
                            </div>
                          </Link>
                        </div>
                        <h4 className="blog__meta sub-title-anim"><Link href="/category">UI Design</Link> . 02 May 2019</h4>
                        <h5><Link href="/blog-details" className="blog__title sub-title-anim">How to bring fold to your startup
                          company with
                          Axtra</Link></h5>
                        <Link href="/blog-details" className="blog__btn">Read More <span><i
                          className="fa-solid fa-arrow-right"></i></span></Link>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
              {/* Related blog end   */}
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

export default BlogDetails;