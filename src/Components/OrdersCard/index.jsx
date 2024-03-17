import { PropTypes } from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ totalPrice, totalProducts, date }) => {

  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 rounded-lg w-80">
      <div className='flex justify-between items-center w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>{date}</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>$ {totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrdersCard;
