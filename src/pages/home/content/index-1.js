import Head from "next/head";
import Link from "next/link";
import HomeFooter from "../../../components/home/indexFooter";
import HeroArea from "../../../components/home/heroArea";
import BrandArea from "../../../components/home/brandArea";
import HomeAboutArea from "../../../components/home/homeAboutArea";
import HomeServiceArea from "../../../components/home/homeServiceArea";
import HomePortfolioArea from "../../../components/home/homePortfolioArea";
import HomeTestimonialArea from "../../../components/home/homeTestimonialArea";
import PriceArea from "../../../components/home/priceArea";
import WorkflowArea from "../../../components/home/workflowArea";
import HomeBlog from "../../../components/home/homeBlog";
import SwitcherArea from "../../../components/common/switcherArea";
import Offcanvas from "../../../components/common/offcanvas";
import GoTopButton from "../../../components/common/goTopButton";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import IndexHeader from "../../../components/home/indexHeader";
import Placeholder from "../../../components/common/placeholder";
import CursorAnimation from "../../../components/common/cursorAnimation";
import Script from "next/script";

export default function Index1({ mode }) {

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />
                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                <title>Home - Digital Marketing</title>
            </Head>
            <main className={mode === "dark" ? "dark" : ""}>
                {/* Cursor Animation */}
                <CursorAnimation />

                {/* Preloader */}
                <Placeholder />

                {/* Switcher Area Start */}
                <SwitcherArea mode={mode} />
                {/* Switcher Area End */}

                {/* Scroll Smoother */}
                <ScrollSmoother />

                {/* Go Top Button */}
                <GoTopButton />

                {/* Header area start */}
                <IndexHeader />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start */}
                            <HeroArea />
                            {/* Hero area start */}

                            {/* Brand area start */}
                            <BrandArea />
                            {/* Brand area end */}

                            {/* About area start */}
                            <HomeAboutArea />
                            {/* About area end */}

                            {/* Service area start */}
                            <HomeServiceArea />
                            {/* Service area end */}

                            {/* Portfolio area start */}
                            <HomePortfolioArea />
                            {/* Portfolio area end */}

                            {/* Testimonial area start */}
                            <HomeTestimonialArea />
                            {/* Testimonial area end */}

                            {/* Workflow area start */}
                            <WorkflowArea />
                            {/* Workflow area end */}

                            {/* Price area start */}
                            <PriceArea />
                            {/* Price area end */}

                            {/* Blog area start */}
                            <HomeBlog />
                            {/* Blog area end */}

                        </main>
                        <HomeFooter />
                    </div>
                </div>
            </main >

            <>
                <Script src="assets/js/jquery-3.6.0.min.js" strategy='afterInteractive' />
                {/* <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"  ></script> */}

                <Script src="assets/js/bootstrap.bundle.min.js" strategy='afterInteractive' />
                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"  ></script> */}

                <Script src="assets/js/swiper-bundle.min.js" strategy='afterInteractive' />
                {/* < src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"  ></script> */}

                <Script src="assets/js/counter.js" strategy='afterInteractive' />

                <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" />
                {/* <script type="text/javascript" src="assets/js/gsap.min.js"  /> */}

                {/* <Script src="assets/js/ScrollTrigger.min.js" strategy='afterInteractive' /> */}
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" strategy="afterInteractive" />

                {/* <Script src="assets/js/ScrollToPlugin.min.js" strategy='afterInteractive' /> */}
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js" strategy="afterInteractive" />

                <Script src="assets/js/ScrollSmoother.min.js" strategy='afterInteractive' />
                <Script src="assets/js/SplitText.min.js" strategy='afterInteractive' />
                <Script src="assets/js/chroma.min.js" strategy='afterInteractive' />
                <Script src="assets/js/jquery.meanmenu.min.js" strategy='afterInteractive' />
                <Script src="assets/js/main.js" strategy='afterInteractive' />
                <Script src="assets/js/progressbar.js" strategy='afterInteractive' />
                <Script src="assets/js/TweenMax.min.js" strategy='afterInteractive' />

            </>
        </div >
    )
}