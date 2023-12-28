// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"/",
//         element:<HomePage />
//       }
//     ]
//   }
// ])
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={router} />);

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);