import { TfiLinkedin } from 'react-icons/tfi';
import { FiGithub } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 py-6 pl-4">
        <div className='w-full flex flex-col gap-10 justify-center items-start sm:flex-row'>
        <div>
          <h3 className='text-3xl font-bold'>Jose Bolivar</h3>
          <p>Software developer</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <a className='text-lg' href="#">Services</a>
          <a className='text-lg' href="#">Projects</a>
          <a className='text-lg' href="#">Contact me</a>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/">
          <TfiLinkedin size={ 30 } />
          </a>
          <a href="https://github.com/josedbolivarma">
          <FiGithub size={ 30 } />
          </a>
          <a className='shadow-lg cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.instagram.com/josedbolivarma81/">
          <BsInstagram size={ 30 } />
          </a>
        </div>

        
        </div>

        <div>
          <p className='text-sm text-gray-500 text-center mt-6'>jbma | All right reserved</p>
        </div>

    </footer>
  )
}
