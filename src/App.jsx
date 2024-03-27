import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import * as ROUTES from './constants/routes';
import { lazy } from 'react';
const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
