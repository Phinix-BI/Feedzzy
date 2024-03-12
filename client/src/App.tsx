import NavBar from "./components/ResturantPages/common/NavBar/NavBar.tsx"

import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './styles.css'
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
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
