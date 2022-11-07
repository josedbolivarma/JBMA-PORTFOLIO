import { FC } from 'react';
import Image from 'next/image';

interface Props {
    img: string;
    title: string;
    desc: string;
}

export const BannerProject: FC<Props> = ({ img, title, desc }) => {
  return (
    <div className='relative w-full h-[60vh]'>
        <div className='absolute top-0 left-0 w-full h-[60vh] bg-black/70 z-10' />
            <Image
                src={img}
                alt={title}
                layout='fill'
                className='object-cover lg:object-fill'
            />
             <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8'>
          <h2 className='py-2'>{ title }</h2>
          <h3>{desc}</h3>
        </div>
        </div>
  )
}
