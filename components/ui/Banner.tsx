
export const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] mb-8">
        <video className="w-full h-full object-cover" autoPlay loop playsInline muted src='https://res.cloudinary.com/duzncuogi/video/upload/v1667737893/my-portfolio/tinta_bfgiei.mp4'></video>
        <div className="absolute top-[50%] left-[5%]">
            <h2 className="text-gray-300 text-5xl pb-4 flex flex-col gap-4"><i>MY NAME IS</i> <span><i>JOSÉ BOLÍVAR</i></span></h2>
            <h4 className="font-bold text-black text-2xl"><b>PROJECTS <span className="font-thin text-gray-300 text-6xl">&</span> PORTFOLIO</b></h4>
        </div>
    </div>
  )
}
