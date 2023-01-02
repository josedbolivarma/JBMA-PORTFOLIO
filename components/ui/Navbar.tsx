import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import navLogo from '../../public/jairLogo.png';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GiCrownedSkull } from 'react-icons/gi';

export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('transparent');
    const [linkColor, setLinkColor] = useState('#1f2937');
    // const [position, setPosition] = useState('fixed')
    // const router = useRouter();
  
    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
          setNavBg('#000');
        } else {
          setNavBg('transparent')
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <nav className={`fixed w-full h-20 ${ shadow? 'shadow-xl' : '' } z-[100] ease-in-out duration-300 px-3`} style={{
      backgroundColor: navBg
    }}>
        <div className='flex justify-between items-center w-full h-full px-3 2xl:px-16'>
             <Link className='flex items-center gap-2' href='/'>
                {/* <Image 
                    src={ navLogo }
                    alt='Navbar Logo'
                    width={110}
                    height={100}
                    className='cursor-pointer'
                /> */}
                <div>
                <GiCrownedSkull size={ 40 }/>
                JAIR
                </div>
                
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
                        <Link href='/#certifications'>
                        Certifications
                        </Link>
                    </li>
                </ul>
                {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
            </div>
        </div>

        
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#111] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between text-white'>
              <Link href='/'>
                  <Image
                    src={navLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-white'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase text-white'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href="/RESUME_JOSE_DAVID_BOLIVAR_MAYORA.pdf"
                 target="_blank"
                 rel="noopener noreferrer">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#certifications'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Certifications
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/josedbolivarma'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
        </div>
        </div>
        </div>
    </nav>
  )
}
