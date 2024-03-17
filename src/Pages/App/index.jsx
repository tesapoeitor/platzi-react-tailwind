import { useRoutes, HashRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import NavBar from '../../Components/NavBar';
import CheckoutSideMenu from '../../Components/CheckOutSideMenu';
import './App.css';

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home/> },
    { path: '/category/:category', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '*', element: <NotFound/> },
  ]);
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <HashRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckoutSideMenu/>
      </HashRouter>
    </ShoppingCartProvider>
  );
};

export default App;
