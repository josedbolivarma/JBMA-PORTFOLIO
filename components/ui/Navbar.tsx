import Image from "next/image";
import Link from "next/link";
import navLogo from '../../public/jairLogo.png';

export const Navbar = () => {
  return (
    <nav className='fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-transparent'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
             <Link className='flex items-center gap-2' href='/'>
                <Image 
                    src={ navLogo }
                    alt='Navbar Logo'
                    width={110}
                    height={100}
                    className='cursor-pointer'
                />
                <h2 className="font-bold text-5xl tracking-tighter">
                    <span className="text-gray-900 text-7xl tracking-tighter" style={{ letterSpacing: '-9px'}}>J</span>
                    BMA
                </h2>
            </Link>

            <div>
                <ul className='hidden md:flex'>
                    <li className="ml-10 text-sm uppercase hover:border-b">
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="ml-10 text-sm uppercase hover:border-b">
                        <Link href='/#about'>
                            About
                        </Link>
                    </li>
                    <li className="ml-10 text-sm uppercase hover:border-b">
                        <Link href='/#projects'>
                            Projects
                        </Link>
                    </li>
                    <li className="ml-10 text-sm uppercase hover:border-b">
                        <Link href='/#contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
