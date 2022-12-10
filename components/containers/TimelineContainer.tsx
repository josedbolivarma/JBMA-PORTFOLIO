import { useState } from 'react';
import { Timeline } from "../ui";
import { MdOutlineWork } from 'react-icons/md';
import { FaAward, FaGraduationCap } from 'react-icons/fa';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { dataEducations, dataWorks, dataAwards } from '../../data/timeline';


export const TimelineContainer = () => {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="antialiased bg-gray-100 border-b-8 border-b-white">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="border-b-white border-b-8 py-8 text-center">
        <h2 className="text-gray-900">QUALIFICATION</h2>
        <p className="text-gray-600">My personal journey</p>
        <div className="w-full flex justify-center items-center gap-2 sm:gap-8 mt-8">
        <TabList>
      <Tab>
      <div className="flex items-center text-gray-600 gap-2 cursor-pointer hover:text-gray-400">
        <FaGraduationCap size={ 40 } />
          <h3 className="text-1xl sm:text-2xl">Education</h3>
          </div>
      </Tab>
      <Tab>
      <div className="flex items-center text-gray-600 gap-2 cursor-pointer hover:text-gray-400">
        <MdOutlineWork size={ 40 } />
          <h3 className="text-1xl sm:text-2xl">Work</h3>
          </div>
      </Tab>
      <Tab>
      <div className="flex items-center text-gray-600 gap-2 cursor-pointer hover:text-gray-400">
        <FaAward size={ 40 } />
          <h3 className="text-1xl sm:text-2xl">Awards</h3>
          </div>
      </Tab>
    </TabList>

      </div>
      </div>
      <TabPanel>
        <Timeline data={dataEducations} />
      </TabPanel>
      <TabPanel>
        <Timeline data={dataWorks} />
      </TabPanel>
      <TabPanel>
        <Timeline data={dataAwards} />
      </TabPanel>

    </Tabs>
    </div>
  )
}
