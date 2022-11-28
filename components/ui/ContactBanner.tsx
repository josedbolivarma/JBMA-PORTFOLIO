import Image from "next/image"


{/* <Image 
      className='w-[100%] h-96 object-cover -z-10'
      layout="fill"
      src='https://res.cloudinary.com/duzncuogi/image/upload/v1668954157/my-portfolio/banners/old_phone2_zttu8f.jpg'
      alt='Contact'
      />
       */}
export const ContactBanner = () => {
  return (
    <div className="h-[100vh] relative w-full">
      <video autoPlay loop muted className="w-full h-full">
        <source 
        src="https://res.cloudinary.com/duzncuogi/video/upload/v1667737893/my-portfolio/tinta_bfgiei.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 bg-black h-full w-full text-white flex items-center justify-center mix-blend-multiply">
        <h2 className="font-bold text-5xl md:text-8xl lg:text-9xl text-center">I AM <br />SOFTWARE <br />DEVELOPER</h2>
      </div>
    </div>
  )
}
