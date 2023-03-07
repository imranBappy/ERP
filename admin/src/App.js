import { Route, RouterProvider, Routes } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Students from './pages/Students';
import Departments from './pages/Departments';
import Invoices from './pages/Invoices';
import Accounts from './pages/Accounts';
import Holiday from './pages/Holiday';
import AddStudent from './pages/AddStudent';
import Admission from './pages/Admission';
import Profile from './pages/Profile';
import DepartmentAdd from './pages/DepartmentAdd';
import TeacherAdd from './pages/AddTeacher';
import NoticeAdd from './pages/NoticeAdd';
import AddAccount from './pages/AddAccount';
import Test from './pages/Test';
import Notify from './components/Notify';
import Login from './pages/Login';
import router from './routes/routes';


function App() {
  return (
    <div className="dark:bg-black-700">
      <Notify />
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
