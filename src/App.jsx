
import { Homepage, Listpage, Layout, Detailpage, Profilepage, Signuppage, Signinpage } from "./pages";

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
        path: "listings",
        element: <Listpage />
      }, 
      {
        path: "listings/:id",
        element: <Detailpage />
      },
      {
        path: "profile",
        element: <Profilepage />
      },
      {
        path: "signup",
        element: <Signuppage />
      },
      {
        path: "signin",
        element: <Signinpage />
      }
    ]
    }
  ]);


  return (
    <RouterProvider router={router}/>

    
  )
}

export default App