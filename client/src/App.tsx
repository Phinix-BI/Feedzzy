
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CombineFile from './components/ResturantPages/CombineFile/CombineFile.tsx';
import OrderStatus from './components/ResturantPages/OrderComponents/OrderStatus/OrderStatus.tsx';
import Setting from './components/UserPages/Setting/Setting.tsx';
import Profile from './components/UserPages/Setting/Profile/Profile.tsx';

import './styles.css'

import StoreFront from './components/ResturantPages/StoreFront/StoreFront.tsx';

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
      path: "/user/setting/profile",
      element: <CombineFile><Profile /></CombineFile>,
    }

  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;