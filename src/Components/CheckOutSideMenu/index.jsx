import { useContext, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
import './styles.css';

const CheckoutSideMenu = memo(() => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = useCallback((id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  }, [context]);

  const handleCheckout = () => {
    const orderToAdd = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div
          className='cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </div>
      <div className='px-6 overflow-y-auto flex-1'>
        {
          context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images?.[0]}
              id={product.id}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mb-6 flex flex-col justify-center'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='my-orders/last'>
          <button
            className='bg-black w-full py-3 text-white rounded-lg'
            onClick={() => handleCheckout()}
          >Checkout</button>
        </Link>
      </div>
    </aside>
  );
});

CheckoutSideMenu.displayName = 'ProductDetail';

export default CheckoutSideMenu;
