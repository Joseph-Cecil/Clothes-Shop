import { Add, Remove } from '@mui/icons-material';
import Arrivals from '../components/Arrivals';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import './Product.css';

const Product = () => {
  return (
    <div className='Container_SingleProduct'>
        <Navbar/>
        <Arrivals/>
        <div className='Wrapper_SingleProduct'>
            <div className='ImgContainer_SingleProduct'>
                <img src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='jeans' />
            </div>
            <div className='InfoContainer_SingleProduct'>
                <h1>Jean Jumpsuit</h1>
                <p>Jumpsuit made from Jeans. Very Quality and affordable.
                    Buy and wear to parties, church, gatherings and many more</p>
                <span>GHC 100</span>

                <div className='FilterContainer_singleProduct'>
                    <div className='Filter_SingleProduct'>
                        <span>Color</span>
                        <div className='FilterColor_Black'/>
                        <div className='FilterColor_darkblue'/>
                        <div className='FilterColor_gray'/>
                    </div>

                    <div className='Filter_SingleProduct'>
                        <span>Size</span>
                        <select>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </div>

                <div className='AddContainer_SingleProduct'>
                    <div className='AmountContainer_SingleProduct'>
                        <Remove/>
                        <span>1</span>
                        <Add/>
                    </div>
                    <button>ADD TO CART</button>
                </div>

            </div>
        </div>
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default Product