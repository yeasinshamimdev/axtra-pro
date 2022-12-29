import Head from 'next/head';
import React, { useState } from 'react';
import CtaArea from '../../components/common/ctaArea';
import CursorAnimation from '../../components/common/cursorAnimation';
import Footer from '../../components/common/footer';
import GoTopButton from '../../components/common/goTopButton';
import Offcanvas from '../../components/common/offcanvas';
import Placeholder from '../../components/common/placeholder';
import ScrollSmoother from '../../components/common/scrollSmoother';
import SwitcherArea from '../../components/common/switcherArea';
import SwitcherAreaDark from '../../components/common/switcherAreaDark'; 
import PortfolioDetailsArea from '../../components/portfolio/portfolioDetailsArea';
import PortfolioHead from '../../components/portfolio/portfolioHead';

const Portfolio = ({dark}) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    }
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />
                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                <title>Portfolio - Axtra</title>
                {
                    dark ?
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
            <main className={dark && stayDark && "dark"}>
                {/* Cursor Animation  */}
                <CursorAnimation />
                {/* Preloader  */}
                <Placeholder />

                {/* Switcher Area Start  */}
                {dark ? <SwitcherAreaDark handleDark={handleDark} /> : <SwitcherArea />}
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <ScrollSmoother />

                {/* Go Top Button  */}
                <GoTopButton />

                {/* Header area start  */}
                <PortfolioHead />
                {/* Header area end  */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <div>
                            {/* Portfolio area start  */}
                            <PortfolioDetailsArea />
                            {/* Portfolio area end  */} 
                        </div>
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;