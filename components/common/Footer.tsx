import Link from 'next/link';
import React from 'react';

export const Footer = () => {
   return (
      <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded ">
         <div className="grid grid-flow-col gap-4">
            <Link href="/#About">
               <a className="link link-hover">About me</a>
            </Link>
            <Link href="/#Projects">
               <a className="link link-hover">Projects</a>
            </Link>
            <Link href="/#Skills">
               <a className="link link-hover">Skills</a>
            </Link>
            <Link href="/#Contact">
               <a className="link link-hover">Contact</a>
            </Link>
         </div>
      </footer>
   );
};
