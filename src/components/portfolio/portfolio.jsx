import Head from 'next/head';
import React, { useState } from 'react';
import CtaArea from '../common/ctaArea';
import CursorAnimation from '../common/cursorAnimation';
import Footer from '../common/footer';
import GoTopButton from '../common/goTopButton';
import PageHelmet from '../common/helmet';
import Offcanvas from '../common/offcanvas';
import Placeholder from '../common/placeholder';
import ScrollSmoother from '../common/scrollSmoother';
import SwitcherArea from '../common/switcherArea';
import SwitcherAreaDark from '../common/switcherAreaDark';
import PortfolioArea from './portfolioArea';
import PortfolioHead from './portfolioHead';
import PortfolioTwoArea from './portfolioTwo/PortfolioTwoArea';
import PortfolioTwoHero from './portfolioTwo/portfolioTwoHero';

const PortfolioMain = ({ dark, number }) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    } 

    return (
        <>
            <Head>
                <PageHelmet title="Portfolio - Axtra" />
                
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
                            {number === 2 && <PortfolioTwoHero/>}
                            {/* Portfolio area start  */}
                         { number === 1 && <PortfolioArea />  }
                         { number === 2 && <PortfolioTwoArea />  }
                            {/* Portfolio area end  */}

                            {/* CTA area start   */}
                            <CtaArea />
                            {/* CTA area end   */}

                        </div>
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default PortfolioMain;