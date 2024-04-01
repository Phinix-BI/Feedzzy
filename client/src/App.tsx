
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CombineFile from './components/ResturantPages/CombineFile/CombineFile.tsx';
import OrderStatus from './components/ResturantPages/OrderComponents/OrderStatus/OrderStatus.tsx';

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
      path: "/resturant/register/basicInformation",
      element: <BasicInformation/>
    }

  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;