import { CardProfile, InfoAbout } from "./"

export const About = () => {
  return (
    <div id="about" className="w-full h-full min-h-[100vh] flex flex-col lg:flex-row items-center justify-center gap-4 my-8">
      <CardProfile />
      <InfoAbout />
    </div>
  )
}