import './Products.css';
import { popularProducts } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <div className='heythere'>
      {popularProducts.map((item) => (
        <Product item={item} key={item}/>
      ))}
    </div>
  )
}

export default Products
