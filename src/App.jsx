import Posts from "./views/Posts.page";
import Home from "./views/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/Posts",
    element: <Posts/ >,
  },
]);



function App() {
  return  <RouterProvider router={router} />
}

export default App







