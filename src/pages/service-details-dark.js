import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/common/ctaArea";
import Footer from "../components/common/footer";
import OffcanvasDark from "../components/common/offcanvasDark";
import SwitcherAreaDark from "../components/common/switcherAreaDark";

export default function ServiceDetailsDark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Service Details - Axtra</title>

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

                            {/* Development area start  */}
                            <section className="development__area">
                                <div className="container g-0 line pt-130 pb-150">
                                    <div className="line-3"></div>
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title animation__char_come">Web and mobile  development</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div className="development__wrapper">
                                                <div className="development__content">
                                                    <p>Every decision we make needs to answer the million-dollar question: how will this benefit our partner’s goal best? We work to develop solutions</p>
                                                    <p>We like to be different, in the same way that every  mission is different. Every project is an opportunity to create result that will help you</p>
                                                </div>
                                                <ul>
                                                    <li>+ API Development</li>
                                                    <li>+ WordPress</li>
                                                    <li>+ Cloud Migration</li>
                                                    <li>+ Front End Development</li>
                                                    <li>+ JavaScript</li>
                                                    <li>+ Fluter Framework</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                            <div className="development__img">
                                                <img src="assets/imgs/thumb/dev-1.jpg" alt="Development Image" data-speed="auto" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="development__img">
                                                <img src="assets/imgs/thumb/dev-2.jpg" alt="Development Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Development area end  */}


                            {/* Workflow area start  */}
                            <section className="workflow__area-6">
                                <div className="container g-0 line pb-130">
                                    <div className="line-3"></div>
                                    <div className="workflow__wrapper-6 ">
                                        <div className="row">
                                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                                <div className="workflow__slide-6">
                                                    <h6 className="workflow__title-6">Planning and <br />sketching</h6>
                                                    <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                                <div className="workflow__slide-6">
                                                    <h6 className="workflow__title-6">Team <br />working</h6>
                                                    <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                                <div className="workflow__slide-6">
                                                    <h6 className="workflow__title-6">Flowchart and <br />wireframe</h6>
                                                    <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                                <div className="workflow__slide-6">
                                                    <h6 className="workflow__title-6">User experience <br />Testing</h6>
                                                    <p>Modern and unique design practically point of view, it risks not meeting the huge expectations
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Workflow area end  */}

                            {/* Service detail area start  */}
                            <section className="service__detail">
                                <div className="container g-0 line pb-140">
                                    <div className="line-3"></div>
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title title-anim">We replace unreliable wirefreme and expensive agencies for one of the best organized layer.</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                                            <div className="service__detail-circle">
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
                                            <div className="service__detail-img">
                                                <img src="assets/imgs/thumb/service-detail.png" alt="Service detail image" />
                                                <img src="assets/imgs/icon/shape-6.png" alt="Service shape image" className="sd-shape" />
                                            </div>
                                            <div className="service__detail-content ">
                                                <p>Receive your design within a few business days, and be updated on the process. Everything you need for a digitally driven brand. Defined proposition. Conceptual realisation. Logo, type, look, feel, tone, movement, content - we have got it covered.</p>
                                                <p>Getting your brand message out there. We create dynamic campaign creative that engages audiences, wherever they are most talented. Bring your brand to life, communicate your value proposition with agile setup across creativity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Service detail area end  */}

                            {/* FAQ area start  */}
                            <section className="faq__area">
                                <div className="container g-0 line pb-140">
                                    <div className="line-3"></div>
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="faq__img">
                                                <img src="assets/imgs/thumb/faq.jpg" alt="FAQ Image" data-speed="auto" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="faq__content">
                                                <h2 className="faq__title title-anim">Product making for friendly users</h2>

                                                <div className="faq__list ">
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
                                                                    <p>Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of  iteration and prototyping design interfaces that bring joy to people</p>
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
                                                                        classes
                                                                        control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                                        You can
                                                                        modify any of this with custom CSS or overriding our default variables.</p>
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
                                                                    <p>Our design services starts and ends with  a best-in-class experience strategy that builds brands. Through a process of  iteration and prototyping design interfaces that bring joy to people</p>
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
                                                                    <p>Our design services starts and ends with a best-in-class experience strategy that  builds brands. Through a process of  iteration and prototyping design interfaces that bring joy to people</p>
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
                                                                    <p>Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design  interfaces that bring joy to people</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* FAQ area end  */}

                            {/* CTA area start  */}
                            <CtaArea />
                            {/* CTA area end  */}

                        </main>

                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div>

            </main>
        </div>
    )
}