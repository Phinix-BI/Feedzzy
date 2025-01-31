import  { ReactNode, FC } from 'react';
import NavBar from '../common/NavBar/NavBar.tsx';
import Footer from '../common/Footer/Footer.tsx';

const CombineFile: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children} {/* Render children of CombinedComponent */}
      <Footer />
    </div>
  );
};

export default CombineFile;