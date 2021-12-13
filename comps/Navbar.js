import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/logo.png" height={77} width={80} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/numbers"><a>Telephone Listing</a></Link>
        </nav>
    );
}
 
export default Navbar;