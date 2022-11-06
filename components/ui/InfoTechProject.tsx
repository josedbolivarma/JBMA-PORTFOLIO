import { RiRadioButtonFill } from 'react-icons/ri';

export const InfoTechProject = () => {
  return (
    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
    <div className='p-2'>
      <p className='text-center font-bold pb-2'>Technologies</p>
      <div className='grid grid-cols-3 md:grid-cols-1'>
        <p className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' /> React
        </p>
        <p className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' /> Tailwind
        </p>
        <p className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' /> Javascript
        </p>
        <p className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' /> Firebase
        </p>
        <p className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' /> Google API
        </p>
        <p className='text-gray-600 py-2 flex items-center'>
          <RiRadioButtonFill className='pr-1' /> Zillow API
        </p>
      </div>
    </div>
  </div>
  )
}
