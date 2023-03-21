import { Add, Remove } from "@mui/icons-material";
import Arrivals from "../components/Arrivals";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="Container_Cart">
      <Navbar />
      <Arrivals />
      <div className="Wrapper_Cart">
        <h1>YOUR ITEM</h1>
        <div className="Top_Cart">
          <button className="Notfilled">CONTINUE SHOPPING</button>
          <div className="TopTexts_Cart">
            <span>Jumpsuit(2)</span>
            <span>WishList(0)</span>
          </div>
          <button className="filled" type="filled">
            CHECKOUT NOW
          </button>
        </div>
        <div className="Bottom_Cart">
          <div className="Info_Cart">
            <div className="Product_Cart">
              <div className="ProductDetail_Cart">
                <div className="Image_Cart">
                  <img
                    src="https://www.pngarts.com/files/1/Formal-Shirts-For-Men-Transparent-Image.png"
                    alt="Jumpsuit"
                  />
                </div>
                <div className="Details_Cart">
                  <span>
                    <b>Product: </b>SHIRT
                  </span>
                  <span>
                    <b>ID: </b>895230654761398
                  </span>
                  <div className="ProductColor_Cart" />
                  <span>
                    <b>Size: </b>XL
                  </span>
                </div>
              </div>
              <div className="PriceDetail_Cart">
                <div className="ProductAmountContainer_Cart">
                  <Add />
                  <div className="ProductAmount_Cart">2</div>
                  <Remove />
                </div>

                <div className="ProductPrice_Cart">Ghc 30</div>
              </div>
            </div>
            <hr />
            <div className="Product_Cart">
              <div className="ProductDetail_Cart">
                <div className="Image_Cart">
                  <img
                    src="https://www.pngarts.com/files/4/Fur-Jacket-PNG-Image-Transparent-Background.png"
                    alt="Fur"
                  />
                </div>
                <div className="Details_Cart">
                  <span>
                    <b>Product: </b>Fur
                  </span>
                  <span>
                    <b>ID: </b>89523424761398
                  </span>
                  <div className="ProductColor_Cart" />
                  <span>
                    <b>Size: </b>M
                  </span>
                </div>
              </div>
              <div className="PriceDetail_Cart">
                <div className="ProductAmountContainer_Cart">
                  <Add />
                  <div className="ProductAmount_Cart">1</div>
                  <Remove />
                </div>

                <div className="ProductPrice_Cart">Ghc 100</div>
              </div>
            </div>
          </div>
          <div className="Summary_Cart">
            <h1>ORDER SUMMARY</h1>
            <div className="SummaryItem">
                <span>Subtotal</span>
                <span>Ghc 80</span>
            </div>

            <div className="SummaryItem">
                <span>Delivery</span>
                <span>Ghc 10</span>
            </div>

            <div className="SummaryItem">
                <span>Delivery Discount</span>
                <span>Ghc -5</span>
            </div>

            <div className="SummaryItem_Total">
                <span>Total</span>
                <span>Ghc 85</span>
            </div>
            <button>CheckOut Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
