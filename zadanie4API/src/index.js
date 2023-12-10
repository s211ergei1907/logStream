import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Data } from './components/Data';
import { Papa } from './components/Papa';
import { UseState } from './components/UseState';
import { UseEffect } from './components/UseEffect';
import { Request } from './components/Request';
import HookForm from './components/HookForm';
import CreateALotOfInput from './components/CreateALotOfInput';
import * as path from 'path';
import Animation from './components/Animation/Animation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Data',
    element: <Data />
  },
  {
    path: '/Papa',
    element: <Papa />
  },
  {
    path: '/usestate',
    element: <UseState />
  },
  {
    path: '/useEffect',
    element: <UseEffect />
  },
  {
    path: '/request',
    element: <Request />
  },
  {
    path: '/hookform',
    element: <HookForm />
  },
  {
    path: '/lot_input',
    element: <CreateALotOfInput />
  },
  {
    path: '/animation',
    element: <Animation />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
