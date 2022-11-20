import Image from "next/image"

export const ContactBanner = () => {
  return (
    <div className="w-[100%] h-96 relative mt-24">
        <Image 
      className='w-[100%] h-96 object-cover -z-10'
      layout="fill"
      src='https://res.cloudinary.com/duzncuogi/image/upload/v1668954157/my-portfolio/banners/old_phone2_zttu8f.jpg'
      alt='Contact'
      />
      <div className="absolute top-0 left-0 w-full h-96 bg-black/10 z-10" />
      
    </div>
  )
}
