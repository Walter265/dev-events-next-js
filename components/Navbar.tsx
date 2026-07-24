import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/public" className="logo">
                    <Image src="/icons/logo.png" alt="logo" width="24" height="24" />

                    <p>DataSURE</p>
                </Link>
                <ul>
                    <Link href="/public">Home</Link>
                    <Link href="/public">Events</Link>
                    <Link href="/public">Create</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
