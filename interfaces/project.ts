export interface IProject {
    id: number;
    title: string;
    desc: string;
    img: string;
    repository: string;
    host: string;
    overview: string;
    technologies: string[];
    in_process: boolean;
}