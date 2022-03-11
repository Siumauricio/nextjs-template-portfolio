import Link from 'next/link';
import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs/index';

export const HomePage = () => {
   return (
      // from-primary to-slate-900 text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20
      <div className="hero  bg-base-200 sm:pt-20 pt-5 border-b border-base-300" id="About">
         <div className="hero-content text-center">
            <div className="max-w-4xl">
               <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold pb-7">Hi, I am Mauricio Siu.</h1>
               <h1 className="lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-bold ">A Full Stack Developer.</h1>
               <div className="max-w-md mx-auto">
                  <p className="py-6 ">
                     Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa
                     cumque perspiciatis! Maiores minima consectetur.
                  </p>
               </div>
               <div className="flex justify-center gap-2" id="Projects">
                  <Link href="https://github.com/Siumauricio">
                     <a className="btn btn-ghost" target="_blank">
                        <BsGithub className="w-7 h-7 " />
                     </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/carlos-mauricio-ortiz-siu-6b9011184/">
                     <a className="btn btn-ghost" target="_blank">
                        <BsLinkedin className="w-7 h-7" />
                     </a>
                  </Link>
               </div>

               {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
         </div>
      </div>
   );
};
