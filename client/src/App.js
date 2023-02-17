import React from 'react';
import { RouterProvider } from 'react-router';
import router from './Routes/Routes/Routes';

const App = () => {
  return (
    <div className='mx-auto'>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
};

export default App;