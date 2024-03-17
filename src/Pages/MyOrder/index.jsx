import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import { useCurrentOrderFromUrl } from '../../Utils';

function MyOrder() {
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1 className='font-medium text-xl'>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {
          useCurrentOrderFromUrl()?.products?.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images?.[0]}
              id={product.id}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
