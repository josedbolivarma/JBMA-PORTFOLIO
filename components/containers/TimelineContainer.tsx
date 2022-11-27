import { Timeline } from "../ui";
import { MdOutlineWork } from 'react-icons/md';
import { FaAward, FaGraduationCap } from 'react-icons/fa';

export const TimelineContainer = () => {
  return (
    <div className="antialiased bg-gray-100 border-b-8 border-b-white">
      <div className="border-b-white border-b-8 py-8 text-center">
        <h2 className="text-gray-900">QUALIFICATION</h2>
        <p className="text-gray-600">My personal journey</p>
        <div className="w-full flex justify-center items-center gap-2 sm:gap-8 mt-8">
          <div className="flex items-center text-gray-600 gap-2 cursor-pointer hover:text-gray-400">
        <FaGraduationCap size={ 40 } />
          <h3 className="text-1xl sm:text-2xl">Education</h3>
          </div>

          <div className="flex items-center text-gray-600 gap-2 cursor-pointer hover:text-gray-400">
        <MdOutlineWork size={ 40 } />
          <h3 className="text-1xl sm:text-2xl">Work</h3>
          </div>

          <div className="flex items-center text-gray-600 gap-2 cursor-pointer hover:text-gray-400">
        <FaAward size={ 40 } />
          <h3 className="text-1xl sm:text-2xl">Awards</h3>
          </div>
      </div>
      </div>
        <Timeline />
    </div>
  )
}
