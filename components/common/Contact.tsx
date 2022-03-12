import React from 'react';
import FadeIn from 'react-fade-in';

export const Contact = () => {
   return (
      <section className="bg-base-200 ">
         <FadeIn>
            <div className="pb-14 flex  items-center flex-col pt-5 border-b border-base-300" id="Contact">
               <h2 className="sm:text-3xl text-2xl font-bold pb-7 ">Contact</h2>
               <a href="mailto:Siumauricio@hotmail.com" className="btn btn-primary">
                  Send Email
               </a>
               {/* <button className="" type="submit">
                  </button> */}
            </div>
         </FadeIn>
      </section>
   );
};
