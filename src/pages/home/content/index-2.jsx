import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../../components/common/cursorAnimation";
import GoTopButton from "../../../components/common/goTopButton";
import HomeCtaArea from "../../../components/common/homeCtaArea";
import Offcanvas from "../../../components/common/offcanvas";
import Placeholder from "../../../components/common/placeholder";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import SwitcherArea from "../../../components/common/switcherArea";
import AwardArea from "../../../components/home/awardArea";
import FeatureArea from "../../../components/home/featureArea";
import HeaderArea2 from "../../../components/home/headerArea2";
import HeroArea2 from "../../../components/home/heroArea2";
import HomeAboutArea2 from "../../../components/home/homeAboutArea2";
import HomeBlogArea2 from "../../../components/home/homeBlogArea2";
import HomePortfolioArea2 from "../../../components/home/homePortfolioArea2";
import HomeServiceArea2 from "../../../components/home/homeServiceArea2";
import HomeFooter2 from "../../../components/home/indexFooter2";
import RollArea2 from "../../../components/home/rollArea2";
import RollArea3 from "../../../components/home/rollArea3";

export default function Index2({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />
                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                <title>Home - Digital Marketing</title>
                {
                    bgMode === "dark" ?
                        <>
                            <script src="assets/js/jquery-3.6.0.min.js" async />
                            <script src="assets/js/bootstrap.bundle.min.js" async />
                            <script src="assets/js/swiper-bundle.min.js" async />
                            <script src="assets/js/counter.js" async />
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" async />
                            <script type="text/javascript" src="assets/js/gsap.min.js" async />
                            <script src="assets/js/ScrollTrigger.min.js" async />
                            <script src="assets/js/ScrollToPlugin.min.js" async />
                            <script src="assets/js/ScrollSmoother.min.js" async />
                            <script src="assets/js/SplitText.min.js" async />
                            <script src="assets/js/chroma.min.js" async />
                            <script src="assets/js/jquery.meanmenu.min.js" async />
                            <script src="assets/js/main.js" async />
                            <script src="assets/js/progressbar.js" async />
                            <script src="assets/js/TweenMax.min.js" async />
                        </> :
                        <>
                            <script src="assets/js/jquery-3.6.0.min.js" async />
                            <script src="assets/js/bootstrap.bundle.min.js" async />
                            <script src="assets/js/swiper-bundle.min.js" async />
                            <script src="assets/js/counter.js" async />
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" async />
                            <script type="text/javascript" src="assets/js/gsap.min.js" async />
                            <script src="assets/js/ScrollTrigger.min.js" async />
                            <script src="assets/js/ScrollToPlugin.min.js" async />
                            <script src="assets/js/ScrollSmoother.min.js" async />
                            <script src="assets/js/SplitText.min.js" async />
                            <script src="assets/js/chroma.min.js" async />
                            <script src="assets/js/jquery.meanmenu.min.js" async />
                            <script src="assets/js/main.js" async />
                            <script src="assets/js/progressbar.js" async />
                            <script src="assets/js/TweenMax.min.js" async />
                        </>
                }
            </Head>
            <main className={bgMode === "dark" ? "dark" : ""}>
                {/* Cursor Animation */}
                <CursorAnimation />

                {/* Preloader */}
                <Placeholder />

                {/* Switcher Area Start */}
                <SwitcherArea setBgMode={setBgMode} bgMode={bgMode} />
                {/* Switcher Area End */}

                {/* Scroll Smoother */}
                <ScrollSmoother />

                {/* Go Top Button */}
                <GoTopButton />

                {/* Header area start */}
                <HeaderArea2 />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start */}
                            <HeroArea2 />
                            {/* Hero area start */}

                            {/* Features area start */}
                            <FeatureArea />
                            {/* Features area end */}

                            {/* Roll area start */}
                            <RollArea2 />
                            {/* Roll area end */}

                            {/* Roll area start */}
                            <RollArea3 />
                            {/* Roll area end */}

                            {/* Portfolio area start */}
                            <HomePortfolioArea2 />
                            {/* Portfolio area end */}

                            {/* About area start */}
                            <HomeAboutArea2 />
                            {/* About area end */}

                            {/* Service area start */}
                            <HomeServiceArea2 />
                            {/* Service area end */}

                            {/* Award area start */}
                            <AwardArea />
                            {/* Award area end */}

                            {/* CTA area start */}
                            <HomeCtaArea />
                            {/* CTA area end */}

                            {/* Blog area start */}
                            <HomeBlogArea2 />
                            {/* Blog area end */}

                        </main>
                        <HomeFooter2 />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}