import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/course/Menu";
import Emenu from "../pages/course/Emenu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/Updateprofile";
import CartPage from "../pages/course/CartPage";
import Notes from "../pages/course/Notes";
import AboutMe from "../pages/course/AboutMe";
import PaidNotes from "../pages/course/PaidNotes";
import Api from "../pages/course/Api";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/emenu",
          element: <Emenu/>
        },
        {
          path: "/menu",
          element:  <PrivateRouter> <Menu/> </PrivateRouter>
        },
        {
          path: "/notes",
          element: <Notes/>
        },
        {
          path: "/aboutme",
          element: <AboutMe/>
        },
        {
          path: "/paidnotes",
          element: <PaidNotes/>
        },
        {
          path: "/cart-page",
          element: <CartPage/>
        },
        {
          path: "/update-profile",
          element: <UpdateProfile/>
        },
        {
          path: "/api",
          element: <Api/>
        },
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    },
  ]);

  export default router;