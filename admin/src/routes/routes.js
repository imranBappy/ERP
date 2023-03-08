import Accounts from "../pages/Accounts";
import AddAccount from "../pages/AddAccount";
import AddNotice from "../pages/AddNotice";
import AddStudent from "../pages/AddStudent";
import TeacherAdd from "../pages/AddTeacher";
import Admission from "../pages/Admission";
import Dashboard from "../pages/Dashboard";
import DepartmentAdd from "../pages/DepartmentAdd";
import Departments from "../pages/Departments";
import Holiday from "../pages/Holiday";
import Invoices from "../pages/Invoices";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

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
                path: "/students/add'",
                element: <AddStudent />
            },
            {
                path: "/teachers",
                element: <Admission />
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
                element: <DepartmentAdd />
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
                element: <AddAccount />
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