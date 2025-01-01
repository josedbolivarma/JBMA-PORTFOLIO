import { IProject } from "../interfaces";


export const dataProjects: IProject[]  = [
    {
        id: 1,
        title: 'Dota 2 App',
        desc: 'Clone app inspired in Dota 2 App',
        host: 'https://dota-app-ts.vercel.app/',
        repository: 'https://github.com/josedbolivarma/Dota-App-TS',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760454/my-portfolio/projects/dota_sqpldu.jpg',
        overview: 'Personal application based on the Dota 2 MOBA video game. Clone of the main page of https://www.dota2.com/heroes. The user can choose a hero, apply a series of filters or search for it directly. Once the hero and its detail page have been selected, the abilities, points and description of said hero will be displayed, as well as the possibility of choosing the next or previous hero, depending on whether they exist.',
        technologies: ['React', 'TypeScript', 'NodeJS', 'Heroku', 'Sass'],
        in_process: true
    },
    {
        id: 2,
        title: 'Buona Fit',
        desc: 'My Personal Fitness Mark',
        host: 'https://buona-fit-ts.vercel.app/',
        repository: 'https://github.com/josedbolivarma/BF-TS',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760452/my-portfolio/projects/buonafit_rlr385.png',
        overview: 'Ecommerce and personal blog of sports supplements, also has a training section, with its respective video and description through images and percentages. Payment gateway with Stripe and IMC calculator.',
        technologies: ['React', 'Redux', 'TypeScript', 'Firebase', 'API Rest', 'Heroku'],
        in_process: false
    },
    {
        id: 3,
        title: 'Amazonas App',
        desc: 'Amazon Clone Completed Eccommerce',
        host: 'https://amazon-react-ts.vercel.app/',
        repository: 'https://github.com/josedbolivarma/Amazon-React-TS',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760452/my-portfolio/projects/amazon_gucx6t.jpg',
        overview: 'Amazon Ecommerce Clone, has its list of products, a login and user registration, in addition to being able to see the details of each product, these can be added to the stock and to the shopping cart. It has a geolocation system through a global map.',
        technologies: ['React', 'Redux', 'TypeScript', 'Firebase'],
        in_process: false
    },
    {
        id: 4,
        title: 'NetNet App',
        desc: 'Netflix Clone Completed App',
        host: 'https://app-netnet.vercel.app/',
        repository: 'https://github.com/josedbolivarma/app-netnet',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760480/my-portfolio/projects/netflix_b8ukv8.png',
        overview: 'Netflix clone made with Vanilla JavaScript ,Rest API with NodeJS and deploy to Render. Use of LocalStorage and Fetch API.',
        technologies: ['JavaScript', 'Rest API', 'Heroku'],
        in_process: false
    },
    {
        id: 5,
        title: 'D-CopasBM App',
        desc: 'App of Drinks and Coctails',
        host: 'https://d-copas-bm.vercel.app/',
        repository: 'https://github.com/josedbolivarma/D-CopasBM',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760455/my-portfolio/projects/dcopasjose_vvmqrz.jpg',
        overview: 'Cocktail web application, direct search and filters. Using the Rest API from https://www.thecocktaildb.com/api.php.',
        technologies: ['React', 'Redux', 'Rest API', 'Sass'],
        in_process: false
    },
    {
        id: 6,
        title: 'Netflix App',
        desc: 'Netflix Clone V2 Completed App',
        host: 'https://netflix-clone-react-lemon.vercel.app/',
        repository: 'https://github.com/josedbolivarma/netflix-clone-react',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1678207212/my-portfolio/projects/netflix_gz9bxz.jpg',
        overview: 'Netflix clone made with React ,Rest API and deploy to Vercel. Rest API. https://developers.themoviedb.org/3.',
        technologies: ['React', 'Rest API'],
        in_process: false
    },
    {
        id: 7,
        title: 'Anime Cover',
        desc: 'Anime Completed App',
        host: 'https://anime-cover.vercel.app/',
        repository: 'https://github.com/josedbolivarma/Anime-Cover',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1678983989/my-portfolio/projects/anime_jine2i.jpg',
        overview: 'Anime Web App made with React ,Rest API and deploy to Vercel. Rest API. https://docs.api.jikan.moe/.',
        technologies: ['React', 'Rest API', 'Redux'],
        in_process: true
    },
    {
        id: 8,
        title: 'Pokedex',
        desc: 'Completed Pokedex App',
        host: 'https://tita-pokedex-front.vercel.app/',
        repository: 'https://github.com/josedbolivarma/tita-pokedex-front',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1728699506/my-portfolio/projects/Gengard_pokemon_rc5jht.jpg',
        overview: 'Pokedex Web App made with React ,Rest API,  Redux, TypeScript, Graphql and deploy to Vercel. Graphql https://beta.pokeapi.co/graphql/v1beta/.',
        technologies: ['React', 'Rest API', 'Redux', 'TypeScript', 'Graphql'],
        in_process: false
    },
    {
        id: 9,
        title: 'Fotografía Randy Guerra',
        desc: 'Service Photograph Portfolio',
        host: 'https://photograph-app-gamma.vercel.app/',
        repository: '',
        img: 'https://res.cloudinary.com/duzncuogi/image/upload/v1724883719/fondo2_joklhw.jpg',
        overview: 'Service Photograph Portfolio made with Next JS ,Rest API, TypeScript. Deploy to Vercel.',
        technologies: ['Next JS', 'Rest API', 'TypeScript'],
        in_process: false
    }
]
