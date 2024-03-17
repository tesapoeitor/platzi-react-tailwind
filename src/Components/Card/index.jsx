import { useContext, memo } from 'react';
import { PropTypes } from 'prop-types';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Card = memo(({ data }) => {
  const context = useContext(ShoppingCartContext);
  const showProduct = () => {
    context.closeCheckoutSideMenu();
    context.openProductDetail();
    context.setProductToShow(data);
  };

  const addProductToCart = (event) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, data]);
    context.setCount(context.count + 1);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isProductInCart = context.cartProducts.some((product) => product.id === id);
    if (isProductInCart) {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 cursor-default'
          onClick={(event) => event.stopPropagation()}>
          <CheckIcon className='h-6 w-6 text-white'/>
        </div>
      );
    }
    return (
      <div 
        className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        onClick={(event) => addProductToCart(event)}>
        <PlusIcon className='h-6 w-6 text-black'/>
      </div>
    );
  };

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct()}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img className='bg-gray-300 w-full h-full object-cover rounded-lg' loading='lazy' src={data.images[0]} alt={data.title} />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>$ {data.price}</span>
      </p>
    </div>
  );
});

Card.displayName = 'Card';
Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
