import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound';
import Error from './Error';

const Router = () => {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={browserRouter} />;
};
export default Router;
