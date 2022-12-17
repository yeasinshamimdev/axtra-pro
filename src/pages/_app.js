import Script from 'next/script'
import '../../styles/globals.css'
import '../../public/assets/css/all.min.css';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/locomotive-scroll.min.css'
import '../../public/assets/css/master.css'
import '../../public/assets/css/meanmenu.min.css'
import '../../public/assets/css/progressbar.css'
import '../../public/assets/css/swiper-bundle.min.css'
import '../../public/style.css'

function MyApp({ Component, pageProps }) {

  return <>
    <Script type="text/javascript" src="assets/js/jquery-3.6.0.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/bootstrap.bundle.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/swiper-bundle.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/counter.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/gsap.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/ScrollTrigger.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/ScrollToPlugin.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/ScrollSmoother.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/SplitText.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/chroma.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/jquery.meanmenu.min.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/main.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/progressbar.js" strategy='afterInteractive' />
    <Script type="text/javascript" src="assets/js/TweenMax.min.js" strategy='afterInteractive' />
    <Component {...pageProps} />
  </>
}

export default MyApp