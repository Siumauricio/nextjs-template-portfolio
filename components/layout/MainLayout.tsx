import {ReactNode} from 'react';
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
