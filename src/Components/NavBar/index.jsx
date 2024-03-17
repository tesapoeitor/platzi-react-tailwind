import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const leftMenu = [
  {
    to: '/',
    text: 'Shopi',
    className: 'text-lg font-semibold'
  },
  {
    to: 'category/all',
    text: 'All',
    className: ''
  },
  {
    to: 'category/clothes',
    text: 'Clothes',
    className: ''
  },
  {
    to: 'category/electronics',
    text: 'Electronics',
    className: ''
  },
  {
    to: 'category/furnitures',
    text: 'Furnitures',
    className: ''
  },
  {
    to: 'category/toys',
    text: 'Toys',
    className: ''
  },
  {
    to: 'category/others',
    text: 'Others',
    className: ''
  }
];

const rightMenu = [
  {
    to: '',
    text: 'e@example.com'
  },
  {
    to: '/my-orders',
    text: 'My orders'
  },
  {
    to: '/my-account',
    text: 'My account'
  },
  {
    to: '/sign-in',
    text: 'Sign in'
  },
];

const NavItem = ({ to, text, className }) => {
  const activeStyles = 'underline underline-offset-4';

  return (
    <li className={className}>
      {to && (<NavLink 
        to={to} 
        className={({isActive}) => (isActive ? activeStyles : '')}
      >{text}
      </NavLink>
      )}

      {!to && text}
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

const NavBar = () => {
  const context = useContext(ShoppingCartContext);

  const toggleCheckoutSideMenu = () => {
    context.closeProductDetail();
    context.isCheckoutSideMenuOpen
      ? context.closeCheckoutSideMenu()
      : context.openCheckoutSideMenu();
  };

  return (
    <nav className='bg-white flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {leftMenu.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        {rightMenu.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}

        <li className='flex items-center cursor-pointer' onClick={() => toggleCheckoutSideMenu()}>
          <ShoppingBagIcon className='h-6 w-6 text-black'/>
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
