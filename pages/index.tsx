import { Layout } from '../components/layouts';
import { Banner, About, Projects, ContactBanner } from '../components/ui';
import { TimelineContainer, Certifications, Skills } from '../components/containers';

export default function Home() {
  return (
    <Layout title='Jose David Bolivar Mayora - Portfolio'>
      <Banner />
      <div className='w-[90%] m-auto'>
        <About />
      </div>
      <div className='w-[96%] m-auto'>
        <Skills />
      </div>
      <div className='w-[96%] m-auto'>
        <Projects />
      </div>
      <TimelineContainer />
      <ContactBanner />
      <div className='w-[96%] m-auto'>
        <Certifications />
      </div>
    </Layout>
  )
}
