import Head from 'next/head'
import CursorAnimation from '../components/common/cursorAnimation'
import GoTopButton from '../components/common/goTopButton'
import Offcanvas from '../components/common/offcanvas'
import Placeholder from '../components/common/placeholder'
import ScrollSmoother from '../components/common/scrollSmoother'
import SwitcherArea from '../components/common/switcherArea'
import BrandArea from '../components/home/brandArea'
import HeroArea from '../components/home/heroArea'
import HomeAboutArea from '../components/home/homeAboutArea'
import HomeBlog from '../components/home/homeBlog'
import HomePortfolioArea from '../components/home/homePortfolioArea'
import HomeServiceArea from '../components/home/homeServiceArea'
import HomeTestimonialArea from '../components/home/homeTestimonialArea'
import HomeFooter from '../components/home/indexFooter'
import IndexHeader from '../components/home/indexHeader'
import PriceArea from '../components/home/priceArea'
import WorkflowArea from '../components/home/workflowArea'

export default function Home() {

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
        <script type="text/javascript" src="assets/js/jquery-3.6.0.min.js" async />
        {/* <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous" async ></script> */}

        <script type="text/javascript" src="assets/js/bootstrap.bundle.min.js" async />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous" async ></script> */}

        <script type="text/javascript" src="assets/js/swiper-bundle.min.js" async />
        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" async ></script> */}

        <script type="text/javascript" src="assets/js/counter.js" async />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" async></script>
        {/* <script type="text/javascript" src="assets/js/gsap.min.js" async /> */}

        {/* <script type="text/javascript" src="assets/js/ScrollTrigger.min.js" async /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" async></script>

        {/* <script type="text/javascript" src="assets/js/ScrollToPlugin.min.js" async /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js" async></script>

        <script type="text/javascript" src="assets/js/ScrollSmoother.min.js" async />
        <script type="text/javascript" src="assets/js/SplitText.min.js" async />
        <script type="text/javascript" src="assets/js/chroma.min.js" async />
        <script type="text/javascript" src="assets/js/jquery.meanmenu.min.js" async />
        <script type="text/javascript" src="assets/js/main.js" async />
        <script type="text/javascript" src="assets/js/progressbar.js" async />
        <script type="text/javascript" src="assets/js/TweenMax.min.js" async />
      </Head>
      <main>
        {/* Cursor Animation */}
        <CursorAnimation />

        {/* Preloader */}
        <Placeholder />

        {/* Switcher Area Start */}
        <SwitcherArea mode="" />
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
    </div >
  )
}
