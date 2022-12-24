import Link from "next/link";

export default function CtaArea() {
    return (
        <section className="cta__area">
            <div className="container line pb-110">
                <div className="line-3"></div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="cta__content">
                            <p className="cta__sub-title">Work with us</p>
                            <h2 className="cta__title title-anim">We would love to hear more about your project</h2>
                            <div id="btn_wrapper">
                                <Link href="/contact" className="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
                                    className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}