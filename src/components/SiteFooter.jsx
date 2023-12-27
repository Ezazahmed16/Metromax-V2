
import Image from "next/image"
import Link from "next/link"

const SiteFooter = () => {
    return (
        <div>
            <div className="block">
                <footer style={{ backgroundColor: '#8C2E47' }} className="footer p-10 text-white justify-around items-start">
                    <nav>
                        <Image src="/logo.png" alt="Metromax Logo" width={180} height={180} />
                    </nav>
                    <nav className="">
                        <header className="footer-title">Company</header>
                        <Link href='' className="link link-hover">About us</Link>
                        <Link href='' className="link link-hover">Contact</Link>
                        <Link href='' className="link link-hover">Gallery</Link>
                    </nav>
                    {/* <nav>
                        <header className="footer-title">Legal</header>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </nav> */}
                    <form>
                        <header className="footer-title">Newsletter</header>
                        <fieldset className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item " />
                                <button className="btn btn-accent join-item ">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    )
}

export default SiteFooter