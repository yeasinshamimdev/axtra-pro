import Head from "next/head";
import Link from "next/link";
import CtaArea from "../components/common/ctaArea";
import Footer from "../components/common/footer";
import Offcanvas from "../components/common/offcanvas";
import SwitcherArea from "../components/common/switcherArea";

export default function Faq() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>FAQs - Axtra</title>

                {/* Fav Icon */}
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
                {/* Cursor Animation */}
                <div className="cursor1"></div>
                <div className="cursor2"></div>


                {/* Preloader */}
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



                {/* Switcher Area Start */}
                <SwitcherArea />
                {/* Switcher Area End */}



                {/* Scroll Smoother */}
                <div className="has-smooth" id="has_smooth"></div>


                {/* Go Top Button */}
                <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>



                {/* Header area start */}
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
                {/* Header area end */}


                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}



                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>

                            {/* FAQ area start */}
                            <section className="faq__area-6">
                                <div className="container g-0 line pt-130 pb-140">
                                    <div className="line-3"></div>

                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="sec-title-wrapper">
                                                <h2 className="sec-title-2 animation__char_come">FAQ</h2>
                                                <p className="">Frequently asked question (FAQ) <br /> pages to find answars.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="faq__list-6">
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Design should enrich our day
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
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

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingTwo">
                                                            <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Bring their individual experience and creative
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
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

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingThree">
                                                            <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Human centred design to challenges
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
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

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingFour">
                                                            <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Design should enrich our day
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
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

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="headingFive">
                                                            <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Developing core web applications
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
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

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* FAQ area end  */}


                            {/* CTA area start */}
                            <CtaArea />
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