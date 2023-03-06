import { Route, Routes } from 'react-router-dom';
import './App.css';
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
<<<<<<< HEAD
import AddAccount from './pages/AddAccount';
import Test from './pages/Test';
=======
>>>>>>> imran


function App() {
  return (
    <div className="dark:bg-black-700">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Dashboard />} />

          <Route path="/students" element={<Admission />} />
          <Route path='/students/add' element={<AddStudent />} />

          <Route path="/teachers" element={<Admission />} />

          <Route path="/departments" element={<Departments />} />
          <Route path='/departments/add' element={<DepartmentAdd />} />

          <Route path="/admission" element={<Admission />} />
          <Route path="/invoices" element={<Invoices />} />
<<<<<<< HEAD

          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/add" element={<AddAccount />} />

          <Route path="/holiday" element={<Holiday />} />

          <Route path="/test" element={<Test />} />


=======
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/holiday" element={<Holiday />} />
>>>>>>> imran
          <Route path='/profile/:stdId' element={<Profile />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
