import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Offcanvas from "../components/offcanvas";
import OffcanvasDark from "../components/offcanvasDark";
import SwitcherAreaDark from "../components/switcherAreaDark";

export default function FaqDark() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>FAQs - Axtra</title>

                {/* Fav Icon  */}
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
                {/* Cursor Animation */}
                <div class="cursor1"></div>
                <div class="cursor2"></div>


                {/* Preloader */}
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

                {/* Switcher Area Start */}
                <SwitcherAreaDark />
                {/* Switcher Area End */}



                {/* Scroll Smoother */}
                <div class="has-smooth" id="has_smooth"></div>


                {/* Go Top Button */}
                <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


                {/* Header area start */}
                <header class="header__area">
                    <div class="header__inner">
                        <div class="header__logo">
                            <Link href="/index-dark">
                                <img class="logo-primary" src="assets/imgs/logo/site-logo-white.png" alt="Site Logo" />
                                <img class="logo-secondary" src="assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo" />
                            </Link>
                        </div>
                        <div class="header__nav-icon">
                            <button id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon" /></button>
                        </div>
                        <div class="header__support">
                            <p>Support center <Link href="tel:+9587325902">+9 587 325 902</Link></p>
                        </div>
                    </div>
                </header>
                {/* Header area end */}

                {/* Offcanvas area start */}
                <OffcanvasDark />
                {/* Offcanvas area end */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* FAQ area start */}
                            <section class="faq__area-6">
                                <div class="container g-0 line pt-130 pb-140">
                                    <div class="line-3"></div>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper">
                                                <h2 class="sec-title-2 animation__char_come">FAQ</h2>
                                                <p class="">Frequently asked question (FAQ) <br /> pages to find answars.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="faq__list-6">
                                                <div class="accordion" id="accordionExample">
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingOne">
                                                            <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Design should enrich our day
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                            data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                                <p>People know what an FAQ is, so make that your page title. Don’t overcomplicate things by
                                                                    calling it “Good to Know” or “More Info”. Sometimes people put the frequently asked
                                                                    questions section on their Contact page, but you can create your own page and put it right
                                                                    in your website navigation menu or website footer so it’s easy to find. Getting a straight,
                                                                    quick answer to your question is a relief. So keep answers to a short paragraph if you can,
                                                                    less than 100 words. Answer the entire question in the FAQ without linking away to another
                                                                    page</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingTwo">
                                                            <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Bring their individual experience and creative
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                            data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                                <p>This is the second items accordion body. It is hidden by default, until the
                                                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                                                    classes
                                                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You
                                                                    can
                                                                    modify any of this with custom CSS or overriding our default variables.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingThree">
                                                            <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
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
                                                            <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
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
                                                            <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
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
                                    </div>
                                </div>
                            </section>
                            {/* FAQ area end */}


                            {/* CTA area start */}
                            <section class="faq__btm">
                                <div class="container line pb-130">
                                    <div class="line-3"></div>
                                    <div class="row">
                                        <div class="col-xxl-12">
                                            <div class="sec-title-wrapper" data-speed="1" data-lag="0.2">
                                                <h2 class="sec-title title-anim">Still you have question?</h2>
                                                <p class="sub-title-anim">Well, we are packed, so no open vacancies now</p>
                                                <div id="btn_wrapper">
                                                    <Link href="/contact-dark" class="wc-btn-primary btn-hover btn-item"><span></span>Contact Us <i
                                                        class="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* CTA area end */}

                        </main>



                        {/* Footer area start */}
                        <Footer />
                        {/* Footer area end */}
                    </div>
                </div>
            </main>
        </div>
    )
}