import { Layout } from '../components/layouts';
import { Banner, About, Projects } from '../components/ui';

export default function Home() {
  return (
    <Layout title='Jose David Bolivar Mayora - Portfolio'>
      <Banner />
      <div className='w-[90%] m-auto'>
        <About />
      </div>
      <div className='w-[96%] m-auto'>
        <Projects />
      </div>
    </Layout>
  )
}
