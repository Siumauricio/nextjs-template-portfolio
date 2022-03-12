import React from 'react';
import FadeIn from 'react-fade-in';

export const Education = () => {
   return (
      <>
         <div className="bg-base-200">
            <FadeIn>
               <div className=" pb-14 flex  items-center flex-col pt-5 border-b border-base-300" id="Education">
                  <h2 className="sm:text-3xl text-2xl font-bold pb-7 ">Education</h2>
                  <div className="flex flex-row max-w-lg">
                     <ul>
                        <li className="pb-6 border-b border-base-300">
                           <h3 className="text-base font-bold">Engineer of Computer Science - UNITEC</h3>
                           <p className="text-base font-medium">2018 - 2022</p>
                           {/* <p className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores, atque, autem beatae doloremque dolorum ea eaque eius enim error esse et eum facere facilis harum
                     </p> */}
                        </li>
                        <li className="pt-6">
                           <h3 className="text-base font-bold">Engineer of data science - UNITEC</h3>
                           <p className="text-base font-medium">2021 - Present</p>

                           {/* <p className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores, atque, autem beatae doloremque dolorum ea eaque eius enim error esse et eum facere facilis harum
                     </p> */}
                        </li>
                     </ul>
                  </div>
                  <div id="Projects"></div>
               </div>
            </FadeIn>
         </div>
      </>
   );
};
