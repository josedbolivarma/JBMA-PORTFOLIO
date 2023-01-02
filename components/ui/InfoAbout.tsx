import Link from "next/link";
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

export const InfoAbout = () => {
  return (
    <div className="w-full min-w-[40vw] h-full flex justify-center items-center bg-neutral-900 p-8 rounded">
        <div className="flex flex-col gap-2">
        <h2>ABOUT ME</h2>
        <p>
        👋🏽Welcome to my website, my name is José David Bolívar Mayora I am 20 years old and saw in the city of Bogota, ✌ I’m working on my english language skills and my knowledge in software architecture and IT project leader ♛.
        <br /><br />
            In my personal hobbies, I really enjoy working out at the gym and running. 💬 Ask me about anything, I am happy to help.

        </p>

        <div className="flex justify-start items-center gap-8 mt-6">
        <a
              href='https://github.com/josedbolivarma'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={30}/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={30}/>
              </div>
            </Link>
            <Link href='https://www.instagram.com/josedbolivarma81/'>
              <div className='rounded shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsInstagram size={30}/>
              </div>
            </Link>
            <Link href='https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/'>
              <div className='rounded shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsLinkedin size={30}/>
              </div>
            </Link>
        </div>
        </div>
    </div>
  )
}
