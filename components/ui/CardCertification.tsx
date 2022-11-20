import Image from 'next/image'
import { FC } from 'react';

interface Props {
    img: string;
    title: string;
}

export const CardCertification: FC<Props> = ({ img, title }) => {
  return (
    <div className="w-full h-[300px] relative">
        <Image
        src={ img }
        alt={ title }
        layout="fill"
        className="group-hover:opacity-50"
      />
        </div>
  )
}
