import { PropTypes } from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  let renderXMarkIcon;
  if(handleDelete)
    renderXMarkIcon = <XMarkIcon className="w-6 h-6 text-black cursor-pointer" onClick={() => handleDelete(id)}/>;

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 min-w-20'>
          <img className='bg-gray-300 w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex justify-between items-center gap2'>
        <p className='text-lg font-medium'> {price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id:  PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func
};

export default OrderCard;
