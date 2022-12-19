import Image from "next/image";
import Link from "next/link";

export default function HomeFooter() {
    return (
        <>
            {/* Footer area start  */}
            <footer class="footer__area-3">
                <div class="footer__top-3">
                    <div class="footer__top-wrapper-3">
                        <div class="footer__logo-3 pt-120">
                            <img src="/assets/imgs/logo/site-logo-white-2.png" alt="Footer Logo" />
                            <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid
                                them.</p>
                        </div>
                        <div class="footer__social-3">
                            <ul>
                                <li><Link href="#">facebook</Link></li>
                                <li><Link href="#">Twitter</Link></li>
                                <li><Link href="#">Linkedin</Link></li>
                                <li><Link href="#">Instagram</Link></li>
                            </ul>
                        </div>
                        <div class="footer__contact-3">
                            <a class="end" href="/contact">Let’s talk</a>
                        </div>
                    </div>
                </div>

                <div class="footer__btm-3">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xxl-4 col-xl-4 col-lg-4">
                                <div class="footer__copyright-3">
                                    <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank" rel="noreferrer">Wealcoder</Link>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xxl-8 col-xl-8 col-lg-8">
                                <div class="footer__nav-2">
                                    <ul class="footer-menu-2 menu-anim">
                                        <li><Link href="/about">about us</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                        <li><Link href="/career">Career</Link></li>
                                        <li><Link href="/faq">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer area end */}
        </>
    )
}