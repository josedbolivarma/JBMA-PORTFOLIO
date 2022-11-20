import { FC } from 'react';
import Image from 'next/image';

interface Props {
    img: string;
    title: string;
    link: string;
}

export const CardCertification: FC<Props> = ({ img, title, link }) => {

  return (
    <div className="w-full h-[300px] relative">
        <a href={ link }
           target="_blank"
           rel="noopener noreferrer">
        <Image
        src={ img }
        alt={ title }
        layout="fill"
        className="group-hover:opacity-50 transition-all hover:scale-110 cursor-pointer"
      />
        </a>
        </div>
  )
}
