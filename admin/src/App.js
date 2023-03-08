import { RouterProvider } from 'react-router-dom';
import './styles/App.css';

import Notify from './components/Notify';
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
