import Head from 'next/head';
import React, { useState } from 'react';
import CtaArea from '../../common/ctaArea';
import CursorAnimation from '../../common/cursorAnimation';
import Footer from '../../common/footer';
import GoTopButton from '../../common/goTopButton';
import Offcanvas from '../../common/offcanvas';
import Placeholder from '../../common/placeholder';
import ScrollSmoother from '../../common/scrollSmoother';
import SwitcherArea from '../../common/switcherArea';
import SwitcherAreaDark from '../../common/switcherAreaDark';
import PortfolioHead from '../portfolioHead';
import PortfolioTwoArea from './PortfolioTwoArea';
import PortfolioTwoHero from './portfolioTwoHero';

const PortfolioTwo = ({dark}) => {
    // const [stayDark, setStayDark] = useState(true)
    // const handleDark = (prop) => {
    //     setStayDark(prop)
    // } 
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>Portfolio V.2 - Axtra</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />

                {/* Scripts */}
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
            <main className={dark && "dark"}>
                {/* Cursor Animation  */}
                <CursorAnimation />
                {/* Preloader  */}
                <Placeholder />

                {/* Switcher Area Start  */}
                 <SwitcherArea />
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
                        <main>
                            {/* Portfolio two hero start */}
                            <PortfolioTwoHero />
                            {/* Portfolio two hero end */}

                            {/* Portfolio area start  */}
                            <PortfolioTwoArea />
                            {/* Portfolio area end  */}

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

        </>
    );
};

export default PortfolioTwo;