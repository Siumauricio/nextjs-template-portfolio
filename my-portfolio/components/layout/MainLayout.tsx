import {ReactNode} from 'react';
import {Footer} from '../common/Footer';
import {Navbar} from '../common/Navbar';
type Props = {
   children: ReactNode;
};
export function MainLayout({children}: Props) {
   return (
      <>
         {/* <div className="flex flex-col h-screen "> */}
         <Navbar children={children} />
         {/* // <div className="flex-grow"></div> */}
         {/* </div> */}
      </>
   );
}

export default MainLayout;
