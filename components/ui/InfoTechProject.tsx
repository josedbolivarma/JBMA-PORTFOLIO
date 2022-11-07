import { FC } from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

interface Props {
  technologies: string[];
}

export const InfoTechProject:FC<Props> = ({ technologies }) => {
  return (
    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
    <div className='p-2'>
      <p className='text-center font-bold pb-2'>Technologies</p>
      <div className='grid grid-cols-3 md:grid-cols-1'>
        {
          technologies.map((item: string) => (
            <p key={ item } className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' />
            {item}
            </p>
          ))
        }
        
      </div>
    </div>
  </div>
  )
}
