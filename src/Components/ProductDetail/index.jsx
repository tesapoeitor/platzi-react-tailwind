import { useContext, memo } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = memo(() => {
  const context = useContext(ShoppingCartContext);
  const data = context.productToShow;

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div
          className='cursor-pointer'
          onClick={() => context.closeProductDetail()}>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </div>

      <figure className='px-6 min-h-[310px]'>
        <img
          className='bg-gray-200 w-full h-full object-cover rounded-lg' loading='lazy'
          src={data.images?.[0]}
          alt={data.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>$ {data.price}</span>
        <span className='font-medium  text-lg'>{data.title}</span>
        <span className='font-light text-sm'>{data.description}</span>
      </p>
    </aside>
  );
});

ProductDetail.displayName = 'ProductDetail';

export default ProductDetail;
