import  { ReactNode, FC } from 'react';
import NavBar from '../common/NavBar/NavBar.tsx';

const CombineFile: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children} {/* Render children of CombinedComponent */}
    </div>
  );
};

export default CombineFile;