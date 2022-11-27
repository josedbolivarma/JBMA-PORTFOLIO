import Image from "next/image"
import { ProjectCard } from "./"
import { dataProjects } from '../../data/projects';
import { IProject } from "../../interfaces";

export const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-[100vh] my-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                dataProjects.map(( item: IProject ) => (
                    <ProjectCard 
                        key={ item.id }
                        item={ item }
                    />
                ))
            }
        </div>
    </div>
  )
}
