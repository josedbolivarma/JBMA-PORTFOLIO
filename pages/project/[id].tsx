import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/layouts';
import { BannerProject, InfoTechProject, OverviewProject } from '../../components/ui';
import { dataProjects } from '../../data/projects';
import { IProject } from '../../interfaces';

interface Props {
    project: IProject;
}

const Project: NextPage<Props> = ({ project }) => {
  
  const { title, desc, host, img, repository, overview, technologies } = project;
  
  return (
    <Layout title={ title }>
        <div className='w-full h-full min-h-[100vh]'>
        <BannerProject title={title} img={img} desc={desc}/>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-8'>
            <OverviewProject repository={repository} host={host} overview={overview}/>
            <InfoTechProject technologies={technologies}/>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
        </div>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    return {
        paths: dataProjects.map(item => ({
            params: { id: String(item.id) }
        })),
        fallback: "blocking"
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { id = '' } = params as { id: string };

    const project = dataProjects.find( item => String(item.id) === id );

    if ( !project ) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            project
        },
        revalidate: 60 * 60 * 24
    }
}

export default Project;