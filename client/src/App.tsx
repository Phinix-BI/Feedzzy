
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CombineFile from './components/ResturantPages/CombineFile/CombineFile.tsx';
import OrderStatus from './components/ResturantPages/OrderComponents/OrderStatus/OrderStatus.tsx';
import Setting from './components/UserPages/Setting/Setting.tsx';
import Profile from './components/UserPages/Setting/Profile/Profile.tsx';

import './styles.css'

import StoreFront from './components/ResturantPages/StoreFront/StoreFront.tsx';
import BasicInformation from './components/ResturantPages/RegisterPages/BasicInformation/BasicInformation.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CombineFile><OrderStatus /></CombineFile>,
    },
    {
      path: "/storeFront",
      element: <CombineFile><StoreFront /></CombineFile>,
    },
    {
<<<<<<< HEAD
      path: "/resturant/register/basicInformation",
      element: <BasicInformation/>
=======
      path: "/user/setting/profile",
      element: <CombineFile><Profile /></CombineFile>,
>>>>>>> 657948c4113b2bc1dd5dc199731decd3a6cfd0c9
    }

  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;