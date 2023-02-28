import {
    createBrowserRouter,
  } from "react-router-dom";
import AboutUs from "../../components/About/AboutUs";
import Admission from "../../components/Admission/Admission";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login";
import Notice from "../../components/Notice/Notice";
import Main from "../../Layout/Main";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<AboutUs></AboutUs>
        },
        {
            path:"/admission",
            element:<Admission></Admission>
        },
        {
            path:"/notice",
            element:<Notice></Notice>
        },
        {
            path:"contact",
            element:<Contact></Contact>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        

      ]
    },
  ]);

export default router;