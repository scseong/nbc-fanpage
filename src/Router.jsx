import App from './App';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import NotFound from 'pages/NotFound';
const { createBrowserRouter } = require('react-router-dom');

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'detail/:id',
          element: <Detail />,
        },
      ],
    },
  ],
  { basename: '/' },
);
