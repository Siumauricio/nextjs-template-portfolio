import React, {useEffect} from 'react';
const {themeChange} = require('theme-change');

export const SwapThemes = () => {
   useEffect(() => {
      themeChange(false);
   }, []);
   return (
      <div title="Change Theme" className="dropdown dropdown-end ">
         <div tabIndex={0} className="btn gap-2 normal-case btn-ghost">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
               ></path>
            </svg>
            <span className="hidden md:inline">Change Theme</span>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="ml-1 inline-block h-4 w-4 fill-current">
               <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
            </svg>
         </div>
         <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px h-96 w-52 overflow-y-auto shadow-2xl mt-16">
            <ul className="menu menu-compact p-4" tabIndex={0}>
               <li>
                  <button data-set-theme="light" data-act-classname="active" className="">
                     🌝 light
                  </button>
               </li>
               <li>
                  <button data-set-theme="dark" data-act-classname="active">
                     🌚 dark
                  </button>
               </li>
               <li>
                  <button data-set-theme="cupcake" data-act-classname="active">
                     🧁 cupcake
                  </button>
               </li>
               <li>
                  <button data-set-theme="bumblebee" data-act-classname="active">
                     🐝 bumblebee
                  </button>
               </li>
               <li>
                  <button data-set-theme="emerald" data-act-classname="active">
                     ✳️ Emerald
                  </button>
               </li>
               <li>
                  <button data-set-theme="corporate" data-act-classname="active">
                     🏢 Corporate
                  </button>
               </li>
               <li>
                  <button data-set-theme="synthwave" data-act-classname="active">
                     🌃 synthwave
                  </button>
               </li>
               <li>
                  <button data-set-theme="retro" data-act-classname="active">
                     👴 retro
                  </button>
               </li>
               <li>
                  <button data-set-theme="cyberpunk" data-act-classname="active">
                     🤖 cyberpunk
                  </button>
               </li>
               <li>
                  <button data-set-theme="valentine" data-act-classname="active">
                     🌸 valentine
                  </button>
               </li>
               <li>
                  <button data-set-theme="halloween" data-act-classname="active">
                     🎃 halloween
                  </button>
               </li>
               <li>
                  <button data-set-theme="garden" data-act-classname="active">
                     🌷 garden
                  </button>
               </li>
               <li>
                  <button data-set-theme="forest" data-act-classname="active">
                     🌲 forest
                  </button>
               </li>
               <li>
                  <button data-set-theme="aqua" data-act-classname="active">
                     🐟 aqua
                  </button>
               </li>
               <li>
                  <button data-set-theme="lofi" data-act-classname="active">
                     👓 lofi
                  </button>
               </li>
               <li>
                  <button data-set-theme="pastel" data-act-classname="active">
                     🖍 pastel
                  </button>
               </li>
               <li>
                  <button data-set-theme="fantasy" data-act-classname="active">
                     🧚‍♀️ fantasy
                  </button>
               </li>
               <li>
                  <button data-set-theme="wireframe" data-act-classname="active">
                     📝 Wireframe
                  </button>
               </li>
               <li>
                  <button data-set-theme="black" data-act-classname="active">
                     🏴 black
                  </button>
               </li>
               <li>
                  <button data-set-theme="luxury" data-act-classname="active">
                     💎 luxury
                  </button>
               </li>
               <li>
                  <button data-set-theme="dracula" data-act-classname="active">
                     🧛‍♂️dracula
                  </button>
               </li>
               <li>
                  <button data-set-theme="cmyk" data-act-classname="active">
                     🖨 CMYK
                  </button>
               </li>
               <li>
                  <button data-set-theme="autumn" data-act-classname="active">
                     🍁 Autumn
                  </button>
               </li>
               <li>
                  <button data-set-theme="business" data-act-classname="active">
                     💼 Business
                  </button>
               </li>
               <li>
                  <button data-set-theme="acid" data-act-classname="active">
                     💊 Acid
                  </button>
               </li>
               <li>
                  <button data-set-theme="lemonade" data-act-classname="active">
                     🍋 Lemonade
                  </button>
               </li>
               <li>
                  <button data-set-theme="night" data-act-classname="active">
                     🌙 Night
                  </button>
               </li>
               <li>
                  <button data-set-theme="coffee" data-act-classname="active">
                     ☕️ Coffee
                  </button>
               </li>
               <li>
                  <button data-set-theme="winter" data-act-classname="active">
                     ❄️ Winter
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
};
