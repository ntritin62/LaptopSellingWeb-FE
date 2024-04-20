import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserCart } from './redux/cartSlice';
import { getUser } from './redux/userSlice';
import { Suspense, useEffect } from 'react';
import * as ROUTES from './constants/routes';
import { lazy } from 'react';
import getAuthToken from './services/getToken';
import { loader as OrdersLoader } from './pages/ProfilePage/components/ProfileRight/components/Orders/loader';
import { loader as ProductsLoader } from './pages/ProductsPage/loader';

const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ProfileRight = lazy(() =>
  import('./pages/ProfilePage/components/ProfileRight')
);
const AddCard = lazy(() =>
  import('./pages/ProfilePage/components/ProfileRight/components/AddCard')
);
const EditInfo = lazy(() =>
  import('./pages/ProfilePage/components/ProfileRight/components/EditInfo')
);
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ShippingPage = lazy(() => import('./pages/ShippingPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const OrdersPage = lazy(() =>
  import('./pages/ProfilePage/components/ProfileRight/components/Orders')
);
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

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
        loader: ProductsLoader,
      },
      {
        path: `${ROUTES.LOGIN}`,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: `${ROUTES.SIGNUP}`,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: 'san-pham',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProductsPage />
              </Suspense>
            ),
            loader: ProductsLoader,
          },
          {
            path: ':brandName',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProductsPage />
              </Suspense>
            ),
            loader: ProductsLoader,
          },
        ],
      },
      {
        path: `${ROUTES.CART}`,
        loader: () => {
          const token = getAuthToken();
          if (!token) {
            return redirect(ROUTES.LOGIN);
          }
          return null;
        },
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <CheckoutPage />
              </Suspense>
            ),
          },
          {
            path: `${ROUTES.SHIPPING}`,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ShippingPage />
              </Suspense>
            ),
          },
          {
            path: `${ROUTES.PAYMENTMETHOD}`,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PaymentPage />
              </Suspense>
            ),
          },
          {
            path: `${ROUTES.PAYMENTSUCCESS}`,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PaymentSuccess />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: `${ROUTES.PROFILE}`,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProfilePage />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProfileRight />
              </Suspense>
            ),
          },
          {
            path: 'edit-info',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <EditInfo />
              </Suspense>
            ),
          },
          {
            path: 'add-address',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <AddCard />
              </Suspense>
            ),
          },
          {
            path: 'orders',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <OrdersPage />
              </Suspense>
            ),
            loader: OrdersLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserCart());
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
