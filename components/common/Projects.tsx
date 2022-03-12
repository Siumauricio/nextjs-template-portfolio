import Link from 'next/link';
import React from 'react';
import {BsGithub} from 'react-icons/bs/index';
import {BiLinkExternal} from 'react-icons/bi/index';
import Image from 'next/image';
import FadeIn from 'react-fade-in';

export const Projects = () => {
   return (
      <>
         <section className="bg-base-200">
            <FadeIn>
               <div className=" pb-14 flex  items-center flex-col pt-5 border-b border-base-300 ">
                  <h2 className="sm:text-3xl text-2xl font-bold pb-7">Projects</h2>
                  <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:px-2 md:px-2 px-2 ">
                     {ProjectsData.map((project, index) => (
                        <div className="card w-full md:w-80  shadow-2xl image-full shadow-base-100" key={index}>
                           <figure className="relative">
                              <Image quality={100} layout="fill" src={project.image} alt="Shoes" className="blur-md" priority />
                           </figure>
                           <div className="card-body">
                              <h2 className="card-title mx-auto font-bold">{project.title}</h2>
                              <p className="font-semibold ">{project.description}</p>
                              <div className="card-actions justify-center">
                                 <Link href={project.preview}>
                                    <a className="btn btn-ghost" target="_blank">
                                       <BiLinkExternal className="w-7 h-7 " />
                                    </a>
                                 </Link>
                                 <Link href={project.github}>
                                    <a className="btn btn-ghost" target="_blank">
                                       <BsGithub className="w-7 h-7 " />
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
         </section>
         <div id="Skills"></div>
      </>
   );
};
const ProjectsData = [
   {
      title: 'E-commerce Website',
      description: 'E-commerce website for a technology company, built with Next.js, TailwindCSS, .Net Core and PostgreSQL.',
      image: '/E-Commerce.png',
      preview: 'https://market-app-next-ts.vercel.app/',
      github: '#',
   },
   {
      title: 'Maze Rat Game',
      description: 'Maze rat solver using PRIMS, Backtracking and DFS algorithm to find the shortest path to the exit, built with React, Bootstrap.',
      image: '/Maze-Rat.png',
      preview: 'https://maze-app-two.vercel.app/',
      github: 'https://github.com/Siumauricio/Maze-App',
   },
   {
      title: 'Heroes App',
      description: 'Heroes App to display the Marvel API data, built with React, Bootstrap.',
      image: '/Heroes-App.png',
      preview: 'https://heroes-app-six-sable.vercel.app',
      github: 'https://github.com/Siumauricio/Heroes-App',
   },
   {
      title: 'Visual Generator App',
      description: 'Visual editor with the help of nodes for generating Python code',
      image: '/Drawflow-Sentences.png',
      preview: 'https://draw-flow-sentences.vercel.app/',
      github: 'https://github.com/Siumauricio/DrawFlow-Sentences',
   },
   {
      title: 'GIf Generator App',
      description: 'Simple Gif Generator App, built with React, Bootstrap.',
      image: '/Gif-App.png',
      preview: 'https://gif-app-tau.vercel.app/',
      github: 'https://github.com/Siumauricio/GifApp',
   },
   {
      title: 'Portfolio',
      description: 'Simple Portfolio App, built with NextJS, TailwindCSS with DaisyUI.',
      image: '/Gif-App.png',
      preview: 'https://my-portfolio-swart-chi.vercel.app/',
      github: 'https://github.com/Siumauricio/my-portfolio',
   },
];
