import Link from 'next/link';
import React from 'react';
import {Footer} from './Footer';

type Props = {
   children: React.ReactNode;
};
export const Navbar = ({children}: Props) => {
   return (
      <>
         <div className="drawer w-full">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
               <nav className="bg-base-100 sticky inset-x-0 w-full top-0 z-[9999] navbar  shadow-lg rounded-md  ">
                  <div className="navbar-start ">
                     <div className="dropdown">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost lg:hidden">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                           </svg>
                        </label>
                     </div>
                     {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                  </div>
                  <div className="navbar-center hidden lg:flex ">
                     <ul className="menu menu-horizontal p-0 ">
                        <li>
                           <Link href="/#About">
                              <a className="btn btn-ghost">About me</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/#Projects">
                              <a className="btn btn-ghost">Projects</a>
                           </Link>
                        </li>

                        <li>
                           <Link href="/#Skills">
                              <a className="btn btn-ghost">Skills</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/#Contact">
                              <a className="btn btn-ghost">Contact</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="navbar-end">{/* <a className="btn">Get started</a> */}</div>
               </nav>

               {children}
               <Footer />
            </div>
            <div className="drawer-side">
               <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
               <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                  <li>
                     <Link href="/#About">
                        <a className="btn btn-ghost">About me</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/#Projects">
                        <a className="btn btn-ghost">Projects</a>
                     </Link>
                  </li>

                  <li>
                     <Link href="/#Skills">
                        <a className="btn btn-ghost">Skills</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/#Contact">
                        <a className="btn btn-ghost">Contact</a>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};
