import React from 'react';

export const Contact = () => {
   return (
      <section className="bg-base-200 pb-14 flex  items-center flex-col pt-5 border-b border-base-300" id="Contact">
         <h2 className="sm:text-3xl text-2xl font-bold pb-7 ">Contact</h2>
         <form action="mailto:Siumauricio@hotmail.com">
            <button className="btn btn-primary" type="submit">
               Send Email
            </button>
         </form>
      </section>
   );
};
