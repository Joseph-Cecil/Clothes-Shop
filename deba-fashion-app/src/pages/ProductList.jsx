import Navbar from "../components/Navbar";
import Arrivals from "../components/Arrivals";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="Container_ProductList">
      <Navbar />
      <Arrivals />
      <h1>Clothes</h1>
      <div className="FilterContainer_PL">
        <div className="Filter_ProductList">
          <span>Filter Products: </span>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>

          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="Filter_ProductList">
          <span>Sort Products: </span>
          <select>
            <option selected>New Arrivals</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
            
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
