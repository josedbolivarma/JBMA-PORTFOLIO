import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { ClockLoader } from "react-spinners";
import PropagateLoader from "react-spinners/PropagateLoader";
import { IProject } from "../../interfaces";

interface Props {
    item: IProject;
}

export const ProjectCard:FC<Props> = ({ item }) => {
  
  const router = useRouter();
  const { title, desc, host, id, img, repository, in_process } = item;
  
  return (
    <div className="w-full h-[300px] relative overflow-hidden group">
      <Image
        src={ img }
        alt="Title"
        layout="fill"
        className={`${ in_process? "opacity-50" : "group-hover:opacity-50" }`}
      />
      {
        (in_process) ? (
          <div className="flex justify-center items-center w-full h-full text-white">
            <ClockLoader color="#36d7b7" size={100} cssOverride={{ fontWeight: "900px" }}/>
          </div>
        ) : (
<div className="group-hover:bottom-[-25%] absolute bottom-[-70%] text-center left-[50%] translate-x-[-50%] w-full h-full text-white transition-all duration-300">
        <h2 className="text-4xl">{ title }</h2>
        <p className="text-1xl">{ desc }</p>
        <div className="flex flex-col items-center justify-between gap-2 mt-4">
          <button onClick={ () => router.push(`/project/${id}`) } className="group-hover:opacity-100 opacity-0 h-[30%] py-2 px-4 transition-opacity duration-300">
            See More
          </button>
          <div className="w-full flex items-center justify-around mt-3 px-2">
            <a className="text-2xl font-bold uppercase hover:border-b" href={host} target="_blank">
              Deployment
            </a>
            <a className="text-2xl font-bold uppercase hover:border-b" href={repository} target="_blank">
              Repository
            </a>
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
};
