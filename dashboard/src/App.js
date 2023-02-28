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


function App() {
  return (
    <div className="dark:bg-black-700">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Students />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path='/students/add' element={<AddStudent />} />
          <Route path='/profile/:stdId' element={<Profile />} />

          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
