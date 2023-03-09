import Accounts from "../pages/Accounts";
import AddAccount from "../pages/AddAccount";
import AddNotice from "../pages/AddNotice";
import AddStudent from "../pages/AddStudent";
import TeacherAdd from "../pages/AddTeacher";
import Admission from "../pages/Admission";
import Dashboard from "../pages/Dashboard";
import AddDepartment from "../pages/AddDepartment";
import Departments from "../pages/Departments";
import Holiday from "../pages/Holiday";
import Invoices from "../pages/Invoices";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Teachers from "../pages/Teachers";
import AddStudent2 from "../pages/AddStudent2";
const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/students",
                element: <Admission />
            },
            {
                path: "/profile/:stdId",
                element: <Profile />
            },
            {
                path: "/students/add",
                element: <AddStudent2 />
            },
            {
                path: "/teachers",
                element: <Teachers />
            },
            {
                path: "/teachers/add",
                element: <TeacherAdd />
            },
            {
                path: "/departments",
                element: <Departments />
            },
            {
                path: "/departments/add",
                element: <AddDepartment />
            },
            {
                path: "/admission",
                element: <Admission />
            },

            {
                path: "/invoices",
                element: <Invoices />
            },
            {
                path: "/accounts",
                element: <Accounts />
            },
            {
                path: "/accounts/add",
                element: <AddStudent />
            },
            {
                path: "/setting",
                element: <Holiday />
            },
            {
                path: "/notice",
                element: <AddNotice />
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "*",
        element: <NotFound />,
    }
])

export default router;