import { FC } from 'react';

interface Props {
  repository: string;
  host: string;
  overview: string;
}

export const OverviewProject:FC<Props> = ({ repository, host, overview }) => {
  return (
    <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            { overview }
          </p>
          <a
            href={repository}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href={host}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
  )
}
