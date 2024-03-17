import { useState, useEffect, useContext, useCallback } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import Search from '../../Components/Search';
import { ShoppingCartContext } from '../../Context';
import { useCurrentCategoryFromUrl } from '../../Utils';

function Home() {
  const category = useCurrentCategoryFromUrl();
  const context = useContext(ShoppingCartContext);
  const [items, setItems] = useState([]);
  
  const filterItemsByCategory = useCallback((items) => {
    if(!category || category.toLocaleLowerCase() === 'all') return items;
    
    const filteredItems = items?.filter((item) => item.category?.name.toLowerCase().includes(category));
    return filteredItems;
  }, [category]);
  
  useEffect(() => {
    setItems(filterItemsByCategory(context.items));
  }, [context.items, filterItemsByCategory]);
  
  const filterItemsBySearch = useCallback((query) => {
    if(query) {
      const filteredItems = context.items?.filter((item) => item.title?.toLowerCase().includes(query?.toLowerCase()));
      setItems(filteredItems);
    } else {
      setItems(context.items);
    }
  }, [context]);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <Search handleSearchChange={filterItemsBySearch}/>
      {context.loadingItems && <p>Estamos cargando no desesperes...</p>}
      <div className='grid grid-cols-4 w-full gap-4 max-w-screen-lg'>
        {
          items && items.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
      {!items && !context.loadingItems && <p>Not found products...</p>}
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
