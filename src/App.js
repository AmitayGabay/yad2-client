import './App.css';
import AppRoutes from './shared/routes/appRoutes';
import contextStore from "./shared/context/contextStore"
import { useEffect, useState } from 'react';
import { apiGet } from './shared/services/services';
import { GET_PRODUCTS_ROUTE } from './shared/constant/url';
function App() {
  const [products, setProducts] = useState()
  useEffect(() => {
    getProducts();
  }, [])
  // getting products
  const getProducts = async() => {
    const {data} = await apiGet(GET_PRODUCTS_ROUTE);
    setProducts(data);
  }
  return (
    <contextStore.Provider value={{products, setProducts}}>
      <AppRoutes />
    </contextStore.Provider>
  );
}

export default App;
