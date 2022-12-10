import { dataProjects } from '../../data/projects';

type Props = {
    image: string;
    title: string;
    description: string;
}

type DataType = {
    id: number;
    image: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
}

type InitialProps = {
    data: DataType[];
}

const TimelineLeft = ({ image, title, description }: Props ) => {
    return (
        <div className="relative z-10">
                <img
                    src={ image }
                    alt="Logo"
                    className="timeline-img"
                />
                <div className="timeline-container timeline-container-left">
                    <div
                        className="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Aug 2020</span>
                        <h1 className="text-2xl font-bold pt-1">{ title }</h1>
                        <p className="pt-1">
                            { description }
                        </p>
                    </div>
                </div>
            </div>
    )
}

const TimelineRight = ({ image, title, description }: Props) => {
    return (
        <div className="relative z-10">
                {/* Error */}
                <img
                    src={ image }
                    alt="Logo"
                    className="timeline-img"
                />
                <div className="timeline-container">
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Jan 2021</span>
                        <h1 className="text-2xl font-bold pt-1">
                            { title }
                        </h1>
                        <p className="pt-1">
                            { description }
                        </p>
                    </div>
                </div>
            </div>
    )
}

export const Timeline = ({ data }: InitialProps ) => {
  return (
    <div className="text-gray-800">
     <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>

            {/* LOOP */}
                {
                    data.map((project, index) => {
                        if ( index % 2 === 0 ) {
                            return <TimelineLeft 
                            key={project.id} 
                            image={ project.image }
                            title={ project.title }
                            description={ project.description }
                            />
                        }
                        return <TimelineRight 
                        key={ project.id } 
                        image={ project.image } 
                        title={ project.title }
                        description={ project.description }
                        />
                    })
                }
            {/* LOOP */}

        </div>
    </div>
  )
}

{/* 


*/}


{/* 



*/}