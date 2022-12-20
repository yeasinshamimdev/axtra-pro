import Link from "next/link";

export default function CtaArea() {
    return (
        <section class="cta__area">
            <div class="container line pb-110">
                <div class="line-3"></div>
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="cta__content">
                            <p class="cta__sub-title">Work with us</p>
                            <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                            <div id="btn_wrapper">
                                <Link href="/contact" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
                                    class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}