import { useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

/**
 * This function calculates total price of a new order
 * @param {Array} products cardProducts: Array of objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((acc, product) => acc + product.price, 0);
};

/**
 * This hook retrieves the current order from the URL parameters
 * @returns {Object} Current order object
 */
export const  useCurrentOrderFromUrl = () => {
  const context = useContext(ShoppingCartContext);
  const { pathname } = useLocation();
  const { id } = useParams();

  const orderId = pathname === '/my-orders/last' ? context.order[context.order.length - 1]?.id : parseInt(id);
  
  return context.order.find((order) => order.id === orderId);
};

/**
 * This hook retrieves the current category from the URL parameters
 * and performs redirection if the category is not allowed
 * @returns {String} Current category
 */
export const useCurrentCategoryFromUrl =  () => {
  const navigate = useNavigate();
  const categoryAllowed = ['all', 'clothes', 'electronics', 'furnitures', 'toys', 'others'];
  const { category } = useParams();
  if (!categoryAllowed.includes(category)) {
    navigate('/category/all');
    return;
  }
  return category;
};
