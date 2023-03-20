import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import img from '../../public/certificate.jpg';
import { CardCertification } from "../ui";

const data = [
    {
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1668952777/my-portfolio/docs/Front_9_-_Jos%C3%A9_David_Bol%C3%ADvar_Mayora_page-0001_d5lnec.jpg',
        title: 'Academia Geek',
        link: '/Front9.pdf'
    },
    {
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1668952777/my-portfolio/docs/JoseD.Bolivar-RootLab_Next_page-0001_p2g8ln.jpg',
        title: 'Rootlab - Roostack',
        link: '/RootLab_Next.pdf'
    },
    {
      img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1671197421/my-portfolio/docs/Diapositiva9_iitrqe.jpg',
      title: 'Softka U',
      link: '/softka_testing.pdf'
    },
    {
      img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1679270477/my-portfolio/docs/Certificado_HackathonJose_BolivarMayora_page-0001_clu6t1.jpg',
      title: 'Hackaton QSD',
      link: '/CertificadoHackathonJoseBolivarMayora.pdf'
    },
    {
      img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1674315641/my-portfolio/docs/html_basico_oepb24.jpg',
      title: 'HTML and CSS',
      link: '/html_css.pdf'
    },
    {
      img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1674315641/my-portfolio/docs/javascript_basico_vyh84l.jpg',
      title: 'JavaScript Basic',
      link: '/javascript_basico.pdf'
    },
    {
      img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1674315641/my-portfolio/docs/angular_basico_f8lkhj.jpg',
      title: 'Angular Basic',
      link: '/angular_basico.pdf'
    },
]

export const Certifications = () => {
  return (
    <div className="my-20" id="certifications">
        <h2 className="text-center my-20">CERTIFICATIONS</h2>
        <Swiper
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {
        data.map(({ title, img, link }) => (
            <SwiperSlide key={ title } className='w-[100%]'>
                <CardCertification 
                title={ title }
                img={ img }
                link={ link }
                />
            </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}
