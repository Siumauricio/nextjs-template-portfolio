import {Children, ReactNode} from 'react';
import {Footer} from '../common/Footer';
import {Navbar} from '../common/Navbar';
type Props = {
   children: ReactNode;
};
export function MainLayout({children}: Props) {
   return (
      <>
         <Navbar>{children}</Navbar>
      </>
   );
}

export default MainLayout;
