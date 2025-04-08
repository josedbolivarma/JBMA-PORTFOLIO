import { Accordion } from "../ui"

import { BsFillHddNetworkFill, BsCodeSlash } from 'react-icons/bs';
import { FaTeamspeak } from 'react-icons/fa';
import { GiRobotGolem } from 'react-icons/gi';

// powerbi
import { PowerBIEmbed } from 'powerbi-client-react';
import Image from "next/image";


const data = [
  {
    Icon: <BsCodeSlash size={ 40 }/>,
    title: 'Frontend Developer',
    date: '3',
    skills: [
      {
        name: 'HTML',
        percent: 90
    },
      {
        name: 'CSS',
        percent: 90
    },
        {
            name: 'JavaScript - ECMAScript',
            percent: 80
        },
        {
            name: 'TypeScript',
            percent: 70
        },
        {
            name: 'React.js',
            percent: 80
        },
        {
            name: 'Angular',
            percent: 70
        },
        {
            name: 'Next.js',
            percent: 80
        }
    ]
},
  {
    Icon: <BsFillHddNetworkFill size={ 40 }/>,
    title: 'Backend Developer',
    date: '2',
    skills: [
        {
            name: 'Node.js',
            percent: 80
        },
        {
            name: 'Express.js',
            percent: 70
        },
        {
          name: 'Python',
          percent: 40
        },
        {
            name: 'Mongodb',
            percent: 70
        },
        {
            name: 'MySQL',
            percent: 50
        },
        {
            name: 'Firebase',
            percent: 60
        }
    ]
},
{
  Icon: <GiRobotGolem size={ 40 }/>,
  title: 'Devops',
  date: '2',
  skills: [
      {
          name: 'Automation testing',
          percent: 80
      },
      {
          name: 'Jest',
          percent: 70
      },
      {
        name: 'React testing library',
        percent: 70
      },
      {
          name: 'Cypress',
          percent: 40
      },
      {
          name: 'TDD',
          percent: 50
      },
  ]
},
{
  Icon: <FaTeamspeak size={ 40 }/>,
  title: 'Soft Skills',
  date: '4',
  skills: [
      {
          name: 'Teamwork',
          percent: 90
      },
      {
          name: 'Leadership',
          percent: 70
      },
      {
        name: 'Conflict resolution',
        percent: 80
      },
      {
          name: 'Assertive communication',
          percent: 80
      },
      {
        name: 'Active learning',
        percent: 80
      },
      {
        name: 'Good practices',
        percent: 80
      },
  ]
}
];


export const Skills = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
        <div className="mb-8 text-center">
          <h2 className="text-white mb-3">SKILLS</h2>
          <h3 className="text-gray-300 text-lg">My technical level</h3>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:w-[840px] gap-10 md:gap-10">
          {
            data.map((skill) => (
              <Accordion 
                key={ skill.title }
                Icon={ skill.Icon }
                date={ skill.date }
                title={ skill.title }
                skills={ skill.skills }
              /> 
            ))
          }
          
        </div>
        
    </div>
  )
}
