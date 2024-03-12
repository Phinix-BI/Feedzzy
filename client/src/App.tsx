import OrderStatus from "./components/ResturantPages/OrderStatus/OrderStatus.tsx";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './styles.css'
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OrderStatus/>,
    },
   
  ]);

  return (
     <main> 
   <RouterProvider router={router}>
    </RouterProvider>
    </main>
  )
}

export default App
