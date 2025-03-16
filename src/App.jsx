import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserCart } from './redux/cartSlice';
import { getUser } from './redux/userSlice';
import { getUserService } from './services/userService';
import { Suspense, useEffect } from 'react';
import * as ROUTES from './constants/routes';
import { lazy } from 'react';
import getAuthToken from './services/getToken';
import { loader as OrdersLoader } from './pages/ProfilePage/components/ProfileRight/components/Orders/loader';
import { loader as ProductsLoader } from './pages/ProductsPage/loader';
import { loader as ProductDetailsLoader } from './pages/ProductDetailsPage/loader';
import { action as LoginAction } from './pages/LoginPage/action';
import { action as SignUpAction } from './pages/SignUpPage/action';
import { loader as EditCouponLoader } from './pages/Admin/AdminCoupon/pages/loader';
import { loader as CouponLoader } from './pages/Admin/AdminCoupon/loader';
import { loader as OrderLoader } from './pages/Admin/AdminOrders/loader';
import { loader as OrderDetailsLoader } from './pages/Admin/AdminOrders/pages/loader';
import { loader as AdminLoader } from './pages/Admin/AdminDashboard/loader';
import EditInfoAction from './pages/ProfilePage/components/ProfileRight/components/EditInfo/action';
import changePasswordAction from './pages/ProfilePage/components/ProfileRight/components/ChangePassword/action';
import addAddressAction from './pages/ProfilePage/components/ProfileRight/components/AddCard/action';
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
const ChangePassword = lazy(() =>
  import(
    './pages/ProfilePage/components/ProfileRight/components/ChangePassword'
  )
);
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ShippingPage = lazy(() => import('./pages/ShippingPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const OrdersPage = lazy(() =>
  import('./pages/ProfilePage/components/ProfileRight/components/Orders')
);
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const AdminLayout = lazy(() => import('./pages/Admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminProducts = lazy(() => import('./pages/Admin/AdminProducts'));
const ProductAdd = lazy(() =>
  import('./pages/Admin/AdminProducts/pages/ProductAdd')
);
const ProductEdit = lazy(() =>
  import('./pages/Admin/AdminProducts/pages/ProductEdit')
);
const AdminOrders = lazy(() => import('./pages/Admin/AdminOrders/index'));
const AdminOrderDetail = lazy(() =>
  import('./pages/Admin/AdminOrders/pages/OrderDetails')
);
const AdminCoupon = lazy(() => import('./pages/Admin/AdminCoupon/index'));
const AddCoupon = lazy(() =>
  import('./pages/Admin/AdminCoupon/pages/AddCoupon')
);
const EditCoupon = lazy(() =>
  import('./pages/Admin/AdminCoupon/pages/EditCoupon')
);
const PaymentSuccessCod = lazy(() =>
  import('./pages/PaymentSuccess/PaymentCOD')
);
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
        id: 'root',
        loader: ProductsLoader,
      },
      {
        path: `${ROUTES.LOGIN}`,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LoginPage />
          </Suspense>
        ),
        loader: () => {
          const token = getAuthToken();
          if (token) {
            return redirect(ROUTES.HOME);
          }
          return null;
        },
        action: LoginAction,
      },
      {
        path: `${ROUTES.SIGNUP}`,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SignUpPage />
          </Suspense>
        ),
        loader: () => {
          const token = getAuthToken();
          if (token) {
            return redirect(ROUTES.HOME);
          }
          return null;
        },
        action: SignUpAction,
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
        path: '/laptop/:productId',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetailsPage />
          </Suspense>
        ),
        loader: ProductDetailsLoader,
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
          {
            path: `${ROUTES.PAYMENTSUCCESS_COD}`,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PaymentSuccessCod />
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
            action: EditInfoAction,
          },
          {
            path: 'add-address',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <AddCard />
              </Suspense>
            ),
            action: addAddressAction,
          },
          {
            path: 'change-password',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ChangePassword />
              </Suspense>
            ),
            action: changePasswordAction,
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
  {
    path: ROUTES.ADMIN,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <AdminLayout />
      </Suspense>
    ),
    loader: async () => {
      const token = getAuthToken();
      if (!token) {
        return redirect(ROUTES.HOME);
      }
      try {
        const res = await getUserService();
        console.log(res);
        const role = res.data.user.role;
        if (role != 'admin') {
          return redirect(ROUTES.HOME);
        }
        return null;
      } catch (e) {
        console.log(e);
      }
    },
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AdminDashboard />
          </Suspense>
        ),
        loader: AdminLoader,
      },
      {
        path: ROUTES.ADMIN_PRODUCTS,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AdminProducts />
          </Suspense>
        ),
        loader: ProductsLoader,
      },
      {
        path: ROUTES.ADD_PRODUCT,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductAdd />
          </Suspense>
        ),
      },
      {
        path: ROUTES.EDIT_PRODUCT,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductEdit />
          </Suspense>
        ),
        loader: ProductDetailsLoader,
      },
      {
        path: ROUTES.ADMIN_ORDERS,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AdminOrders />
          </Suspense>
        ),
        loader: OrderLoader,
      },
      {
        path: ROUTES.ADMIN_ORDERS_DETAILS,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AdminOrderDetail />
          </Suspense>
        ),
        loader: OrderDetailsLoader,
      },
      {
        path: ROUTES.ADMIN_COUPON,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AdminCoupon />
          </Suspense>
        ),
        loader: CouponLoader,
      },
      {
        path: ROUTES.ADD_COUPON,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AddCoupon />
          </Suspense>
        ),
      },
      {
        path: ROUTES.EDIT_COUPON,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <EditCoupon />
          </Suspense>
        ),
        loader: EditCouponLoader,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const authToken = getAuthToken();
    if (authToken) {
      dispatch(getUser());
      dispatch(getUserCart());
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
