
import { Homepage, Listpage, Layout, Detailpage, Profilepage } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
        path: "/",
        element: <Homepage /> 
      },
      {
        path: "list",
        element: <Listpage />
      }, 
      {
        path: "list/:id",
        element: <Detailpage />
      },
      {
        path: "profile",
        element: <Profilepage />
      }
    ]
    }
  ]);


  return (
    <RouterProvider router={router}/>

    
  )
}

export default App