import Link from 'next/link';
import React, {useState} from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs/index';
import FadeIn from 'react-fade-in';

export const HomePage = () => {
   return (
      // from-primary to-slate-900 text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20
      <div className="hero  bg-base-200 sm:pt-20 pt-5 border-b border-base-300" id="About">
         <div className="hero-content text-center">
            <div className="max-w-4xl">
               <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold pb-7 estils sm:border-r-4 border-r border-base-300"> Hi, I am Mauricio Siu.</h1>
               <FadeIn>
                  <h1 className="sm:text-3xl text-2xl font-bold ">A Full Stack Developer.</h1>

                  <div className="max-w-md mx-auto">
                     <p className="py-6 ">
                        Software developer with more than 3 years of experience in the development of personal applications, with solid knowledge in the programming area to deliver quality products
                        and on time, I have a great motivation to solve problems and I focus everyday learning something new and improving on what I am passionate about.
                     </p>
                  </div>

                  <div className="flex justify-center gap-2" id="Education">
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
               </FadeIn>
               {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
         </div>
      </div>
   );
};
