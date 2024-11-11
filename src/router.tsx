import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound';
import Error from './Error';
import ListenNow from './views/listen-now';

const Router = () => {
  const browserRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Navigate to={'/listen-now'} replace />,
          },
          {
            path: '/listen-now',
            element: <ListenNow />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    {
      future: {
        v7_normalizeFormMethod: true,
      },
    },
  );
  return <RouterProvider router={browserRouter} />;
};
export default Router;
