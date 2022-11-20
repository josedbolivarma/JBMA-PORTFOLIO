import Image from 'next/image';
import profile from '../../public/profile.jpg';

export const CardProfile = () => {
  return (
    <div className="card-css w-full min-w-[35vw]">
        <div className="lines" />
        <div className="imgBx">
          <Image
            className="absolute z-10 w-[calc(100%-20px)] h-[calc(100%-20px)] top-[10px] left-[10px] grayscale"
            src={ profile }
            alt='Profile'
          />
        </div>
        <div className="content">
            <div className="details">
              <h2 className="text-2xl mb-5">Jose Bolivar <br /><span>Full Stack / Developer</span></h2>
              <div className="data">
                <h3>342 <br /><span>Posts</span></h3>
                <h3>120k <br /><span>Followers</span></h3>
                <h3>285 <br /><span>Following</span></h3>
              </div>
              <div className="actionBtn">
                <a href="/RESUME_JOSE_DAVID_BOLIVAR_MAYORA.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                >
                  <button>Resume</button>
                </a>
                <button>Message</button>
              </div>
            </div>
          </div>
          
    </div>
  )
}
